import { CounterSelectorsWrapper } from "./styles/CounterSelectorsWrapper"

import { CounterSelectorsState1 } from "./counter-selectors-state1"
import { CounterSelectorsState2 } from "./counter-selectors-state2"

/* 
CounterSelectorsState1
CounterSelectorsState2


*/
export const CounterSelectors = () => {
  return (
    <CounterSelectorsWrapper>
      <legend>
        <span>{CounterSelectors.name}</span> component
      </legend>

      <CounterSelectorsState1 />
      <CounterSelectorsState2 />
    </CounterSelectorsWrapper>
  )
}
