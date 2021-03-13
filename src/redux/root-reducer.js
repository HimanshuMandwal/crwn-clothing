import { combineReducers } from 'redux';// used for combine the reducers

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
})
//this root reducer is just to combine all the states together