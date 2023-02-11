import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../../redux/Slices/NotesSlice';

function CreateNotes() {
    const title=useRef('');
    const desc=useRef('');
    const dispatch=useDispatch();
    function handleOnSubmit(event){
       event.preventDefault();
       dispatch(createNote({
        title:title.current.value,
        desc:desc.current.value,
        id:nanoid(1),
       }))
    }
  return (
    <div>
      <form>
        <input placeholder='title here' type="text" ref={title}/>
        <input placeholder='desc here' type="text" ref={desc} />
        <input type="submit" onClick={handleOnSubmit}/>
      </form>
    </div>
  )
}

export default CreateNotes
