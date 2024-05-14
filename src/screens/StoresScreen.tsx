import React from 'react';
import { NavigationProps } from '../navigation/NavigationTypes';
import { Text } from 'react-native-paper';
import { ScreenWrapper } from '../components';

const StoresScreen: React.FC<{ navigation: NavigationProps<'Stores'> }> = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <Text>Stores Screen</Text>
    </ScreenWrapper>
  );
};

export default StoresScreen;
