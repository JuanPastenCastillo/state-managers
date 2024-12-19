import { AnimeExample } from "./anime-example"
import { INDEX_JotaiWrapper } from "./styles/index-jotai-wrapper"

export const INDEX_Jotai = () => {
  return (
    <INDEX_JotaiWrapper>
      <fieldset>
        <legend>
          <h1>Jotai</h1>
        </legend>

        <AnimeExample />
      </fieldset>
    </INDEX_JotaiWrapper>
  )
}
