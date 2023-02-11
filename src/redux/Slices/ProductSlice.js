import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchdata= createAsyncThunk('product/fetch',async ()=>{
    const response=await fetch('https://api.escuelajs.co/api/v1/products');
    return await response.json();  
})
const ProductSlice=createSlice({
    name:'ProductSlice',
    initialState:{
        product:[],
        status:'idle'
    },
    reducers:{
        loadproduct:(state,action)=>{
            state.product=action.payload;
        }
    },
    extraReducers:function (builder){
        builder.addCase(fetchdata.pending,(state,action)=>{
            state.status="loading";
        }).addCase(fetchdata.fulfilled,(state,action)=>{
            state.status="success";
            state.product=action.payload;
        })
        .addCase(fetchdata.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.error.message;
        })

    }
})
export default ProductSlice.reducer;
export const{loadproduct}=ProductSlice.actions;