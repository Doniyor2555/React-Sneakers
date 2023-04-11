import React from 'react';

import AppContext from '../context';


export function useCart() {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, current) => current.price + sum, 0);
  

  return { cartItems, setCartItems, totalPrice };
}