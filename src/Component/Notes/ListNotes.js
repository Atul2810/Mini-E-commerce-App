import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../../redux/Slices/NotesSlice';

function ListNotes() {
    const notes=useSelector(State=>State.noteReducer.note);
    const dispatch=useDispatch();
  return (
    <div>
      {notes.map((note,index)=>{
        return <div key={index}>
            <h1>{note.id}</h1>
            <h1>{note.title}</h1>
            <p>{note.desc}</p>
            <button onClick={()=>dispatch(deleteNote(note.id))}>Delete</button>
            </div>
      })}
    </div>
  )
}

export default ListNotes
