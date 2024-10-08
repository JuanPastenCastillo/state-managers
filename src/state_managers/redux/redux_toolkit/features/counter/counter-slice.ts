import type { RootState } from "@/state_managers/redux/redux_toolkit/store/store"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
  value: number
  lastAction?:
    | "increment"
    | "decrement"
    | "incrementByAmount"
    | "decrementByAmount"
    | null
}

const initialState: CounterState = {
  value: 0,
  lastAction: null
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
      state.lastAction = "increment"
    },
    decrement: (state) => {
      state.value -= 1
      state.lastAction = "decrement"
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += Math.abs(action.payload)
      state.lastAction = "incrementByAmount"
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= Math.abs(action.payload)
      state.lastAction = "decrementByAmount"
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions

export const selectCount = (state: RootState) => ({
  counter: state.counter.value,
  lastAction: state.counter.lastAction
})

// export default counterSlice.reducer
export const counterReducer = counterSlice.reducer
