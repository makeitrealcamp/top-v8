import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home({ navigation }) {
  async function handleLogin() {
    const token = 'asdyfiywaeuiotryuksladf'
    await AsyncStorage.setItem('token', token)
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="go to about"
        onPress={() => {
          navigation.navigate('About')
        }}
      />
      <Button
        title="go to posts"
        onPress={() => {
          navigation.navigate('Posts')
        }}
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
