import { combineReducers } from 'redux';// used for combine the reducers
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //local storage as default storage location
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['cart'],
}

const rootReducer =combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});


export default persistReducer(persistConfig, rootReducer);
//this root reducer is just to combine all the states together