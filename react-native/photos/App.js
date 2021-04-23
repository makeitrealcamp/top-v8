import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

export default function App() {
  const [cameraRollPermission, setCameraRollPermission] = useState('denied')
  const [cameraPermission, setCameraPermission] = useState(false)
  const [image, setImage] = useState(null)

  useEffect(() => {
    ImagePicker
      .requestMediaLibraryPermissionsAsync()
      .then(({ status }) => setCameraRollPermission(status))

    ImagePicker
      .requestCameraPermissionsAsync()
      .then(({ status }) => setCameraPermission(status === 'granted'))
  }, [])

  async function handlePickImage() {
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
    })

    if(!data.cancelled) {
      setImage(data)
    }
  }

  async function handleTakePicture() {
    const data = await ImagePicker.launchCameraAsync({
      mediaType: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3]
    })

    if(!data.cancelled) {
      setImage(data)
    }
  }

  if(cameraRollPermission === 'denied') {
    return (
      <View style={styles.container}>
        <Text>You need camera roll permissions to use this app</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Pick Image"
        onPress={handlePickImage}
      />
      {!!cameraPermission && (
        <Button
          title="Take a Picture"
          onPress={handleTakePicture}
        />
      )}
      {!!image && (
        <Image
          style={styles.image}
          source={{ uri: image.uri }}
        />
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
  image: {
    width: 400,
    height: 300,
  }
});
