import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "./Screens/Restaurant/Cart";
import HomeScreen from "./Screens/Restaurant/HomeScreen";
import WelcomeScreen from "./Screens/Restaurant/WelcomeScreen";
import RecipeDetailScreen from "./Screens/Restaurant/RecipeDetailScreen";
import LoginScreen from "./Screens/Restaurant/LoginScreen";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./redux/cartSlice";
import RegisterScreen from "./Screens/Restaurant/RegisterScreen";

const HomeStack = createStackNavigator();
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <HomeStack.Navigator initialRouteName="Login">
          {/* <HomeStack.Screen name="Login" component={LoginScreen} /> */}
          {/* <HomeStack.Screen name="Register" component={RegisterScreen} /> */}
          <HomeStack.Screen name="welcomeScreen" component={WelcomeScreen} />
          <HomeStack.Screen name="Home" component={HomeScreen} />
          <HomeStack.Screen name="Cart" component={CartScreen} />
          <HomeStack.Screen
            name="ProductDetails"
            component={RecipeDetailScreen}
          />
          {/* Define other screens here if needed */}
        </HomeStack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
