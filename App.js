import React, { useState } from 'react';
import {
  StyleSheet,
  Alert,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/Sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy smth', key: '1' },
    { text: 'call smbd', key: '2' },
    { text: 'walk smwh', key: '3' },
    { text: 'what ????', key: '4' },
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => [...prevTodos.filter(todo => todo.key !== key)])
  }

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos,
        ]});
    } else {
      Alert.alert('Oops', 'Todos must be more than 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ]);
    }
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(item, index) => `list-item-${item.key}`}
              renderItem={({item}) => (
                <TodoItem
                  item={item}
                  pressHandler={() => {pressHandler(item.key); }}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    // backgroundColor: 'pink',
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    // backgroundColor: 'yellow',
    flex: 1,
  },
  // item: {
  //   marginTop: 24,
  //   fontSize: 24,
  //   padding: 30,
  //   backgroundColor: 'pink',
  //   marginHorizontal: 10,
  //   marginTop: 24
  // }
});
