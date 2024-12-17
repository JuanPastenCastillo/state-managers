import { zustandUseStore } from "@/state_managers/zustand/store"

export const Zustand_ControlSubstract = () => {
  const decreasePopulation = zustandUseStore(
    (state) => state.decreasePopulation
  )
  return <button onClick={decreasePopulation}>one down</button>
}
