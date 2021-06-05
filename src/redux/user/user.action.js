import { userActionType } from './user.types';

export const setCurrentUser = (user) => ( //this were action creator function which will create actions
  {  //this just functions return a object in the form the reducer wants
    type : userActionType.SET_CURRENT_USER,
    payload : user,
  }
)