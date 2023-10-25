import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebaseConfig";
import img from "../../assets/restaurant/pexels-ryutaro-tsukata-6249501.jpg";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("welcomeScreen");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
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
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the entire screen
  },
  backgroundImage: {
    flex: 1, // Ensure the background image covers the whole screen
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5, // Add rounded corners
    backgroundColor: "white", // White background
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
