import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProps } from '../navigation/NavigationTypes';

const LoginScreen: React.FC<{ navigation: NavigationProps<'Dashboard'> }> = ({ navigation }) => {
  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={() => { }} />
      <Button title="Register" onPress={navigateToRegister} />
    </View>
  );
};

export default LoginScreen;
