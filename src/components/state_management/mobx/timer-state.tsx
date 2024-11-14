import { appStateCount } from "@/state_managers/mobx/app-state-count"
import { observer } from "mobx-react-lite"

export const TimerState = observer(() => {
  const { shouldUpdateAutomatically } = appStateCount

  return (
    <fieldset
      style={{
        border: "2px solid hsl(348, 83.3%, 77.1%)",
        borderRadius: "8px",
        padding: "8px"
      }}>
      <legend>
        <h3>Component: TimerState</h3>
      </legend>

      <p>
        Is time updating automatically:{" "}
        {shouldUpdateAutomatically ? (
          <span style={{ color: "green", fontWeight: "bold" }}>Yes</span>
        ) : (
          <span style={{ color: "crimson", fontWeight: "bold" }}>No</span>
        )}
      </p>
    </fieldset>
  )
})
