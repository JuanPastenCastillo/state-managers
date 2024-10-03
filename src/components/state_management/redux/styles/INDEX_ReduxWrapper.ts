import styled from "styled-components"

export const INDEX_ReduxWrapper = styled.div`
  & > nav {
    margin-bottom: calc(8px * 3);

    & > ul {
      padding: 0;

      list-style: none;

      display: flex;
      align-items: center;

      gap: calc(8px);
    }
  }
`
