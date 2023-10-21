import {useCallback, useState} from 'react';
import {Regex, Validation} from '../../../infrastructure/utils/validation';
import {useNavigation} from '@react-navigation/native';
import {ProfileModel} from '../../../domain/models/profile.model';

const RegistrationViewModel = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [isValidMinChar, setIsValidMinChar] = useState<boolean>(false);
  const [isValidUpperCase, setIsValidUpperCase] = useState<boolean>(false);
  const [isValidLowerCase, setIsValidLowerCase] = useState<boolean>(false);
  const [isValidSymbol, setIsValidSymbol] = useState<boolean>(false);

  const navigation = useNavigation();

  const onSetPassword = useCallback(
    (value: string) => {
      setPassword(value);
      checkPassword(value);
    },
    [password],
  );

  const checkPassword = useCallback(
    (value: string) => {
      setIsValidLowerCase(Validation.isValid(value, Regex.lower));
      setIsValidUpperCase(Validation.isValid(value, Regex.upper));
      setIsValidMinChar(Validation.isValid(value, Regex.minChar));
      setIsValidSymbol(Validation.isValid(value, Regex.symbolRegex));
    },
    [isValidLowerCase, isValidUpperCase, isValidMinChar, isValidSymbol],
  );

  const onSubmit = useCallback(() => {
    const data: ProfileModel = {
      username: username,
      password: password,
      email: email,
    };
    navigation.navigate('Otp', {data: data});
  }, [username, password, email]);

  return {
    username,
    email,
    password,
    isValidLowerCase,
    isValidUpperCase,
    isValidMinChar,
    isValidSymbol,
    setUsername,
    setEmail,
    onSetPassword,
    onSubmit,
  };
};

export {RegistrationViewModel};
