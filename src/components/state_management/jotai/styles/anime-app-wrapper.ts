import styled from "styled-components"

export const AnimeAppWrapper = styled.article`
  border: 2px solid crimson;
  border-radius: 8px;
  padding: 16px;
`

type ItemLIProps = {
  isWatched: boolean
}

export const ItemLI = styled.li<ItemLIProps>`
  & > :nth-child(2) {
    cursor: default;
    user-select: none;
    width: fit-content;

    &:is(:hover, :focus) {
      background-color: ${({ isWatched }) =>
        isWatched ? "#00ff00" : "#ff0000"};

      color: ${({ isWatched }) => (isWatched ? "black" : "white")};
    }
  }
`
