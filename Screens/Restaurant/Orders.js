import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, removeOrder, clearOrders } from "../../redux/orderSlice"; // Import your action to remove from the order

const Orders = () => {
  const orderItems = useSelector((state) => state.orders.orderItems);
  const dispatch = useDispatch();

  console.log(orderItems);

  const handleDelete = (itemId) => {
    dispatch(removeOrder(itemId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order Details</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {orderItems.map((item, index) => (
          <View style={styles.cartItem} key={item.id || index}>
            {item.imageUrl && typeof item.imageUrl === "number" ? (
              <Image
                source={{ uri: String(item.imageUrl) }}
                style={styles.image}
              />
            ) : (
              <Text>No Image</Text>
            )}

            <View style={styles.prodDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text>Quantity: {item.quantity}</Text>
              <Text>Price: R {item.price}</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleDelete(item.id)}
              style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  prodDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    padding: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Orders;
