import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

import SPACING from "../../config/SPACING";
import colors from "../../config/Restaurant/colors";

const { height } = Dimensions.get("window");

const RecipeDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { recipe } = route.params;
  const [orderReceived, setOrderReceived] = useState(false);

  const handleOrderPress = () => {
    // Handle order processing logic here
    // For example, send the order to a server
    // Once the order is received, setOrderReceived(true);
    setOrderReceived(true);

    // Animate the message for a few seconds and then hide it
    setTimeout(() => {
      setOrderReceived(false);
    }, 3000); // Adjust the time as needed
  };

  return (
    <>
      <ScrollView>
        {/* ... Your existing code for RecipeDetailScreen */}
      </ScrollView>
      <SafeAreaView>
        <View style={{ padding: SPACING * 2 }}>
          <TouchableOpacity
            style={{
              width: "100%",
              padding: SPACING * 2,
              backgroundColor: colors.black,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SPACING * 2,
            }}
            onPress={handleOrderPress}
          >
            <Text
              style={{
                fontSize: SPACING * 2,
                color: colors.white,
                fontWeight: "700",
              }}
            >
              Choose this for
            </Text>
            <Text
              style={{
                fontSize: SPACING * 2,
                color: colors.yellow,
                fontWeight: "700",
                marginLeft: SPACING / 2,
              }}
            >
              R {recipe.price}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {orderReceived && (
        <Animatable.View
          animation="fadeIn"
          style={styles.orderReceivedContainer}
        >
          <Text style={styles.orderReceivedText}>Order Received!</Text>
        </Animatable.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  orderReceivedContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 1000,
  },
  orderReceivedText: {
    fontSize: SPACING * 2,
    color: colors.white,
    fontWeight: "700",
  },
});

export default RecipeDetailScreen;
