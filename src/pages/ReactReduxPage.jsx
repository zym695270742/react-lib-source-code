import React from 'react'
import { useCallback } from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { useSelector, useDispatch } from '../myLib/react-redux'

export default function ReactReduxPage() {
  const count = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleAdd = useCallback(() => {
    dispatch({ type: 'add' })
  }, [])

  return (
    <>
      <h1>React-redux Source Code</h1>
      <div>count: {count}</div>
      <button onClick={handleAdd}>Add</button>
    </>
  )
}
