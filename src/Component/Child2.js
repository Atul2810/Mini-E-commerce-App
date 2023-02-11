import React from 'react'
import { useSelector } from 'react-redux'

function Child2() {
    const message=useSelector((State)=>State.messageReducer.message);

  return (
    <div>
      <h1>Data of Child 1 is :{message}</h1>
    </div>
  )
}

export default Child2
