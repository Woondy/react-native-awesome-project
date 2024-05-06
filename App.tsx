import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import ReduxProvider from './src/store';

const App: React.FC = () => {
  return (
    <ReduxProvider>
      <RootNavigator />
    </ReduxProvider>
  );
};

export default App;
