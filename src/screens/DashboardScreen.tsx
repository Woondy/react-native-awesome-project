import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAppDispatch } from '../store/hooks';
import { logoutAsync } from '../store/thunks/authThunks';

const DashboardScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogoutPress = async () => {
    await dispatch(logoutAsync());
  };

  return (
    <View>
      <Text>Dashboard Screen</Text>
      <Button title="Logout" onPress={handleLogoutPress} />
    </View>
  );
};

export default DashboardScreen;
