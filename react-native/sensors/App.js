import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps';
import { Gyroscope } from 'expo-sensors'

export default function App() {
  const [locationPermission, setLocationPermission] = useState(false)
  const [location, setLocation] = useState(null)
  const [gyroscope, setGyroscope] = useState(null)

  useEffect(() => {
    Location
      .requestForegroundPermissionsAsync()
      .then(({ status }) => setLocationPermission(status === 'granted'))
  }, [])

  useEffect(() => {
    Gyroscope
      .isAvailableAsync()
      .then(isAvailable => {
        if(isAvailable) {
          Gyroscope.addListener(data => setGyroscope(data))
          Gyroscope.setUpdateInterval(1000)
        }
      })
  }, [])

  async function handleGetLocation() {
    const data = await Location.getCurrentPositionAsync({
      accuracy: 1,
    })

    setLocation(data)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Get Location"
        onPress={handleGetLocation}
      />
      {!!location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Home"
            description="Home"
          />
        </MapView>
      )}
      {!!gyroscope && (
        <View>
          <Text>{gyroscope.x}</Text>
          <Text>{gyroscope.y}</Text>
          <Text>{gyroscope.z}</Text>
        </View>
      )}
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
  map: {
    width: 300,
    height: 300,
  }
});
