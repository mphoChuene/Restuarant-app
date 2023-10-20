import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart); // Use the "cart" key

  return (
    <View>
      <Text>Your Cart Items:</Text>
      {cartItems.map((item) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
      {/* Render your cart items here */}
    </View>
  );
};

export default CartScreen;
