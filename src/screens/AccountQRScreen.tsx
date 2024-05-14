import React from 'react';
import { NavigationProps } from '../navigation/NavigationTypes';
import { Text } from 'react-native-paper';
import { ScreenWrapper } from '../components';

const AccountQRScreen: React.FC<{ navigation: NavigationProps<'AccountQR'> }> = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <Text>Account QR Screen</Text>
    </ScreenWrapper>
  );
};

export default AccountQRScreen;
