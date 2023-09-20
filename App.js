import React from "react";
// import HomeScreen from "./Screens/Restaurant/HomeScreen";
import RecipeDetailScreen from "./Screens/Restaurant/RecipeDetailScreen";
import DATA from "./config/Restaurant/DATA";
// import WelcomeScreen from "./screens/Restaurant/WelcomeScreen";

const App = () => {
  return <RecipeDetailScreen recipe={DATA[0].recipes[2]} />;
};

export default App;
