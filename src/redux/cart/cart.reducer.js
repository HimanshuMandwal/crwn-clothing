import { act } from '@testing-library/react';
import { cartActionType } from './cart.types';
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
  hidden : true,
  cartItems: []
}

const cartReducer = ( state = INITIAL_STATE , action) => {
  switch (action.type) { //using switch as we can have multiple action in this user.reducer
    case cartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case (cartActionType.ADD_ITEM) :
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems , action.payload),
      }
    case (cartActionType.CLEAR_ITEM_FROM_CART):
      return {
        ...state,
        cartItems: state.cartItems.filter( cartItem => cartItem.id != action.payload.id  ) //this will keep the items which returns true
      }
    default:
      return state;
  }
}

export default cartReducer ;