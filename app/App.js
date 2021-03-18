import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import "./app.css";
import TodoList from "./components/TodoList";
import SignUp from "./components/SignUp";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
function Tasks({ navigation }) {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View>
      <SignUp />
      <Button
        title="Go to Tasks"
        onPress={() => navigation.navigate("Tasks")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  regform: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#36485f",
    paddingLeft: 60,
    paddingRight: 60,
  },
  TasksPage: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "gold",
    paddingLeft: 60,
    paddingRight: 60,
  },
  backgroundColorTasks: {
    backgroundColor: "yellow",
  },
  header: {
    fontSize: 24,
    color: "white",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "white",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#56cbbd",
    marginTop: 30,
  },
  btntext: {
    color: "white",
    fontWeight: "bold",
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Tasks" component={Tasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
