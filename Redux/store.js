import { createStore, combineReducers } from 'redux';
import cartReducer from '../Redux/reducer/cartReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  // other: otherReducer, // Add other slices and their reducers here
});

export const store = createStore(rootReducer);


