import React from 'react';
import {View} from 'react-native';
import OtpInput from '../../components/otp-component/otp.input';
import TimerView from '../../components/timer-component/timer';
import {otpStyle as styles} from './otp.style';
import {OtpViewModel} from './otp.viewmodel';
import {useRoute} from '@react-navigation/native';

const OtpScreen = () => {
  const route = useRoute();
  const {isValidOtp, onCallbackOtp} = OtpViewModel(route.params?.data);
  return (
    <View style={styles.container}>
      <OtpInput isInvalid={!isValidOtp} onTextChange={onCallbackOtp} />
      <TimerView />
    </View>
  );
};

export default OtpScreen;
