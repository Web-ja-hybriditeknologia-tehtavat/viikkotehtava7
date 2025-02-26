import React, { useReducer, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import List from './components/List.js'
import Input from './components/Input'
import { actionCreators, reducer, initialState } from './components/Todos.js'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [text, setText] = useState('');



  return (
    <View style={styles.container}>
      <Input
        placeholder={'Add a new Todo...'}
        value={text}
        onSubmit={(text) => dispatch(actionCreators.add(text))}
      />

      <List
        items={state.items}
        onPressItem={(id) => dispatch(actionCreators.remove(id))}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});