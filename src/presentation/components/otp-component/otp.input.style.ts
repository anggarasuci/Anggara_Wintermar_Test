import {StyleSheet} from 'react-native';

export const otpInputStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    width: 40,
    height: 40,
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10,
    borderRadius: 20,
  },
  errorText: {
    marginVertical: 10,
    textAlign: 'center',
    color: 'red',
  },
});
