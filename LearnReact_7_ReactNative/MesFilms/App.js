import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Store from "./Store/configureStore";

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
