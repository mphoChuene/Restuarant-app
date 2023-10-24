import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

const CartScreen = () => {
  const route = useRoute();
  // Extract the cartItems and orders from the route params
  const { cartItems, orders } = route.params;

  // Map through the orders and display them
  return (
    <ScrollView>
      {orders.map((order, index) => (
        <View key={index}>
          <Text>{order.name}</Text>
          <Text>Total Price: {order.totalPrice}</Text>
          <Image source={{ uri: order.imageUrl }} style={{ width: 100, height: 100 }} />
          {/* Add styling and other order details as needed */}
        </View>
      ))}
    </ScrollView>
  );
};

export default CartScreen;
