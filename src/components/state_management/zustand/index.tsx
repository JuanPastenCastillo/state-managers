import { INDEX_ZustandWrapper } from "./styles/index-zustand-wrapper"
import { Zustand_ControlAdd } from "./zustand-control-add"
import { Zustand_ControlRemoveAll } from "./zustand-control-remove-all"
import { Zustand_ControlSetSpecific } from "./zustand-control-set"
import { Zustand_ControlSubstract } from "./zustand-control-substract"
import { Zustand_BearCounter } from "./zustand-state"

export const INDEX_Zustand = () => {
  return (
    <INDEX_ZustandWrapper>
      <fieldset>
        <legend>
          <h1>Zustand</h1>
        </legend>

        <article>
          <h2>The state</h2>
          <Zustand_BearCounter />
        </article>

        <article>
          <h2>The control: add</h2>
          <Zustand_ControlAdd />
        </article>

        <article>
          <h2>The control: substract</h2>
          <Zustand_ControlSubstract />
        </article>
        <article>
          <h2>The control: remove all</h2>
          <Zustand_ControlRemoveAll />
        </article>

        <article>
          <h2>The control: set specific</h2>
          <Zustand_ControlSetSpecific />
        </article>
      </fieldset>
    </INDEX_ZustandWrapper>
  )
}
