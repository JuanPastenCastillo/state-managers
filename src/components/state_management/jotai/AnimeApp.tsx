import { animeAtom } from "@/state_managers/jotai/atoms"
import { useAtomValue, useSetAtom } from "jotai"
import { AnimeAppWrapper, ItemLI } from "./styles/anime-app-wrapper"

export const AnimeApp = () => {
  const anime = useAtomValue(animeAtom)
  const setAnime = useSetAtom(animeAtom)

  const changeOnlyThis = ({ item }) => {
    setAnime((state) => {
      const theNewState = state.map((x) =>
        x.theId === item.theId ? { ...x, watched: !x.watched } : x
      )
      return theNewState
    })
  }

  return (
    <AnimeAppWrapper>
      <h2>Double Click on "Watched" to change the state</h2>
      <button
        onClick={() => {
          setAnime((anime) => {
            const theId = crypto.randomUUID()

            return [
              ...anime,
              {
                title: "Cowboy Bebop",
                year: 1998,
                watched: false,
                theId
              }
            ]
          })
        }}>
        Add Cowboy Bebop
      </button>

      <ul>
        {anime.map((item) => {
          return (
            <ItemLI
              key={item.title}
              isWatched={item.watched}>
              <p>{item.title}</p>
              <p onDoubleClick={() => changeOnlyThis({ item })}>
                Watched: {item.watched ? "✅" : "🟥"}
              </p>
              <p>Year: {item.year}</p>
            </ItemLI>
          )
        })}
      </ul>
    </AnimeAppWrapper>
  )
}
