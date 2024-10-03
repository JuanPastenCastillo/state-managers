import { INDEX_Root } from "@/components/layout"
import { Outlet } from "react-router-dom"

export const RoutesRoot = () => {
  return (
    <INDEX_Root>
      <Outlet />
    </INDEX_Root>
  )
}
