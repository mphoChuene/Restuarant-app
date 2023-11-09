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
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import SPACING from "../../config/SPACING";
import colors from "../../config/Restaurant/colors";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const { height } = Dimensions.get("window");

const RecipeDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { recipe } = route.params;

  const [showTick, setShowTick] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    // Ensure quantity is a positive integer
    const quantityInt = parseInt(quantity);
    if (quantityInt > 0) {
      // Calculate the total price based on quantity
      const totalPrice = recipe.price * quantityInt;

      // Create an item object with name, total price, and image URL
      const order = {
        name: recipe.name,
        totalPrice,
        imageUrl: recipe.image, // Replace this with the actual image URL
      };

      // Dispatch the addToCart action to add the item to the cart
      dispatch(addToCart(order));

      setShowTick(true); // Show the checkmark animation
      setTimeout(() => {
        setShowTick(false);
        navigation.navigate("Home");
      }, 2000);

      setQuantity(1); // Reset the quantity
    } else {
      // Handle the case where quantity is not valid (e.g., non-numeric or <= 0)
      console.error("Invalid quantity");
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            style={{
              padding: SPACING * 2,
              height: height / 2.5,
              padding: SPACING * 2,
              paddingTop: SPACING * 4,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            source={recipe.image}></ImageBackground>
          <View
            style={{
              padding: SPACING * 2,
              paddingTop: SPACING * 3,
              marginTop: -SPACING * 3,
              borderTopLeftRadius: SPACING * 3,
              borderTopRightRadius: SPACING * 3,
              backgroundColor: colors.white,
            }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: SPACING * 3,
                alignItems: "center",
              }}>
              <View style={{ width: "70%" }}>
                <Text
                  style={{
                    fontSize: SPACING * 3,
                    color: colors.black,
                    fontWeight: "700",
                  }}>
                  {recipe.name}
                </Text>
              </View>
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 3,
                  backgroundColor: colors.yellow,
                  flexDirection: "row",
                  borderRadius: SPACING,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Ionicons
                  name="star"
                  color={colors.black}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: "600",
                    marginLeft: SPACING / 2,
                    color: colors.black,
                  }}>
                  {recipe.rating}
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space between" }}>
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 2,
                  backgroundColor: colors.light,
                  flexDirection: "row",
                  borderRadius: SPACING,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Ionicons
                  name="time"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: "600",
                    marginLeft: SPACING / 2,
                    color: colors.gray,
                  }}>
                  {recipe.time}
                </Text>
              </View>
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 2,
                  backgroundColor: colors.light,
                  flexDirection: "row",
                  borderRadius: SPACING,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Ionicons
                  name="bicycle"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: "600",
                    marginLeft: SPACING / 2,
                    color: colors.gray,
                  }}>
                  {recipe.del_time}
                </Text>
              </View>
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 2,
                  backgroundColor: colors.light,
                  flexDirection: "row",
                  borderRadius: SPACING,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Ionicons
                  name="restaurant"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: "600",
                    marginLeft: SPACING / 2,
                    color: colors.gray,
                  }}>
                  {recipe.cooking_time}
                </Text>
              </View>
            </View>
            <View style={{ marginVertical: SPACING * 3 }}>
              <Text
                style={{
                  fontSize: SPACING * 2,
                  fontWeight: "700",
                  color: colors.dark,
                }}>
                Ingredients
              </Text>
              {recipe.ingredients.map((ingredient) => (
                <View
                  style={{
                    marginVertical: SPACING,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  key={ingredient.id}>
                  <View
                    style={{
                      width: SPACING,
                      height: SPACING,
                      backgroundColor: colors.light,
                      borderRadius: SPACING,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: SPACING * 1.7,
                      fontWeight: "600",
                      color: colors.gray,
                      marginLeft: SPACING,
                    }}>
                    {ingredient.title}
                  </Text>
                </View>
              ))}
            </View>
            <Text
              style={{
                fontSize: SPACING * 2,
                fontWeight: "700",
                color: colors.dark,
                marginBottom: SPACING,
              }}>
              Description
            </Text>
            <Text
              style={{
                fontSize: SPACING * 1.7,
                fontWeight: "500",
                color: colors.gray,
              }}>
              {recipe.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <SafeAreaView>
        <View style={{ padding: SPACING * 2 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity onPress={decreaseQuantity}>
              <Ionicons name="remove-circle" size={40} color={colors.black} />
            </TouchableOpacity>
            <Text style={{ fontSize: 24 }}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <Ionicons name="add-circle" size={40} color={colors.black} />
            </TouchableOpacity>
          </View>
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
            onPress={handleAddToCart}>
            <Text
              style={{
                fontSize: SPACING * 2,
                color: colors.white,
                fontWeight: "700",
              }}>
              Place order for
            </Text>
            <Text
              style={{
                fontSize: SPACING * 2,
                color: colors.yellow,
                fontWeight: "700",
                marginLeft: SPACING / 2,
              }}>
              R {recipe.price * quantity}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {showTick && (
        <Animatable.View animation="bounceIn" style={styles.tickContainer}>
          <Ionicons name="checkmark-circle" size={SPACING * 20} color="green" />
        </Animatable.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  tickContainer: {
    position: "absolute",
    top: "25%",
    left: "25%",
    transform: [{ translateX: -SPACING * 2.5 }, { translateY: -SPACING * 2.5 }],
    backgroundColor: "white",
    borderRadius: SPACING * 5,
    padding: SPACING * 2,
    zIndex: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RecipeDetailScreen;
