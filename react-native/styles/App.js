import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components'

const Box = styled(View)`
  width: 100px;
  height: 100px;
  background-color: goldenrod;
`

export default function App() {
  return (
    <View style={styles.container}>
      <Box />
      <View style={styles.box}/>
      <Text style={styles.heading}>Hola mundo</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'goldenrod',
  },
  heading: {
    fontSize: 24,
    color: '#333',
    marginVertical: 20,
  }
});
