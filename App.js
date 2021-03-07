/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import MainNavigator from './app/navigation/routes';

const App: () => React$Node = () => {
  return (
    <>
      <MainNavigator />
    </>
  );
};


export default App;
