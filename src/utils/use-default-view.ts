import { PATHS } from "@/routes/paths"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const useDefaultView = (): void => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === `${PATHS.HOME}`) {
      navigate(
        `/${PATHS.STATE_MANAGEMENT.INDEX}/${PATHS.STATE_MANAGEMENT.ESSENTIALS}`
      )
    }
  }, [location, navigate])
}
