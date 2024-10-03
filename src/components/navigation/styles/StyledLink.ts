import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const StyledLink = styled(NavLink)`
  color: cornflowerblue;
  text-decoration: underline;

  &.active {
    color: hsl(348, 83.3%, 47.1%);
    filter: sepia(18%);
  }
`
