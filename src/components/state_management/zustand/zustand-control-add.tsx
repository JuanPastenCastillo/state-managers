import { zustandUseStore } from "@/state_managers/zustand/store"

export const Zustand_ControlAdd = () => {
  const increasePopulation = zustandUseStore(
    (state) => state.increasePopulation
  )
  return <button onClick={increasePopulation}>one up</button>
}
