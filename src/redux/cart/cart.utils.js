export const addItemToCart = ( cartItems, cartItemToAdd ) => {
  const existingCartItems = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id); //gives the first element found in the array
  if(existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id ?
      {...cartItem , quantity: cartItem.quantity + 1}:
      cartItem
    )
  }
  return [ ...cartItems, {...cartItemToAdd ,quantity: 1} ]

}

export const removeItem = () => {

}