import { useDefaultView } from "@/utils/use-default-view"
import { Outlet } from "react-router-dom"
import { Footer } from "../footer"
import { Navigation } from "../navigation"
import { RootWrapper } from "./styles/RootWrapper"

export const INDEX_Root = () => {
  useDefaultView()

  return (
    <RootWrapper>
      <h1>State management and creation of components</h1>
      <Navigation />

      <main>
        <Outlet />
      </main>

      <Footer />
    </RootWrapper>
  )
}
