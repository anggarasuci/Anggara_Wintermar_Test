import {StyleSheet} from 'react-native';

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#285698',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});
