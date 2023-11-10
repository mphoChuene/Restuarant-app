import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { removeFromCart } from "../../redux/cartSlice";
import SPACING from "../../config/SPACING";
import colors from "../../config/Restaurant/colors";
import { Payment } from "../../stripe";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart</Text>
      <ScrollView>
        {cartItems.map((item, index) => (
          <View style={styles.cartItem} key={index}>
            <Image source={item.imageUrl} style={styles.image} />
            <View style={styles.prodDetails}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
                {item.name}
              </Text>
              <Text>Total Price: R {item.totalPrice}</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleDelete(item.id)}
              style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.paymentContainer}>
        <Payment />
      </View>
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
    fontWeight: "bold",
  },
  cartItem: {
    marginVertical: 8,
    borderColor: "lightgray",
    borderWidth: 1,
    padding: 8,
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  prodDetails: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 15,
  },
  deleteButton: {
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: "white",
  },
  paymentContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white", // Add your desired background color
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
});

export default Cart;
