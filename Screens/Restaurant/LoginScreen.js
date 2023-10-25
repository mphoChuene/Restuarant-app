import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebaseConfig";

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
      <View style={styles.textCont}>
        <Text style={styles.welcomeTxt}>Welcome</Text>
        <Text style={styles.welcomeTxt}>Back</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../../assets/restaurant/email.png")}
            style={styles.icon}
          />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require("../../assets/restaurant/lock.png")}
            style={styles.icon}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  welcomeTxt: {
    fontSize: 40,
    fontWeight: "bold",
    // position: "absolute",
    color:'#000',
  },
  textCont: {
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal:25,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    // marginHorizontal:40,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 10,
    padding: 8,
    backgroundColor: "white",


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
