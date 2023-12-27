import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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
            <AntDesign name="mail" size={24} color="black" />
            <Text style={styles.cardText}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={handleCustomers}>
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
