import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {welcomeStyle as styles} from './welcome.style';
import {WelcomeViewModel} from './welcome.viewmodel';

const WelcomeScreen = () => {
  const {profile, onLogout} = WelcomeViewModel();
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeLabel}>WELCOME</Text>
      <Text style={styles.label}>{profile?.username}</Text>
      <Text style={styles.label}>{profile?.email}</Text>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.submitButton}
        onPress={onLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
