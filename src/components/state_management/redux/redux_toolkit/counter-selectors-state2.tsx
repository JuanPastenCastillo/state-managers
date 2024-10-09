import { selectCount } from "@/state_managers/redux/redux_toolkit/features/counter/counter-slice"
import { useSelector } from "react-redux"
import { CounterSelectorsState2Wrapper } from "./styles/CounterSelectorsState2Wrapper"

export const CounterSelectorsState2 = () => {
  const { lastAction } = useSelector(selectCount)

  return (
    <CounterSelectorsState2Wrapper>
      <legend>
        <span>{CounterSelectorsState2.name}</span> component
      </legend>
      <p>Last action used: {lastAction} </p>
    </CounterSelectorsState2Wrapper>
  )
}
