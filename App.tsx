import React from 'react';
import {StatusBar, Platform} from 'react-native';

import Home from './src/pages/Home';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : null} />
      <Home />
    </>
  );
};

export default App;
