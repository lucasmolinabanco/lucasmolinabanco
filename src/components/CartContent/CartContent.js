import React from 'react'
import {useContext} from "react";
import {dataContext} from "../Context/DataContext";
import CartElement from './CartElement';
import CartTotal from './CartTotal';

const CartContent = () => {
    const { cart } = useContext(dataContext);
    
  return cart.length > 0 ? (
    <>
    <CartElement/>
    <CartTotal/>
    </>
      
  ): (
    <h2 className='cart-message-center'>Tu carrito esta Vacio</h2>
  )
 
  
}
export default CartContent;
