import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { INDEX_Simple } from "./simple"
import { INDEX_ReactQueryWrapper } from "./styles/index-wrapper"

export const INDEX_ReactQuery = () => {
  return (
    <INDEX_ReactQueryWrapper>
      <ReactQueryDevtools />
      <INDEX_Simple />
    </INDEX_ReactQueryWrapper>
  )
}
