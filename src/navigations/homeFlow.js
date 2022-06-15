import React, { memo,useState,useEffect,useRef } from 'react';


import {
 
  View,
  Text,
  
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/homeScreen';
import HomeHeaderItems from '../screens/home/homeScreen';



// components appbar



function Setting() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Setting!</Text>
    </View>
  );
}
const Stack = createStackNavigator()

function HomeFlow() {
  return (
    <Stack.Navigator >
      <Stack.Screen 
      // options={{ title: '' }}
    
      options={{
        header: ()=>(<View/>)
      }}
      name="Home" component={HomeScreen} />
    {/* <Stack.Screen name="Profile" component={Profile} /> */}
      {/* <Stack.Screen name="Setting" component={Setting} /> */}
    </Stack.Navigator>
  );
}







export default HomeFlow;



