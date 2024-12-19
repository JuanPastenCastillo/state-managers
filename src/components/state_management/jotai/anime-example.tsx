import { AnimeApp } from "./AnimeApp"
import { AnimeControlWatchs } from "./AnimeControlsWatch"
import { ProgressAtom } from "./ProgressAtom"
import { AnimeExampleWrapper } from "./styles/anime-example-wrapper"

export const AnimeExample = () => {
  return (
    <AnimeExampleWrapper>
      <legend>
        <h1>{AnimeExample.name} Component</h1>
      </legend>

      <AnimeApp />
      <ProgressAtom />
      <AnimeControlWatchs />
    </AnimeExampleWrapper>
  )
}
