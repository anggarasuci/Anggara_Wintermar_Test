import React, {useCallback, useEffect, useRef, useState} from 'react';
import {otpInputStyle as styles} from './otp.input.style';
import {TextInput, View, Text} from 'react-native';

interface OtpInputProps {
  isInvalid: Boolean;
  onTextChange: (value: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({isInvalid, onTextChange}) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<TextInput[]>([]);

  useEffect(() => {
    if (isInvalid) {
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0].focus();
    }
  }, [isInvalid]);

  const handleInputChange = useCallback(
    (index: number, value: string) => {
      const newOtp = [...otp];
      newOtp[index] = value.charAt(value.length - 1);
      setOtp(newOtp);

      if (value && index < newOtp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
      onTextChange?.(newOtp.join(''));
    },
    [otp],
  );

  const handleKeyPress = useCallback(
    (index: number, event: {nativeEvent: {key: string}}) => {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      if (
        event.nativeEvent.key === 'Backspace' &&
        index > 0 &&
        otp[index] === ''
      ) {
        inputRefs.current[index - 1].focus();
      }

      onTextChange?.(newOtp.join(''));
    },
    [otp],
  );

  return (
    <View>
      <View style={styles.container}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={digit}
            onChangeText={(value: string) => handleInputChange(index, value)}
            keyboardType="numeric"
            maxLength={2}
            ref={(ref: any) => (inputRefs.current[index] = ref)}
            onKeyPress={(event: any) => handleKeyPress(index, event)}
          />
        ))}
      </View>
      {isInvalid && <Text style={styles.errorText}>Invalid OTP</Text>}
    </View>
  );
};

export default OtpInput;
