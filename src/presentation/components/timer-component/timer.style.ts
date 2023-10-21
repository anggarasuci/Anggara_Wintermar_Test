import {StyleSheet} from 'react-native';

export const timerStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    marginTop: 20,
    fontSize: 20,
    marginBottom: 5,
  },
  resendButton: {
    backgroundColor: '#285698',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resendButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
