import React from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {registrationStyle as styles} from './registration.style';
import InputView from '../../components/input-component/input';
import {Regex} from '../../../infrastructure/utils/validation';
import {RegistrationViewModel} from './registration.viewmodel';
import CheckerText from '../../components/checker-text-component/checker.text';

const RegistrationScreen = () => {
  const {
    username,
    email,
    password,
    isValidLowerCase,
    isValidMinChar,
    isValidSymbol,
    isValidUpperCase,
    setUsername,
    setEmail,
    onSetPassword,
    onSubmit,
  } = RegistrationViewModel();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <InputView
          label={'Username'}
          value={username}
          placeholder={'type here...'}
          onTextChange={setUsername}
        />

        <InputView
          label={'Email'}
          value={email}
          regex={[Regex.email]}
          errorMessage="Invalid Email"
          placeholder={'type here...'}
          onTextChange={setEmail}
        />

        <InputView
          label={'Password'}
          value={password}
          secureTextEntry={true}
          regex={[Regex.minChar, Regex.symbolRegex, Regex.lower, Regex.upper]}
          errorMessage="Password must contain: 8 char, lowecase, uppercase and symbol"
          placeholder={'type here...'}
          onTextChange={onSetPassword}
        />

        <CheckerText
          isValid={isValidMinChar}
          label="Password must contain at least 8 characters"
        />
        <CheckerText
          isValid={isValidLowerCase}
          label="Password must contain at least a lowercase letter"
        />
        <CheckerText
          isValid={isValidUpperCase}
          label="Password must contain at least an uppercase letter"
        />
        <CheckerText
          isValid={isValidSymbol}
          label="Password must contain at least a symbol"
        />
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.submitButton}
          onPress={onSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RegistrationScreen;
