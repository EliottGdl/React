import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from "./Components/Search";

export default function App() {
  return (
      <Search/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
