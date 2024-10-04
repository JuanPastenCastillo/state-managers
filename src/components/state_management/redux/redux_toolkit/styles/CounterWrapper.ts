import styled from "styled-components"

export const CounterWrapper = styled.div`
  border: 2px solid crimson;

  display: grid;

  & > span {
    margin-right: auto;
    font-size: calc(8px * 6);
    color: coral;
  }

  button {
    width: fit-content;
  }
`
