import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import Item from './components/Item';
export default function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);
  const addPersonHandler = () => {
    setItems([...items, newItem]);
    setNewItem('')
  }
  const textHandler = (data) => {
    console.log(data)
    setNewItem(data)
  }
  const removeHandler = (itemToRemove) => {
    const newItems = items.filter((item) => item !== itemToRemove);
    setItems(newItems);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to ASAC 2023!</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} placeholder="add person" onChangeText={textHandler} value={newItem} />

      <Button title="add" onPress={addPersonHandler} />
      {/* <View>
        {
          items.map((item, i) => {
            return (
              <Text key={i}>{item}</Text>
            )
          })
        }
      </View> */}
      <FlatList
        data={items}
        renderItem={(itemData) => (
          <Item title={itemData.item} onDelete={removeHandler} />
        )}
      />
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
  welcome: {
    color: 'red',
    fontSize: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
