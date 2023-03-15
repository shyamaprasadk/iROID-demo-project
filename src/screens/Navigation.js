import React from 'react';
import {Text, Image} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from './Splash';
import LoginScreen from './LoginScreen';
import ProductScreen from './ProductScreen';
import Profile from '../componets/account/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
  const options = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

const BottomNavigation = () => {
  const options = {
    headerShown: false,
  };
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? <Text style={{color: '#000'}}>Home</Text> : null,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../../asset/home-active.png')}
                style={{height: 25, width: 25}}
              />
            ) : (
              <Image
                source={require('../../asset/home-inactive.png')}
                style={{height: 25, width: 25}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? <Text style={{color: '#000'}}>Profile</Text> : null,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../../asset/profile-active.png')}
                style={{height: 25, width: 25}}
              />
            ) : (
              <Image
                source={require('../../asset/profile-inactive.png')}
                style={{height: 25, width: 25}}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => (
  <NavigationContainer>
    <StackNavigation />
  </NavigationContainer>
);

export default Navigation;
