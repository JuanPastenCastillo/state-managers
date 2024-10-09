import styled from "styled-components"

export const CounterSelectorsWrapper = styled.fieldset`
  border: 1px solid green;

  padding: 8px;

  border-radius: 8px;

  display: grid;
  gap: 24px;

  & > legend {
    & > span {
      font-weight: bold;
    }
  }
`
