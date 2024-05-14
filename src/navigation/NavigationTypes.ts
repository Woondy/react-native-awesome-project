import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Stores: undefined;
  AccountQR: undefined;
  Messages: undefined;
  Account: undefined;
};

export type NavigationProps<Screen extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, Screen>;
