import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {ProfileState} from '../../../infrastructure/redux/reducers/profile.reducer';
import {RootState} from '../../../infrastructure/redux/store';
import ProfileAction from '../../../infrastructure/redux/actions/profile.action';

const WelcomeViewModel = () => {
  const navigation = useNavigation();
  const state: ProfileState = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();
  const {deleteProfile} = ProfileAction();

  const onLogout = useCallback(() => {
    dispatch(deleteProfile);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Registration',
          },
        ],
      }),
    );
  }, [dispatch]);
  return {
    profile: state?.profile,
    onLogout,
  };
};

export {WelcomeViewModel};
