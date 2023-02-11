import React from 'react'
import './NavBar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux';
function NavBar() {
  let count=0;
  const cart=useSelector(state=>state.cartReducer.cart);
  cart.forEach(item => {
      count+=item.quantity;
  });
  return (
    <nav>
        <h1 className="banner">My Myntra</h1>
        <div className="rightLayout">
           <div className="cart"> <AiOutlineShoppingCart/></div>
           <p>{count}</p>
        </div>

    </nav>
  )
}

export default NavBar
