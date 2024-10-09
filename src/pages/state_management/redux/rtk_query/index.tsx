import { INDEX_RtxQuery } from "@/components/state_management/redux/rtk_query"
import { storeRKTQuery } from "@/state_managers/redux/redux_toolkit/store/store-rtk-query"
import { Provider } from "react-redux"

export default function PAGES_RtkQuery() {
  return (
    <Provider store={storeRKTQuery}>
      <INDEX_RtxQuery />
    </Provider>
  )
}
