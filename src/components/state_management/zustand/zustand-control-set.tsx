import { zustandUseStore } from "@/state_managers/zustand/store"
import { useState } from "react"

export const Zustand_ControlSetSpecific = () => {
  const [newBears, setNewBears] = useState(0)

  const customSet = zustandUseStore((state) => state.updateBears)
  return (
    <div>
      <input
        value={newBears}
        onChange={(e) => setNewBears(Number(e.target.value))}
      />

      <button onClick={() => customSet(newBears)}>Set specific number</button>
    </div>
  )
}
