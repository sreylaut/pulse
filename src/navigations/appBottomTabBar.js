import React, { useContext}  from 'react';
import { Text, View ,StyleSheet, TouchableHighlight,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator,useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import {theme} from '../config/themes/colors';
import HomeFlow from './homeFlow';
import AppBar from '../components/appBar';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  item: {
    flex: 1,
    alignSelf: "center",
    justifyContent:"center",

  },
  roundshape:  {

    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
  
    // backgroundColor:'#fff',
    borderRadius:30,
    backgroundColor: theme.colors.white,
    shadowOffset:{width:20,height:20},
    shadowRadius:20,
    elevation:20,
    shadowColor:theme.colors.secondary,
    height: 30, //any of height,
    width: 30, //any of width
    justifyContent:"center",
    borderRadius: 22   // it will be height/2
  }
});

function TapIcon  ({name,color}) {
  return (
    <TouchableOpacity
   style={styles.roundshape}>
    <View style={styles.container}>
      
{/* <MaterialCommunityIcons name={name}  size={20} color={color} /> */}
<Ionicons name={name}  size={20} color={color} />
    </View>
    </TouchableOpacity>  
  );
}


function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}
function Setting() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Setting!</Text>
    </View>
  );
}

function Edit() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Edit!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function AppBottomTabBar() {
  const ThemeContext = React.createContext({})
  // const tabBarHeight = useBottomTabBarHeight();

  const themeFromContext = useContext(ThemeContext)
  return (
    <Tab.Navigator
    children= "AppBar"
      initialRouteName="HomeFlow"
      screenOptions={{
        tabBarActiveTintColor:'#FF6600',
        tabBarStyle: { position: 'relative',height:100},

      }}
    >
      <Tab.Screen
        name="HomeFlow"
        component={HomeFlow}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <TapIcon name="home" color={color} />
          ),
          // headerTitle: props => <LogoTitle {...props} />,
          header: () => (
            <AppBar/>
          ),
        }}

      
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <TapIcon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <TapIcon name="restaurant" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Edit"
        component={Edit}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <TapIcon name="basketball" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        // tabBar={props => <MyTabBar {...props} />}
        options={{
          tabBarLabel: '',
          // tabBarButton: props => <TouchableOpacity {...props} />
          tabBarIcon: ({ color, size }) => (
            <TapIcon name="basket" color={color} size={size} />

            // <View><MaterialCommunityIcons name="account" color={color} size={size} /></View>
            
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppBottomTabBar;
