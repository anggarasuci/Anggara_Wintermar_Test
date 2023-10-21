import {StyleSheet} from 'react-native';

export const welcomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  welcomeLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9E9E9E',
  },
  label: {
    marginTop: 10,
    fontSize: 12,
    color: '#9E9E9E',
  },
});
