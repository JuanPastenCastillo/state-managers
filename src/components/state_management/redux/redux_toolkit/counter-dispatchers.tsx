import { CounterDispatchersWrapper } from "./styles/CounterDispatchersWrapper"

import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount
} from "@/features/counter/redux_toolkit/counter-slice"
import { useState } from "react"
import { useDispatch } from "react-redux"

export const CounterDispatchers = () => {
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState("2")
  const [decrementAmount, setDecrementAmount] = useState("2")

  return (
    <CounterDispatchersWrapper>
      <legend>
        <span>{CounterDispatchers.name}</span> component
      </legend>

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
    </CounterDispatchersWrapper>
  )
}
