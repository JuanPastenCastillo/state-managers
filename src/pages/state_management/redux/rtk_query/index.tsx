import { INDEX_RtxQuery } from "@/components/state_management/redux/rtk_query"
import { apiPokemon } from "@/state_managers/redux/redux_toolkit/api/api-pokemon"
import { ApiProvider } from "@reduxjs/toolkit/query/react"

export default function PAGES_RtkQuery() {
  return (
    <ApiProvider api={apiPokemon}>
      <INDEX_RtxQuery />
    </ApiProvider>
  )
}
