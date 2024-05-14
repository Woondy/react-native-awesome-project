import React from 'react';
import { NavigationProps } from '../navigation/NavigationTypes';
import { Text } from 'react-native-paper';
import { ScreenWrapper } from '../components';

const MessagesScreen: React.FC<{ navigation: NavigationProps<'Messages'> }> = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <Text>Messages Screen</Text>
    </ScreenWrapper>
  );
};

export default MessagesScreen;
