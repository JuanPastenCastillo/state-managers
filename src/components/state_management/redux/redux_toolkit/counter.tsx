import { CounterDispatchers } from "./counter-dispatchers"
import { CounterSelectors } from "./counter-selectors"
import { CounterWrapper } from "./styles/CounterWrapper"

export const Counter = () => {
  return (
    <CounterWrapper>
      <h2>Counter container</h2>
      <CounterSelectors />

      <CounterDispatchers />
    </CounterWrapper>
  )
}
