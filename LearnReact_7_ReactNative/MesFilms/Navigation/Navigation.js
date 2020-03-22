import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import Search from "../Components/Search";
import FilmDetail from "../Components/FilmDetail";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Rechercher" component={Search} />
      <Stack.Screen name="Details" component={FilmDetail} />
    </Stack.Navigator>
  );
}

export default MyStack;