import  { userActionType }  from './user.types';

const INITIAL_STATE = {
  currentUser: null,
}; //this is required as whenever redux called for first time it should know what a state may contain this is like we intantiate the states in class component

const userReducer = (state = INITIAL_STATE, action) => { // setted the default value ES6 feature
  switch (action.type) {
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