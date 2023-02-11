import React, { useRef, } from 'react'
import { useDispatch } from 'react-redux';
import { setMessage } from '../redux/Slices/messageSlices';
function Child1() {
    const inputText=useRef('');
    const dispatch=useDispatch();
    function handleOnSubmit(event){
       event.preventDefault();
       const inputTextvalue=inputText.current.value;
       dispatch(setMessage(inputTextvalue));
    }
  return (
    <div>
        <form onSubmit={handleOnSubmit}></form>
      <input type="text" ref={inputText} />
      <input type="submit" onClick={handleOnSubmit} />
    </div>
  )
}

export default Child1

