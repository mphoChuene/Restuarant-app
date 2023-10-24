import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import the necessary authentication functions
import { app } from "../../firebaseConfig"; // Import your Firebase configuration

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const auth = getAuth(app); // Obtain the auth instance
      await signInWithEmailAndPassword(auth, email, password); // Use signInWithEmailAndPassword function
      navigation.navigate("welcomeScreen");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate("Register")}>
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
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default LoginScreen;
