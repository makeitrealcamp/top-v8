import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  TouchableHighlight,
  SafeAreaView,
  Image,
} from 'react-native';
import Users from './components/Users'
import Contacts from './components/Contacts'

export default function App() {
  function handlePress() {
    Alert.alert('hola press')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hola mundo!!!</Text>
      <Text>Desde MiR</Text>
      <Button
        onPress={handlePress}
        title="click me"
      />
      <Contacts />
      <TouchableHighlight
        activeOpacity={0.6}
        onPress={handlePress}
        underlayColor="#DDDDDD"
      >
        <View>
          <Text>Touchable</Text>
        </View>
      </TouchableHighlight>
      <Image
        style={styles.image}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg' }}
      />
      <Users />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
  }
});
