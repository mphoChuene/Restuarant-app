import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here using 'username' and 'password' state
    // If login is successful, you can navigate to the homepage
    navigation.navigate("welcomeScreen");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        style={styles.textInput}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default LoginScreen;
