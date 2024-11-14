import { appStateCount } from "@/state_managers/mobx/app-state-count"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { TimerViewCountWrapper } from "./styles/TimerViewCountWrapper"

export const TimerViewCount = observer(() => {
  const { count, shouldUpdateAutomatically, updateAutomatically } =
    appStateCount

  useEffect(() => {
    if (shouldUpdateAutomatically) {
      updateAutomatically()
    }
  }, [])

  return (
    <TimerViewCountWrapper>
      <legend>
        <h3>Component: TimerViewCount</h3>
      </legend>

      <p>Actual counting: {count}</p>
    </TimerViewCountWrapper>
  )
})
