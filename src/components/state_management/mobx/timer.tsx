import { TimerViewWrapper } from "./styles/TimerViewWrapper"
import { TimerAutomaticallyStart } from "./timer-automatically-start"
import { TimerAutomaticallyStop } from "./timer-automatically-stop"
import { TimerViewCount } from "./timer-count"
import { TimerIncrease } from "./timer-increase"
import { TimerReset } from "./timer-reset"
import { TimerState } from "./timer-state"

export const TimerView = () => {
  return (
    <TimerViewWrapper>
      <legend>
        <h2>Component: TimerView</h2>
      </legend>

      <TimerState />

      <TimerViewCount />

      <TimerIncrease />

      <TimerAutomaticallyStart />

      <TimerAutomaticallyStop />

      <TimerReset />
    </TimerViewWrapper>
  )
}
