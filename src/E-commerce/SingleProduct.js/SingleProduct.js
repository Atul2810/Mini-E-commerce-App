import React from 'react'
import './SingleProduct.css'
import { AddToCart,RemoveFromCart } from '../../redux/Slices/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

function SingleProduct({product}) {
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cartReducer.cart);
  const currItem=cart.find(item=>item.id===product.id);
  const currItemQuantity=currItem ? currItem.quantity:0;
  return (
    <div className='SingleProduct'>
      <img src={product.images[0]} alt=""/>
      <h2 className="productTitle">{product.title}</h2>
      <div className="productPrice">{product.price}</div>

      <div className="cartInfo">
        <button className='button' onClick={()=>dispatch(AddToCart(product.id))}><h1>+</h1></button>
        <h3>{currItemQuantity}</h3>
        <button className='button' onClick={()=>dispatch(RemoveFromCart(product.id     ))}><h1>-</h1></button>
      </div>
    </div>

  )
}

export default SingleProduct
