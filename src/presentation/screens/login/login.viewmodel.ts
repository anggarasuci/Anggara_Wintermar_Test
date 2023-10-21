import {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {ProfileState} from '../../../infrastructure/redux/reducers/profile.reducer';
import {RootState} from '../../../infrastructure/redux/store';

const LoginViewModel = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isMatch, setIsMatch] = useState<boolean>(true);
  const navigation = useNavigation();
  const state: ProfileState = useSelector((state: RootState) => state.profile);

  const onLogin = useCallback(() => {
    setIsMatch(true);
    if (
      username === state?.profile?.username &&
      password === state?.profile?.password
    ) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Welcome',
            },
          ],
        }),
      );
    } else {
      setIsMatch(false);
    }
  }, [username, password, isMatch]);
  return {
    username,
    password,
    isMatch,
    setUsername,
    setPassword,
    onLogin,
  };
};

export {LoginViewModel};
