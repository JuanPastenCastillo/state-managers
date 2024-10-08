import { FC } from "react"
import { StyledLink } from "./styles/StyledLink"

// Define the type for the route structure
type Route = {
  path: string
  children?: Route[]
}

// Recursive component to render routes
export const NavigationRender: FC<{
  routes: Route[]
  theFather?: string
}> = ({ routes, theFather }) => {
  return (
    <nav>
      <ul>
        {routes.map((route, index) => {
          const haveChildren = route.children && route.children.length > 0
          if (haveChildren) {
            return (
              <li key={`${route.path}_${index}`}>
                <h2>{route.path}</h2>
                {route.children && route.children.length > 0 && (
                  <NavigationRender
                    routes={route.children}
                    theFather={route.path}
                  />
                )}
              </li>
            )
          }
          const theFatherToLowerCase = theFather?.toLowerCase() || ""

          if (theFatherToLowerCase === "") {
            return (
              <li key={`${route.path}_${index}`}>
                <h2>{route.path}</h2>

                <StyledLink to={`${route.path}`}>{route.path}</StyledLink>
              </li>
            )
          }

          return (
            <li key={`${route.path}_${index}`}>
              <StyledLink to={`${theFatherToLowerCase}/${route.path}`}>
                {route.path}
              </StyledLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
