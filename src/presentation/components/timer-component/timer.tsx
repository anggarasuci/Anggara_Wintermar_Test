import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {timerStyle as styles} from './timer.style';

const TimerView = () => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval: any;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const handleResendClick = () => {
    setTimer(30);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{timer} seconds</Text>
      {timer === 0 && (
        <TouchableOpacity
          onPress={handleResendClick}
          style={styles.resendButton}>
          <Text style={styles.resendButtonText}>Resend</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TimerView;
