import React from 'react';
import { View, Text } from 'react-native';
import { NavigationProps } from '../navigation/NavigationTypes';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loginAsync } from '../store/thunks/authThunks';
import { Button } from 'react-native-paper';

const LoginScreen: React.FC<{ navigation: NavigationProps<'Dashboard'> }> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector(state => state.auth.error);

  const handleLoginPress = async () => {
    try {
      await dispatch(loginAsync({ username: 'user1', password: '123456' }));
    } catch (error: any) {
      console.error('Login failed:', error.message);
    }
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Text>{errorMessage}</Text>
      <Button mode="contained" onPress={handleLoginPress}>Login</Button>
      <Button mode="contained" onPress={handleRegisterPress}>Register</Button>
    </View>
  );
};

export default LoginScreen;
