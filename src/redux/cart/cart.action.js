import { cartActionType } from './cart.types';

export const toggleCartHidden = () => ({  //this action is used to toggle the cart hidden so there is no need of payload as it is just going to false => true and vice versa
    type : cartActionType.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
  type : cartActionType.ADD_ITEM,
  payload: item,
} )