import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ShoppingCartOutlinedIcon from "@mui/material";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Badge, Icon, Avatar } from "react-native-material-ui";
import SPACING from "../../config/SPACING";
import colors from "../../config/Restaurant/colors";
import DATA from "../../config/Restaurant/DATA";
import { useDispatch, useSelector } from "react-redux"; // Add these imports
import { addToCart, removeFromCart } from "../../redux/cartSlice"; // Replace with the correct path

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 2 - SPACING * 3;

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const navigation = useNavigation();

  // Add these lines to get cart state from Redux
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate the total quantity of items in the cart
  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: SPACING * 2 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{
                  width: SPACING * 6,
                  height: SPACING * 6,
                  borderRadius: SPACING * 3,
                  marginRight: SPACING,
                  marginTop: 13,
                }}
                source={require("../../assets/restaurant/me.png")}
              />
              <Text
                style={{
                  fontSize: SPACING * 1.7,
                  fontWeight: "800",
                  color: colors.dark,
                }}>
                Mpho Chuene
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                style={{ marginRight: SPACING }}
                onPress={() => navigation.navigate("Cart")} // Navigate to the CartPage screen
              >
                <Badge text={cartQuantity.toString()} color="primary">
                  {/* <Image
                    style={{
                      width: SPACING * 3.5,
                      height: SPACING * 3.5,
                    }}
                    source={require("../../assets/restaurant/shopping-cart.png")} // Replace with your cart image
                  /> */}
                  <AntDesign name="shoppingcart" size={24} color="black" />
                </Badge>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: "60%", marginTop: SPACING * 2 }}>
            <Text style={{ fontSize: SPACING * 3, fontWeight: "700" }}>
              What would you like to order?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: colors.light,
              marginVertical: SPACING * 3,
              padding: SPACING * 1.5,
              borderRadius: SPACING,
            }}></View>
          <ScrollView horizontal>
            {DATA.map((category, index) => (
              <TouchableOpacity
                style={{ marginRight: SPACING * 3 }}
                key={index}
                onPress={() => setActiveCategory(index)}>
                <Text
                  style={[
                    {
                      fontSize: SPACING * 1.7,
                      fontWeight: "600",
                      color: colors.gray,
                    },
                    activeCategory === index && {
                      color: colors.black,
                      fontWeight: "700",
                      fontSize: SPACING * 1.8,
                    },
                  ]}>
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginVertical: SPACING * 2,
            }}>
            {DATA[activeCategory].recipes.map((item) => (
              <TouchableOpacity
                style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
                key={item.id}
                onPress={() =>
                  navigation.navigate("ProductDetails", { recipe: item })
                }>
                {/* Product Display */}
                <Image
                  style={{
                    width: "100%",
                    height: ITEM_WIDTH + SPACING * 3,
                    borderRadius: SPACING * 2,
                  }}
                  source={item.image}
                />
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    fontWeight: "700",
                    marginTop: SPACING,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: SPACING * 1.5,
                    color: colors.gray,
                    marginVertical: SPACING / 2,
                  }}>
                  Today discount {item.discount}
                </Text>
                <Text style={{ fontSize: SPACING * 2, fontWeight: "700" }}>
                  R {item.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Badge:{
  color:'red'
  }
});
