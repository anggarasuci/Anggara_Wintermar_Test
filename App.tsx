/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import OtpScreen from './src/presentation/screens/otp/otp.screen';
import {RootSiblingParent} from 'react-native-root-siblings';
import RegistrationScreen from './src/presentation/screens/registration/registration.screen';
import store from './src/infrastructure/redux/store';
import {Provider} from 'react-redux';
import LoginScreen from './src/presentation/screens/login/login.screen';
import WelcomeScreen from './src/presentation/screens/welcome/welcome.screen';

const Stack = createNativeStackNavigator();
const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootSiblingParent>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Registration"
                component={RegistrationScreen}
              />
              <Stack.Screen name="Otp" component={OtpScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </RootSiblingParent>
    </SafeAreaView>
  );
};

export default App;
