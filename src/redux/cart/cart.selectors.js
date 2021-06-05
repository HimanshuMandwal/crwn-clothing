//here library named as reselect is used which avoids the unnessary rendering
import { createSelector } from 'reselect';
//two types of selector inputSelector and outputSelector


//input selector

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart], // first argument is an array of input selector
  (cart) => cart.cartItems//this will return the value that we want out of this selector
); //this is memoized selector as we have used createSelector here

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulatorQuantity, cartItem) => accumulatorQuantity + cartItem.quantity, 0),
) //memoized count selector

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulatorQuantity, cartItem) => accumulatorQuantity + cartItem.price * cartItem.quantity, 0),
)