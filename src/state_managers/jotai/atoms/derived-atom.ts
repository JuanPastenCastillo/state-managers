import { atom } from "jotai"
import { animeAtom } from "."

const progressAnime = atom((get) => {
  const anime = get(animeAtom)
  return anime.filter((item) => item.watched).length / anime.length
})

export { progressAnime }
