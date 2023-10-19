import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    // Example cart items, you can replace this with your actual cart items
    { id: 1, name: "Item 1", price: 10.0, quantity: 2 },
    { id: 2, name: "Item 2", price: 15.0, quantity: 1 },
    { id: 3, name: "Item 3", price: 20.0, quantity: 3 },
  ]);

  // Calculate the total amount
  const getTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>
                R {item.price * item.quantity}
              </Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
              <TouchableOpacity
                onPress={() => removeItemFromCart(item)}
                style={styles.removeItemButton}
              >
                <Text style={styles.removeItemText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text>Your cart is empty.</Text>
      )}
      <Text style={styles.totalAmount}>Total Amount: R {getTotalAmount()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
  },
  itemQuantity: {
    fontSize: 14,
  },
  removeItemButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
  },
  removeItemText: {
    color: "white",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default CartPage;
