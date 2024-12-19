import { animeAtom } from "@/state_managers/jotai/atoms"
import { useSetAtom } from "jotai"
import { AnimeControlWatchsWrapper } from "./styles/anime-controls-watch-wrapper"

export const AnimeControlWatchs = () => {
  const setAllToWatched = useSetAtom(animeAtom)
  const handleSetAllToWatched = () => {
    setAllToWatched((anime) => {
      const newAnime = anime.map((item) => ({ ...item, watched: true }))
      return newAnime
    })
  }

  const handleSetAllToNotWatched = () => {
    setAllToWatched((anime) => {
      const newAnime = anime.map((item) => ({ ...item, watched: false }))
      return newAnime
    })
  }

  return (
    <AnimeControlWatchsWrapper>
      <h2>Component Anime Control Watchs</h2>
      <button onClick={handleSetAllToWatched}>Set all to watched → ✅</button>
      <button onClick={handleSetAllToNotWatched}>
        Set all to not watched → 🟥
      </button>
    </AnimeControlWatchsWrapper>
  )
}
