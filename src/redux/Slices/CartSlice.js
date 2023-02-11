import { createSlice} from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:'CartSlice',
    initialState:{
        cart:[]
    },
    reducers:{
        AddToCart:(state,action)=>{
            const currItem=state.cart.find(item=>item.id===action.payload);
            if(currItem){
                currItem.quantity+=1;
                return;
            }
            state.cart.push({
                quantity:1,
                id:action.payload,
            })
        },
        RemoveFromCart:(state,action)=>{
            const currItem=state.cart.find(item=>item.id===action.payload);
            if(currItem){
                currItem.quantity-=1;
                if(currItem.quantity===0){
                   state.cart= state.cart.filter(item=>item.id!==action.payload);
                }
            }
        }
    }
})
export default CartSlice.reducer;
export const {AddToCart,RemoveFromCart}=CartSlice.actions;