import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function About() {
  const navigation = useNavigation()
  const [token, setToken] = useState('')

  useEffect(() => {
    AsyncStorage
      .getItem('token')
      .then(token => {
        setToken(token)
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Text>{token}</Text>
      <Button
        title="go to home"
        onPress={() => {
          navigation.navigate('Home')
        }}
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
