import { createSlice } from "@reduxjs/toolkit";
const noteSlice=createSlice({
    name:'NoteSlice',
    initialState:{
        note:[]
    },
    reducers:{
       createNote:(state,action)=>{
        state.note.push(action.payload);
       },
       deleteNote:(state,action)=>{
        state.note=state.note.filter((note)=>note.id!==action.payload);
       }
    }
})
export default noteSlice.reducer;
export const {createNote,deleteNote}=noteSlice.actions;