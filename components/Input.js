import React, { useState, useReducer } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

export default function Input({ placeholder, onSubmit }) {
  const [text, setText] = useState('')

    const handleSave = () => {
      if (text.trim() !== '') {
        onSubmit(text)
        setText(''); 
      }
    };


  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      value={text}
      placeholder={placeholder}
      onChangeText={setText}
    />
          <Button
              onPress={handleSave}
              title="Save"
              color="#841584"
            />
            
      </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex:1,
    padding: 15,
    height: 50,

  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginRight: 5,
  },
})