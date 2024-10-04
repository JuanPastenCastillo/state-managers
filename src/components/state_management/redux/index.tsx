import { StyledLink } from "@/components/navigation/styles/StyledLink"
import { PATHS } from "@/routes/paths"
import { Outlet } from "react-router-dom"
import { INDEX_ReduxWrapper } from "./styles/INDEX_ReduxWrapper"

/* 

!FH0
- Create a navigation for redux and another for redux-toolkit
- Create examples of state managements for boths
*/

type ReduxListType = {
  path: string
}[]

const reduxList: ReduxListType = [
  {
    path: PATHS.STATE_MANAGEMENT.REDUX.ESSENTIALS
  },
  {
    path: PATHS.STATE_MANAGEMENT.REDUX.TOOLKIT
  },
  {
    path: PATHS.STATE_MANAGEMENT.REDUX.REACT_REDUX
  }
]

export const INDEX_Redux = () => {
  // const location = useLocation()
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (location.pathname === `/${PATHS.STATE_MANAGEMENT.REDUX.INDEX}`) {
  //     navigate(PATHS.STATE_MANAGEMENT.REDUX.ESSENTIALS)
  //   }
  // }, [location, navigate])

  return (
    <>
      <INDEX_ReduxWrapper>
        <nav>
          <ul>
            {reduxList.map(({ path }) => {
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
    </>
  )
}
