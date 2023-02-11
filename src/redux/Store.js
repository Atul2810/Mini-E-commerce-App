import { configureStore } from "@reduxjs/toolkit";
// import messageReducer from "./Slices/messageSlices";
// import NotesSlice from "./Slices/NotesSlice";
import productReducer from "./Slices/ProductSlice";
import cartReducer from "./Slices/CartSlice";
export default configureStore({
   reducer:{
      // messageReducer,
      // noteReducer:NotesSlice,
      productReducer,
      cartReducer,
   }
})