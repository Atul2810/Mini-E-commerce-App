import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { loadproduct } from '../../redux/Slices/ProductSlice';
import SingleProduct from '../SingleProduct.js/SingleProduct';
import { fetchdata } from '../../redux/Slices/ProductSlice';

import "./ProductList.css"
// import Store from '../../redux/Store';
function ProductList() {
    const dispatch=useDispatch();
    const product=useSelector(state=>state.productReducer.product);
    useEffect(()=>{
       dispatch(fetchdata());
    },[]);
    const status=useSelector(state=>state.productReducer.status);
    if(status==='loading'){
      return <h1>Loading....</h1>
    }
  return (
    <div className='ProductList'>
     {product.map(item=> <SingleProduct key={item.id} product={item}/>)}
    </div>
  )
}

export default ProductList
