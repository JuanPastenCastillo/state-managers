import { ReactNode } from "react"
import { Footer } from "../footer"
import { Navigation } from "../navigation"
import { RootWrapper } from "./styles/RootWrapper"

type Props = {
  children: ReactNode
}

export const INDEX_Root = ({ children }: Props) => {
  return (
    <RootWrapper>
      <h1>State management and creation of components</h1>
      <Navigation />

      <main>{children}</main>

      <Footer />
    </RootWrapper>
  )
}
