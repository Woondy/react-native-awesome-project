import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: { userId: string };
};

export type NavigationProps<Screen extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, Screen>;
