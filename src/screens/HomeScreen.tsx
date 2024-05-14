import React from 'react';
import { NavigationProps } from '../navigation/NavigationTypes';
import { Text } from 'react-native-paper';
import { ScreenWrapper } from '../components';

const HomeScreen: React.FC<{ navigation: NavigationProps<'Home'> }> = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <Text>Home Screen</Text>
    </ScreenWrapper>
  );
};

export default HomeScreen;
