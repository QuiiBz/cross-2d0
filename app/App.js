import React from "react";
import { StyleSheet } from "react-native";

//import './App.css';
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={styles.todoapp}>
      <TodoList />
    </div>
  );
}

const styles = StyleSheet.create({
  todoapp: {
    display: "flex",
    flexDirection: " column",
    justifyContent: "start",
    width: " 520px",
    minHeight: "600px",
    background: "#161a2b",
    textAlign: "center",
    margin: " 128px auto",
    borderRadius: "10px",
    paddingBottom: "32px",
  },
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});
export default App;
