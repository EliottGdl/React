import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Search from "../Components/Search";
import FilmDetail from "../Components/FilmDetail";
import Favorites from "../Components/Favorites";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Rechercher" component={Search} />
      <Stack.Screen name="Details" component={FilmDetail} />
    </Stack.Navigator>
  );
}

const Stack2 = createStackNavigator();

function MyStack2 () {
  return (
    <Stack2.Navigator>
      <Stack2.Screen name="Favoris" component={Favorites} />
      <Stack2.Screen name="Details" component={FilmDetail} />
    </Stack2.Navigator>
  );
}

const MoviesTabNavigator = createBottomTabNavigator();

function MyTabs() {
  return (
    <MoviesTabNavigator.Navigator
      tabBarOptions={{
      }}
    >
      <MoviesTabNavigator.Screen
        name="Rechercher"
        component={MyStack}
        options={{
          tabBarLabel: "Rechercher",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-search" color={color} size={size} />
          )
        }}
      />

      <MoviesTabNavigator.Screen
        name="Favoris"
        component={MyStack2}
        options={{
          tabBarLabel: "Favoris",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          )
        }}
      />

    </MoviesTabNavigator.Navigator>
  );
}

export default MyTabs;
