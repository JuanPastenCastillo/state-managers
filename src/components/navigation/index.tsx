import { PATHS } from "@/routes/paths"
import { NavigationWrapper } from "./styles/NavigationWrapper"
import { StyledLink } from "./styles/StyledLink"

const stateManagementList = [
  PATHS.STATE_MANAGEMENT.REDUX,
  PATHS.STATE_MANAGEMENT.MOBX,
  PATHS.STATE_MANAGEMENT.REACT_QUERY
]

const componentsUI = [PATHS.COMPONENT_UI]

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <h2>State management</h2>
      <nav>
        <ul>
          {stateManagementList.map((path) => (
            <li key={path}>
              <StyledLink to={path}>{path}</StyledLink>
            </li>
          ))}
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
