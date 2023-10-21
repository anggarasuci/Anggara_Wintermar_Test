import {useCallback, useState} from 'react';
import {ProfileModel} from '../../../domain/models/profile.model';
import {useDispatch} from 'react-redux';
import ProfileAction from '../../../infrastructure/redux/actions/profile.action';
import {useNavigation} from '@react-navigation/native';

const OtpViewModel = (data: ProfileModel) => {
  const [isValidOtp, setIsValidOtp] = useState<boolean>(true);
  const dispatch = useDispatch();
  const {setProfile} = ProfileAction();
  const navigation = useNavigation();

  const onCallbackOtp = useCallback(
    (value: string) => {
      //assume isvalid -> 111111
      const isValid = value === '111111' || value.length < 6;
      setIsValidOtp(isValid);

      if (isValid && value.length === 6) {
        dispatch(setProfile(data));
        navigation.navigate('Login');
      }
    },
    [isValidOtp, dispatch],
  );
  return {
    isValidOtp,
    onCallbackOtp,
  };
};

export {OtpViewModel};
