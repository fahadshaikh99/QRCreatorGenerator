import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Main';
import Profile from './src/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import LogOut from './src/LogOut';
import Details from './src/Details';


const Tab = createMaterialTopTabNavigator();

function Home() {
  return (
  
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LogOut} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Videos" component={LogOut} />
    </Tab.Navigator>
  
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} 
         options={{
          headerTitle: "Navigation V5",
          headerStyle: {
            backgroundColor: 'white',
            elevation: 0
          }
      }}
        

        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}