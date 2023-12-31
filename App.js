import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "./Screens/Restaurant/Cart";
import HomeScreen from "./Screens/Restaurant/HomeScreen";
import WelcomeScreen from "./Screens/Restaurant/WelcomeScreen";
import RecipeDetailScreen from "./Screens/Restaurant/RecipeDetailScreen";
import LoginScreen from "./Screens/Restaurant/LoginScreen";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import RegisterScreen from "./Screens/Restaurant/RegisterScreen";
import AdminScreen from "./Screens/Restaurant/AdminScreen";
import Customers from "./Screens/Restaurant/Customers";
import Orders from "./Screens/Restaurant/Orders";
import Messages from "./Screens/Restaurant/Messages";
import cartReducer from "./redux/cartSlice";
import orderReducer from "./redux/orderSlice";

const HomeStack = createStackNavigator();
const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <HomeStack.Navigator initialRouteName="welcomeScreen">
          <HomeStack.Screen name="welcomeScreen" component={WelcomeScreen} />
          <HomeStack.Screen name="Login" component={LoginScreen} />
          <HomeStack.Screen name="Register" component={RegisterScreen} />
          <HomeStack.Screen name="Home" component={HomeScreen} />
          <HomeStack.Screen name="Cart" component={CartScreen} />
          <HomeStack.Screen
            name="ProductDetails"
            component={RecipeDetailScreen}
          />
          <HomeStack.Screen name="Admin" component={AdminScreen} />
          <HomeStack.Screen name="Customers" component={Customers} />
          <HomeStack.Screen name="Orders" component={Orders} />
          <HomeStack.Screen name="Messages" component={Messages} />
          {/* Define other screens here if needed */}
        </HomeStack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
