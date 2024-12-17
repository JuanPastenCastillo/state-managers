import { create } from "zustand"

type State = {
  bears: number
}

type Actions = {
  increasePopulation: () => void
  decreasePopulation: () => void
  removeAllBears: () => void
  updateBears: (newBears: number) => void
}

export const zustandUseStore = create<State & Actions>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears })
}))
