import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const StyledLink = styled(NavLink)`
  color: cornflowerblue;
  text-decoration: underline;

  &.active {
    color: crimson;
  }
`
