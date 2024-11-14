import { appStateCount } from "@/state_managers/mobx/app-state-count"
import { observer } from "mobx-react-lite"
import { TimerResetWrapper } from "./styles/TimerResetWrapper"

export const TimerReset = observer(() => {
  const { reset } = appStateCount

  return (
    <TimerResetWrapper>
      <legend>
        <h3>Component: TimerReset</h3>
      </legend>

      <button onClick={() => reset()}>Reset to zero</button>
    </TimerResetWrapper>
  )
})
