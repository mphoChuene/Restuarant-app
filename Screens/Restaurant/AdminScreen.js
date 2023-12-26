import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { BottomNavigation } from "react-native-material-ui";
import { Avatar } from "react-native-material-ui";
import { AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";

// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

const AdminScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AdminScreen</Text>

      {/* <Avatar icon="person" iconColor="blue" /> */}
      <View style={styles.subcontainer}>
        <Text>My DESCRIPTION</Text>
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <Text>Orders</Text>
            <Ionicons name="fast-food" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text>Messages</Text>
            <AntDesign name="mail" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text>Customers</Text>
            <FontAwesome5 name="users" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  subcontainer: {
    // flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 600,
    width: 400,
    borderRadius: 20,
  },

  cardContainer: {
    backgroundColor: "blue",
    // flex: 1,
    width: 350,
    display: "flex",
    justifyContent: "center",
    // alignItems:'center'
  },
  card: {
    // flex: 1,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor: "red",
    height: 62,
    marginVertical: 10,
  },
});
