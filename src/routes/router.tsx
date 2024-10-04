import { INDEX_Root } from "@/components/layout"
import { ErrorPage } from "@/error-page"
import { PAGES_MaterialUI } from "@/pages/component_ui/material_ui"
import { PAGES_MOBX } from "@/pages/state_management/mobx"
import { PAGES_ReactQuery } from "@/pages/state_management/react_query"
import PAGES_Redux from "@/pages/state_management/redux"
import PAGES_ReactRedux from "@/pages/state_management/redux/react_redux"
import PAGES_ReduxEssenstials from "@/pages/state_management/redux/redux_essentials"
import PAGES_ReduxToolkit from "@/pages/state_management/redux/redux_toolkit"
import { createBrowserRouter } from "react-router-dom"
import { PATHS } from "./paths"

export const router = createBrowserRouter([
  {
    path: `${PATHS.HOME}`,
    element: <INDEX_Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: `${PATHS.STATE_MANAGEMENT.REDUX.INDEX}`,
        element: <PAGES_Redux />,
        children: [
          {
            path: `${PATHS.STATE_MANAGEMENT.REDUX.ESSENTIALS}`,
            element: <PAGES_ReduxEssenstials />
          },
          {
            path: `${PATHS.STATE_MANAGEMENT.REDUX.TOOLKIT}`,
            element: <PAGES_ReduxToolkit />
          },
          {
            path: `${PATHS.STATE_MANAGEMENT.REDUX.REACT_REDUX}`,
            element: <PAGES_ReactRedux />
          }
        ]
      },
      {
        path: `${PATHS.STATE_MANAGEMENT.MOBX}`,
        element: <PAGES_MOBX />
      },
      {
        path: `${PATHS.STATE_MANAGEMENT.REACT_QUERY}`,
        element: <PAGES_ReactQuery />
      },
      {
        path: `${PATHS.COMPONENT_UI}`,
        element: <PAGES_MaterialUI />
      }
    ]
  }
])
