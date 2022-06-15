import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AppBottomTabBar from './src/navigations/appBottomTabBar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <AppBottomTabBar/>
    </NavigationContainer>
  );
}






