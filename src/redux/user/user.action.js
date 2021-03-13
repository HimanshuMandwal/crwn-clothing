export const setCurrentUser = (user) => ({  //this is action just return a object in the form the reducer wants
    type : 'SET_CURRENT_USER',
    payload : user,
  }
)