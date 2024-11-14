import { appStateCount } from "@/state_managers/mobx/app-state-count"
import { observer } from "mobx-react-lite"

export const TimerIncrease = observer(() => {
  const {
    // count,
    increase,
    shouldUpdateAutomatically,
    updateManuallyToggle
  } = appStateCount

  return (
    <fieldset
      style={{
        border: "2px solid whitesmoke",
        borderRadius: "8px",
        padding: "8px"
      }}>
      <legend>
        <h3>Component: TimerIncrease</h3>
      </legend>
      <button
        onClick={() => {
          increase()

          if (shouldUpdateAutomatically) {
            updateManuallyToggle()
          }
        }}>
        Increase manually!
      </button>
    </fieldset>
  )
})
