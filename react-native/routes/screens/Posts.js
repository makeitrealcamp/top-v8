import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Button,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

export default function Posts() {
  const navigation = useNavigation()
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts'
    })
      .then(({ data }) => setPosts(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if(loading) return <ActivityIndicator />
  if(error) return <Text>Something went wrong</Text>
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
            <Button
              title="View more"
              onPress={() => navigation.navigate('Post', { id: item.id })}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '800',
  },
  body: {
    fontSize: 16,
  }
})
