import React from "react";
import { useRef } from "react";
import {
  Paystack,
  paystackProps,
} from "vicreative-react-native-paystack-webview";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addOrder } from "./redux/orderSlice";
import { clearCart } from "./redux/cartSlice";

export function Payment({ totalAmount, cartItems }) {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);
  const navigation = useNavigation(); // Initialize the navigation object
  const dispatch = useDispatch();
  const handleComplete = () => {
    console.log("cartItems:", cartItems);

    if (Array.isArray(cartItems)) {
      console.log("cartItems is an array");

      if (cartItems.length > 0) {
        console.log("cartItems has items");

        // Dispatch an action to add the order to the order store
        dispatch(addOrder(cartItems));

        // ... other actions

        dispatch(clearCart()); // Assuming you have a clearCart action in your cartSlice
        navigation.navigate("Home");
      } else {
        console.error("cartItems is an empty array");
      }
    } else {
      console.error("cartItems is not an array");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_test_e2727380bb9d57851e6db041e8e538d206fd13fb"
        billingEmail="mphochuene42@gmail.com"
        billingName="Mpho"
        currency="ZAR"
        amount={totalAmount.toFixed(2)}
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
          handleComplete();
        }}
        ref={paystackWebViewRef}
      />

      <TouchableOpacity
        onPress={() => paystackWebViewRef.current.startTransaction()}
        style={{
          backgroundColor: "black",
          width: "100%",
          padding: 8,
          alignSelf: "center",
          borderRadius: 10,
        }}>
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>
          Pay Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// INCASE OF ERRORS APPREAR WHEN RUNNING THE APP, RE-RUN THIS BELOW COMMANDS TO REINSTALL THE PAYSTACK PAYMENT GATEWAY

// npm i vicreative-react-native-paystack-webview
// expo install react-native-webview
