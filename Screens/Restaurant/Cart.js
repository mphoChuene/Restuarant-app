import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const Cart = () => {
  // Use the useSelector hook to access the cart state
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart</Text>
      <ScrollView>
        {cartItems.map((item, index) => (
          <View style={styles.cartItem} key={index}>
            <Text>Name: {item.name}</Text>
            <Text>Total Price: R {item.totalPrice}</Text>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartItem: {
    marginVertical: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    padding: 8,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});

export default Cart;
