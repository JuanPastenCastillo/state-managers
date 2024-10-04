import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  selectCount
} from "@/features/counter/redux_toolkit/counter-slice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CounterWrapper } from "./styles/CounterWrapper"

export const Counter = () => {
  const { counter, lastAction } = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState("2")
  const [decrementAmount, setDecrementAmount] = useState("2")

  return (
    <CounterWrapper>
      <h2>Counter here</h2>
      <p>Last action used: {lastAction} </p>
      <span>{counter}</span>
      <button
        aria-label='Increment value'
        onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <div>
        <h3>Modify by amount</h3>
        <h4>Increment</h4>
        <input
          type='number'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          aria-label='Increment value'
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>
          Increment
        </button>
        <h4>Decrement</h4>
        <input
          type='number'
          value={decrementAmount}
          onChange={(e) => setDecrementAmount(e.target.value)}
        />
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrementByAmount(Number(decrementAmount)))}>
          Decrement
        </button>
      </div>
    </CounterWrapper>
  )
}
