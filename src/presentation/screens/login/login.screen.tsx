import React from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {loginStyle as styles} from './login.style';
import InputView from '../../components/input-component/input';
import {LoginViewModel} from './login.viewmodel';

const LoginScreen = () => {
  const {username, password, isMatch, setUsername, setPassword, onLogin} =
    LoginViewModel();
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
          label={'Password'}
          value={password}
          secureTextEntry={true}
          placeholder={'type here...'}
          onTextChange={setPassword}
        />

        {!isMatch && (
          <Text style={styles.errorText}>Username and Password not match</Text>
        )}

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.submitButton}
          onPress={onLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
