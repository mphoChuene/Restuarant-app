import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebaseConfig"; // Import your Firebase configuration
import background from "../../assets/restaurant/dish2.jpg";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate("Login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.luxeCuisineText}>Luxe Cuisine</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            placeholderTextColor="#ddd" // Adjust placeholder text color
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            placeholderTextColor="#ddd" // Adjust placeholder text color
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            placeholder="Confirm Password"
            style={styles.textInput}
            placeholderTextColor="#ddd" // Adjust placeholder text color
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // Move the content to the bottom
    alignItems: "center",
  },
  textContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
    width: "100%",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  luxeCuisineText: {
    fontSize: 36,
    fontWeight: "normal",
    color: "#fff",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%", // Take full width
    paddingHorizontal: 20,
  },
  textInput: {
    width: "100%",
    height: 40,
    borderColor: "white",
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
    color: "#fff",
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: "#00f",
    padding: 15,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default RegisterScreen;
