import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { INDEX_Redux } from "./components/state_management/redux"
import { ReduxFull } from "./components/state_management/redux/redux-full"
import { ReduxToolkit } from "./components/state_management/redux/redux-toolkit"
import { ErrorPage } from "./error-page"
import "./index.css"
import { PAGES_MaterialUI } from "./pages/component_ui/material_ui"
import { PAGES_MOBX } from "./pages/state_management/mobx"
import { PAGES_ReactQuery } from "./pages/state_management/react_query"
import { PATHS } from "./routes/paths"
import { RoutesRoot } from "./routes/root"

const router = createBrowserRouter([
  {
    path: `${PATHS.HOME}`,
    element: <RoutesRoot />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: `${PATHS.STATE_MANAGEMENT.REDUX.INDEX}`,
        element: <INDEX_Redux />,
        children: [
          {
            path: `${PATHS.STATE_MANAGEMENT.REDUX.FULL}`,
            element: <ReduxFull />
          },
          {
            path: `${PATHS.STATE_MANAGEMENT.REDUX.TOOLKIT}`,
            element: <ReduxToolkit />
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
