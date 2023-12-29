import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Messages() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="email-outline" size={120} color="#3498db" />
      <Text style={styles.messageText}>No messages to display</Text>
      <Text style={styles.subText}>Check back later for updates.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  messageText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#3498db",
  },
  subText: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});
