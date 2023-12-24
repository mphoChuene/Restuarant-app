import React from "react";
import { useRef } from "react";
import {
  Paystack,
  paystackProps,
} from "vicreative-react-native-paystack-webview";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Payment() {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);
  const navigation = useNavigation(); // Initialize the navigation object

  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_test_e2727380bb9d57851e6db041e8e538d206fd13fb"
        billingEmail="mphochuene42@gmail.com"
        billingName="Mpho"
        currency="ZAR"
        amount={calculateTotalAmount.toString()}
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
          navigation.navigate("Home"); // Use navigation to go to the 'Home' screen
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