import { INDEX_ReduxToolkit } from "@/components/state_management/redux/redux_toolkit"

import { storeReduxToolkit } from "@/state_managers/redux/redux_toolkit/store/store"
import { Provider } from "react-redux"

export default function PAGES_ReduxToolkit() {
  return (
    <Provider store={storeReduxToolkit}>
      <INDEX_ReduxToolkit />
    </Provider>
  )
}
