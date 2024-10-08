import { StyledLink } from "@/components/navigation/styles/StyledLink"
import { PATHS } from "@/routes/paths"
import { flatRoutes } from "@/utils/flat-routes"
import { Outlet } from "react-router-dom"
import { INDEX_ReduxWrapper } from "./styles/INDEX_ReduxWrapper"

export const INDEX_StateManagement = () => {
  return (
    <INDEX_ReduxWrapper>
      <nav>
        <ul>
          {flatRoutes(PATHS.STATE_MANAGEMENT).map(({ path }) => {
            return (
              <li key={path}>
                <StyledLink to={path}>{path}</StyledLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <Outlet />
    </INDEX_ReduxWrapper>
  )
}
