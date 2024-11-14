import { appStateCount } from "@/state_managers/mobx/app-state-count"
import { observer } from "mobx-react-lite"

export const TimerAutomaticallyStop = observer(() => {
  const { shouldUpdateAutomatically, stopAutomatically } = appStateCount

  return (
    <fieldset
      style={{
        border: "2px solid hsl(60, 100%, 70%)",
        borderRadius: "8px",
        padding: "8px"
      }}>
      <legend>
        <h3 style={{ color: "hsl(60, 100%, 70%)" }}>
          Component: TimerAutomaticallyStop
        </h3>
      </legend>
      <button
        onClick={() => {
          if (shouldUpdateAutomatically) {
            stopAutomatically()
          }
        }}
        disabled={!shouldUpdateAutomatically}>
        Stop automatically
      </button>
    </fieldset>
  )
})
