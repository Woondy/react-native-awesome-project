import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logoutAsync } from '../store/thunks/authThunks';

const DashboardScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(state => state.auth.accessToken);

  const handleLogoutPress = async () => {
    try {
      await dispatch(logoutAsync());
    } catch (error: any) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <View>
      <Text>Dashboard Screen</Text>
      <Text>{accessToken}</Text>
      <Button title="Logout" onPress={handleLogoutPress} />
    </View>
  );
};

export default DashboardScreen;
