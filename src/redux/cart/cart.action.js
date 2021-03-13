import { cartActionType } from './cart.types';

export const toggleCartHidden = () => ({  //this is action just return a object in the form the reducer wants
    type : cartActionType.TOGGLE_CART_HIDDEN,
  }
)