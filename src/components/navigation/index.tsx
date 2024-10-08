import { PATHS } from "@/routes/paths"
import { flatRoutes } from "@/utils/flat-routes"
import { NavigationRenderer } from "./navigation-render"
import { NavigationWrapper } from "./styles/NavigationWrapper"

const allRoutes = flatRoutes(PATHS)

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationRenderer routes={allRoutes} />
    </NavigationWrapper>
  )
}
