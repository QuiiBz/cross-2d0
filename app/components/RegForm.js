import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class Regform extends React.Component {
  render() {
    return (
      <View style={styles.regform}>
        <Text style={styles.header}>Registration</Text>

        <TextInput
          style={styles.textinput}
          placeholder="Your name"
          underlineColorAndroid={"transparent"}
        ></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="Your email"
          underlineColorAndroid={"transparent"}
        ></TextInput>
        <TextInput
          style={styles.textinput}
          placeholder="Your password"
          secureTextEntry={"true"}
          underlineColorAndroid={"transparent"}
        ></TextInput>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: "stretch",
  },
  header: {
    fontsize: 24,
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
