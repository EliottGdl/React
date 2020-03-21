import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import Search from "../Components/Search";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Rechercher" component={Search} />
    </Stack.Navigator>
  );
}

export default MyStack;