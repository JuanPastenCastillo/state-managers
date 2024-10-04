import { counterReducer } from "@/features/counter/redux_toolkit/counter-slice"
import { configureStore } from "@reduxjs/toolkit"

export const storeReduxToolkit = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof storeReduxToolkit.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof storeReduxToolkit.dispatch
