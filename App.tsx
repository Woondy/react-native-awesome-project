import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import ReduxProvider from './src/store';
import ThemeProvider from './src/theme';
import { makeServer } from './mirage';

const App: React.FC = () => {
  makeServer({ environment: "development" });

  return (
    <ReduxProvider>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
