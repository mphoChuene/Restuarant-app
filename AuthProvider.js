import React, { createContext, useContext, useReducer, useEffect } from "react";
import { auth } from "./firebaseConfig"; // Assuming you have a Firebase authentication setup

// Action types
const SET_USER = "SET_USER";

// Initial state
const initialState = {
  user: null,
  loading: true,
};

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch({ type: SET_USER, payload: user });
    });

    return unsubscribe; // Cleanup on unmount or when component is re-rendered
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
