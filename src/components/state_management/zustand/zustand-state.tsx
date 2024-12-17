import { zustandUseStore } from "@/state_managers/zustand/store"

export const Zustand_BearCounter = () => {
  const bears = zustandUseStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}
