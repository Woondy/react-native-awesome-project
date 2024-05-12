import React from 'react';
import { PaperProvider } from 'react-native-paper';
import theme from './theme';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const isDarkMode = false;

  return (
    <PaperProvider theme={isDarkMode ? theme.dark : theme.light}>
      {children}
    </PaperProvider>
  );
};

export default ThemeProvider;
