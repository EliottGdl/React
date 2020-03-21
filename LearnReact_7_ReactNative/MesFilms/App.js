import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./Navigation/Navigation";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}

