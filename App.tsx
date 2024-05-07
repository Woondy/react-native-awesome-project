import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import ReduxProvider from './src/store';
import { makeServer } from './mirage';

const App: React.FC = () => {
  makeServer({ environment: "development" });
  
  return (
    <ReduxProvider>
      <RootNavigator />
    </ReduxProvider>
  );
};

export default App;
