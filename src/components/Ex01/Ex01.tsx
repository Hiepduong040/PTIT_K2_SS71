import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, reset } from '../../store/reducers/countReducer'

export default function Ex01() {
    const state:any = useSelector(state=>state)
    const dispatch = useDispatch()
  return (
    <div>Ex01
        <p>Giá trị count: {state.count}</p>
        <button onClick={()=>dispatch(increase())}>Tăng</button>
        <button onClick={()=>dispatch(decrease())}>Giảm</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}
