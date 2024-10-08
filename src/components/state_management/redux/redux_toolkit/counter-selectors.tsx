import { CounterSelectorsWrapper } from "./styles/CounterSelectorsWrapper"

import { selectCount } from "@/state_managers/redux/redux_toolkit/features/counter/counter-slice"
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
