import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";

const AdminScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Admin Screen</Text>
      <View style={styles.subcontainer}>
        <Text style={styles.descriptionText}>My DESCRIPTION</Text>
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="fast-food" size={24} color="black" />
            <Text style={styles.cardText}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <AntDesign name="mail" size={24} color="black" />
            <Text style={styles.cardText}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <FontAwesome5 name="users" size={24} color="black" />
            <Text style={styles.cardText}>Customers</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  subcontainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    width: "80%",
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  card: {
    // flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default AdminScreen;
