import { zustandUseStore } from "@/state_managers/zustand/store"

export const Zustand_ControlRemoveAll = () => {
  const removeAllBears = zustandUseStore((state) => state.removeAllBears)
  return <button onClick={removeAllBears}>remove all</button>
}
