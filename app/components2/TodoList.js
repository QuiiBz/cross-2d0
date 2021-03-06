import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import TodoItem from './TodoItem';
import AddTodo from './addTodo';

export default function App() {
    const [todos, setTodos] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'create an app', key: '2' },
        { text: 'play on the switch', key: '3' },
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.key != key));
    };

    const submitHandler = (text) => {
        setTodos((prevTodos) => [{ text, key: Math.random().toString() }, ...prevTodos]);
    };

    return (
      <TouchableWithoutFeedback
          onPress={() => {
                Keyboard.dismiss();
                console.log('dismissed keyboard');
            }}
        >
          <View style={styles.container}>
              <View style={styles.content}>
                  <AddTodo submitHandler={submitHandler} />
                  <View style={styles.list}>
                      <FlatList
                          data={todos}
                          renderItem={({ item }) => (
                              <TodoItem item={item} pressHandler={pressHandler} />
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
        padding: 40,
    },
    list: {
        marginTop: 20,
    },
});
