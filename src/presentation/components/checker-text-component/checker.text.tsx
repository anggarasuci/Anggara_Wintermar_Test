import React from 'react';
import {View, Image, Text} from 'react-native';
import {checkerTextStyle as styles} from './checker.text.style';

interface CheckerTextProps {
  isValid: boolean;
  label: string;
}

const CheckerText: React.FC<CheckerTextProps> = ({isValid, label}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          isValid
            ? require('../../../assets/images/checked.png')
            : require('../../../assets/images/cross.png')
        }
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default CheckerText;
