import { selectCount } from "@/state_managers/redux/redux_toolkit/features/counter/counter-slice"
import { useSelector } from "react-redux"
import { CounterSelectorsState1Wrapper } from "./styles/CounterSelectorsState1Wrapper"

export const CounterSelectorsState1 = () => {
  const { counter } = useSelector(selectCount)

  return (
    <CounterSelectorsState1Wrapper>
      <legend>
        <span>{CounterSelectorsState1.name}</span> component
      </legend>
      <span>{counter}</span>
    </CounterSelectorsState1Wrapper>
  )
}
