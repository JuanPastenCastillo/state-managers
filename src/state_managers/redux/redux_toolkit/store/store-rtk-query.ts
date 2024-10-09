import { configureStore } from "@reduxjs/toolkit"
import { apiPokemon } from "../api/api-pokemon"

export const storeRKTQuery = configureStore({
  reducer: {
    [apiPokemon.reducerPath]: apiPokemon.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPokemon.middleware)
})
