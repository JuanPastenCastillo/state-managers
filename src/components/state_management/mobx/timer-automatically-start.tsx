import { appStateCount } from "@/state_managers/mobx/app-state-count"
import { observer } from "mobx-react-lite"

export const TimerAutomaticallyStart = observer(() => {
  const { shouldUpdateAutomatically, updateAutomatically } = appStateCount

  return (
    <fieldset
      style={{
        border: "2px solid hsl(300, 100%, 75.1%)",
        borderRadius: "8px",
        padding: "8px"
      }}>
      <legend>
        <h3 style={{ color: "hsl(300, 100%, 75.1%)" }}>
          Component: TimerAutomaticallyStart
        </h3>
      </legend>
      <button
        onClick={() => {
          if (!shouldUpdateAutomatically) {
            updateAutomatically()
          }
        }}
        disabled={shouldUpdateAutomatically}>
        Start automatically
      </button>
    </fieldset>
  )
})
