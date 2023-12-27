import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  AntDesign,
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebaseConfig";
import { Badge } from "react-native-material-ui";

const AdminScreen = () => {
  const navigation = useNavigation();

  const handleOrders = () => {
    navigation.navigate("Orders");
  };

  const handleMessages = () => {
    // Add navigation logic for the "Messages" screen
    navigation.navigate("Messages");
  };

  const handleCustomers = () => {
    // Add navigation logic for the "Customers" screen
    navigation.navigate("Customers");
  };

  const handleSignout = async () => {
    try {
      await auth.signOut();
      navigation.navigate("Login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Admin Screen</Text>
      <View style={styles.subcontainer}>
        <Text style={styles.descriptionText}>Restaurant-App</Text>
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card} onPress={handleOrders}>
            <Ionicons name="fast-food" size={24} color="black" />
            <Text style={styles.cardText}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={handleMessages}>
            <Badge text="1">
              <AntDesign name="mail" size={24} color="black" />
            </Badge>
            <Text style={styles.cardText}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={handleCustomers}>
            <FontAwesome5 name="users" size={24} color="black" />
            <Text style={styles.cardText}>Customers</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.card1} onPress={handleSignout}>
          <MaterialCommunityIcons name="exit-run" size={24} color="black" />
          <Text style={styles.cardText}>Sign-out</Text>
        </TouchableOpacity>
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
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  card1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
