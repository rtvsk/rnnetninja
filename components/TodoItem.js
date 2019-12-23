import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#bbb',
    borderStyle: 'dashed',
    borderRadius: 10,
    fontSize: 18,
    flexDirection: 'row'
  },
  itemText: {
    marginLeft: 10,
  },
});