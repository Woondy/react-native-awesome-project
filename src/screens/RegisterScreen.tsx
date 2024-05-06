import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProps } from '../navigation/NavigationTypes';

const RegisterScreen: React.FC<{ navigation: NavigationProps<'Register'> }> = ({ navigation }) => {
  const handleBackToLoginPress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text>Register Screen</Text>
      <Button title="Back to Login" onPress={handleBackToLoginPress} />
    </View>
  );
};

export default RegisterScreen;
