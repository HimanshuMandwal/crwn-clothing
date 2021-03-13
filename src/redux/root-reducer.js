import { combineReducers } from 'redux';// used for combine the reducers

import userReducer from './user/user.reducer';


export default combineReducers({
  user: userReducer,
})
//this root reducer is just to combine all the states together