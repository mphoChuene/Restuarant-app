import React from "react";
import { View, Text, Button } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const route = useRoute();
  // Extract the cartItems from the route params
  const { cartItems } = route.params;

  // Get the navigation object
  const navigation = useNavigation();

  const handleCheckout = () => {
    // Navigate to the payment screen and pass cartItems
    navigation.navigate("Payment", { cartItems });
  };
  console.log(cartItems); // Check if cartItems are passed correctly

  return (
    <View>
      <Text>Cart Screen</Text>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <View key={index}>
            <Text>Item Name: {item.name}</Text>
            <Text>Item Price: {item.price}</Text>
            <Text>Item Quantity: {item.quantity}</Text>
            {/* Render other cart item details here */}
          </View>
        ))
      ) : (
        <Text>Cart is empty</Text>
      )}
      {cartItems && cartItems.length > 0 && (
        <Button title="Checkout" onPress={handleCheckout} />
      )}
    </View>
  );
};

export default CartScreen;
