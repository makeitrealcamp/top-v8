import React from 'react'
import { View, SectionList, Text } from 'react-native'

const users = [
  {
    title: 'A',
    data: [
      { id: 1, name: 'Ana' }
    ],
  },
  {
    title: 'J',
    data: [
      { id: 2, name: 'Juan' }
    ]
  },
  {
    title: 'M',
    data: [
      { id: 3, name: 'María' },
      { id: 4, name: 'Martin' },
    ]
  }
]

function Contacts() {
  return (
    <View>
      <SectionList
        sections={users}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text>{section.title}</Text>
        )}
        stickySectionHeader
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Contacts
