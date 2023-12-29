import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";



const Customers = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="construction" size={80} color="orange" />
      <Text style={styles.message}>
        The following feature is under experimentation.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});

export default Customers;
