import React, {  useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  }

  return (
    <View>
      <TextInput
        placeholder='what to do?'
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button title="Add Todo" onPress={() => submitHandler(text)} color="coral" />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  }
});