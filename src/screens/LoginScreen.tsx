import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProps } from '../navigation/NavigationTypes';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/slices/authSlice';

const LoginScreen: React.FC<{ navigation: NavigationProps<'Dashboard'> }> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const handleLoginPress = async () => {
    dispatch(login());
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLoginPress} />
      <Button title="Register" onPress={handleRegisterPress} />
    </View>
  );
};

export default LoginScreen;
