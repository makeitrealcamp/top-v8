import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function About() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>About</Text>
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
