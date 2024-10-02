import styled from "styled-components"

export const RootWrapper = styled.div`
  max-width: 1440px;

  display: grid;
  grid-template-areas:
    "theh1 theh1"
    "nav children";
  grid-template-columns: min-content auto;
  align-items: flex-start;

  gap: calc(8px);

  margin-inline: auto;

  position: relative;

  & > h1 {
    grid-area: theh1;

    font-size: calc(8px * 8);
  }

  & > nav {
    grid-area: nav;
    position: sticky;
    top: 0;
  }

  & > main {
    grid-area: children;

    min-height: 100dvh;
  }

  & > footer {
    display: none;
  }
`
