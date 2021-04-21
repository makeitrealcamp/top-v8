import React, { useState } from 'react'
import { View, TextInput, Switch, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker';

function Form() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState();

  function handleChange(text) {
    setName(text)
  }

  function handleSubmit() {
    console.log(name, age, password, terms, selectedLanguage)
  }

  return (
    <View>
      <TextInput
        placeholder="Insert your name"
        onChangeText={handleChange}
        value={name}
      />
      <TextInput
        placeholder="Insert your age"
        onChangeText={text => setAge(text)}
        value={age}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
        value={password}
      />
      <Switch
        onValueChange={() => setTerms(prevTerms => !prevTerms)}
        value={terms}
      />
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Button
        title="Crear usuario"
        onPress={handleSubmit}
      />
    </View>
  )
}

export default Form
