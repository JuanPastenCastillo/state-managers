import { temperatureMobx as t } from "@/state_managers/mobx/app-state-temperature"
import { observer } from "mobx-react-lite"

export const Temperature = observer(() => {
  return (
    <article
      style={{ border: "2px solid hsl(348, 83.3%, 77.1%)", padding: "16px" }}>
      <fieldset>
        <legend>Component: Temperature</legend>

        <p>Temperature: {t.temperature}</p>
        <p>Unit: {t.unit}</p>
        <div>
          <h2>Set temperature</h2>
          <input
            type='number'
            value={t.temperatureCelsius}
            onChange={(e) => (t.temperatureCelsius = Number(e.target.value))}
          />
        </div>
        <div>
          <button onClick={() => (t.unit = "C")}>C</button>
          <button onClick={() => (t.unit = "K")}>K</button>
          <button onClick={() => (t.unit = "F")}>F</button>
        </div>
      </fieldset>
    </article>
  )
})
