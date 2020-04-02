import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Store from "./Store/configureStore";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";

export default function App() {
  let persistor = persistStore(Store);
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
