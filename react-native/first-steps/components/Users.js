import React from 'react'
import { View, FlatList, Text } from 'react-native'
import faker from 'faker'
import { v4 as uuidv4 } from 'uuid'

const users = Array.from({ length: 100 }, () => {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    spirit: faker.animal.rabbit(),
  }
})

function Users() {
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.spirit}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      {
        /* {users.map(item => (
        <View key={item.id}>
        <Text>{item.name}</Text>
        <Text>{item.spirit}</Text>
          </View>
      ))} */
      }
    </View>
  )
}

export default Users
