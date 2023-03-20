import React, { useState, } from 'react';
import { View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LoginProvider } from './LoginProvider';
import { MainNavigator } from './MainNavigator';
function App() {
  return (
    <LoginProvider>
      <MainNavigator />
    </LoginProvider>
  )
}
export default App;