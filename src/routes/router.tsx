import { INDEX_Root } from "@/components/layout"
import { ErrorPage } from "@/error-page"
import { PAGES_MaterialUI } from "@/pages/component_ui/material_ui"
import PAGES_StateManagement from "@/pages/state_management"
import { PAGES_MOBX } from "@/pages/state_management/mobx"
import { PAGES_ReactQuery } from "@/pages/state_management/react_query"
import PAGES_ReduxEssenstials from "@/pages/state_management/redux/redux_essentials"
import PAGES_ReduxToolkit from "@/pages/state_management/redux/redux_toolkit"
import PAGES_RtkQuery from "@/pages/state_management/redux/rtk_query"
import { createBrowserRouter } from "react-router-dom"
import { PATHS } from "./paths"

export const router = createBrowserRouter([
  {
    path: `${PATHS.HOME}`,
    element: <INDEX_Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: `${PATHS.STATE_MANAGEMENT.INDEX}`,
        element: <PAGES_StateManagement />,
        children: [
          {
            path: `${PATHS.STATE_MANAGEMENT.ESSENTIALS}`,
            element: <PAGES_ReduxEssenstials />
          },
          {
            path: `${PATHS.STATE_MANAGEMENT.TOOLKIT}`,
            element: <PAGES_ReduxToolkit />
          },
          {
            path: `${PATHS.STATE_MANAGEMENT.RTK_QUERY}`,
            element: <PAGES_RtkQuery />
          },
          {
            path: `${PATHS.STATE_MANAGEMENT.MOBX}`,
            element: <PAGES_MOBX />
          },
          {
            path: `${PATHS.STATE_MANAGEMENT.REACT_QUERY}`,
            element: <PAGES_ReactQuery />
          }
        ]
      },

      {
        path: `${PATHS.COMPONENT_UI}`,
        element: <PAGES_MaterialUI />
      }
    ]
  }
])
