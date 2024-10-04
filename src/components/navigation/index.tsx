import { PATHS } from "@/routes/paths"
import { NavigationWrapper } from "./styles/NavigationWrapper"
import { StyledLink } from "./styles/StyledLink"

type GlobalNavigationRoutesType = {
  path: string
  children?: {
    pathChild: string
  }[]
}[]

const globalNavigationRoutes: GlobalNavigationRoutesType = [
  {
    path: PATHS.STATE_MANAGEMENT.REDUX.INDEX,
    children: [
      {
        pathChild: PATHS.STATE_MANAGEMENT.REDUX.ESSENTIALS
      },
      {
        pathChild: PATHS.STATE_MANAGEMENT.REDUX.TOOLKIT
      },
      {
        pathChild: PATHS.STATE_MANAGEMENT.REDUX.REACT_REDUX
      }
    ]
  },
  { path: PATHS.STATE_MANAGEMENT.MOBX },
  { path: PATHS.STATE_MANAGEMENT.REACT_QUERY }
]

const componentsUI = [PATHS.COMPONENT_UI]

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <h2>State management</h2>
      <nav>
        <ul>
          {globalNavigationRoutes.map(({ path, children }) => {
            if (children) {
              return (
                <li key={path}>
                  <StyledLink to={path}>{path}</StyledLink>
                  <ul>
                    {children.map(({ pathChild }) => {
                      return (
                        <li key={pathChild}>
                          <StyledLink to={`/${path}/${pathChild}`}>
                            {pathChild}
                          </StyledLink>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            }

            return (
              <li key={path}>
                <StyledLink to={path}>{path}</StyledLink>
              </li>
            )
          })}
        </ul>
      </nav>

      <h2>Components UI</h2>
      <nav>
        <ul>
          {componentsUI.map((path) => (
            <li key={path}>
              <StyledLink to={path}>{path}</StyledLink>
            </li>
          ))}
        </ul>
      </nav>
    </NavigationWrapper>
  )
}
