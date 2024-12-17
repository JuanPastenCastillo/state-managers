import styled from "styled-components"

export const INDEX_ZustandWrapper = styled.div`
  border-radius: 8px;
  padding: 16px;

  box-shadow: 1px 1px 10px white;
  & > fieldset {
    border-radius: inherit;

    display: grid;
    gap: 24px;

    & > article {
      border: 2px solid green;
      border-radius: inherit;

      padding: 8px;
    }
  }
`
