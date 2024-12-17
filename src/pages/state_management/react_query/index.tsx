import { INDEX_ReactQuery } from "@/components/state_management/react_query"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export const PAGES_ReactQuery = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <INDEX_ReactQuery />
    </QueryClientProvider>
  )
}
