import { CounterSelectorsWrapper } from "./styles/CounterSelectorsWrapper"

import { selectCount } from "@/features/counter/redux_toolkit/counter-slice"
import { useSelector } from "react-redux"

export const CounterSelectors = () => {
  const { counter, lastAction } = useSelector(selectCount)

  return (
    <CounterSelectorsWrapper>
      <legend>
        <span>{CounterSelectors.name}</span> component
      </legend>
      <p>Last action used: {lastAction} </p>
      <span>{counter}</span>
    </CounterSelectorsWrapper>
  )
}
