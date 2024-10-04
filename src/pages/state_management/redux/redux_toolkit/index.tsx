import { INDEX_ReduxToolkit } from "@/components/state_management/redux/redux_toolkit"
import { storeReduxToolkit } from "@/store/redux_toolkit/store"
import { Provider } from "react-redux"

export default function PAGES_ReduxToolkit() {
  return (
    <Provider store={storeReduxToolkit}>
      <INDEX_ReduxToolkit />
    </Provider>
  )
}
