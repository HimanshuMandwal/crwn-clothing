import {userActionType} from './user.types';

export const setCurrentUser = (user) => ({  //this is action just return a object in the form the reducer wants
    type : userActionType.SET_CURRENT_USER,
    payload : user,
  }
)