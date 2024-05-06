import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAppDispatch } from '../store/hooks';
import { logout } from '../store/slices/authSlice';

const DashboardScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogoutPress = async () => {
    dispatch(logout());
  };

  return (
    <View>
      <Text>Dashboard Screen</Text>
      <Button title="Logout" onPress={handleLogoutPress} />
    </View>
  );
};

export default DashboardScreen;
