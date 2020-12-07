import { StatusBar } from 'expo-status-bar';
import React, {Component}from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './components/Login';
import Acceuil from './components/Acceuil';


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Acceuil} />
      <Stack.Screen name="Notifications" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}