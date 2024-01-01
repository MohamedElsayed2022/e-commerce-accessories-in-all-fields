import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../RTK/Slices/counterSlice'
 function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className='btn btn-primary'
        >
          Increment
        </button>
        <span className='btn btn-success mx-1 my-1'>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className='btn btn-danger'
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
export default Counter