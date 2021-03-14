import  { userActionType }  from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => { // setted the default value ES6 feature
  switch (action.type) { //using switch as we can have multiple action in this user.reducer
    case userActionType.SET_CURRENT_USER:
      return {
        ...state,   // react render only when it recevies a new object instead of changing a single property
        currentUser: action.payload,
      }
    default:
      return state;
  }
}

export default userReducer;