import { useState } from "react"
import { PokemonDetails } from "./pokemon-details"
import { PokemonList } from "./pokemon-list"
import { INDEX_RtxQueryWrapper } from "./styles/INDEX_RtxQueryWrapper"

/* 
!FH0

- https://egghead.io/lessons/redux-fetch-data-from-a-live-endpoint-with-rtk-query
*/

export const INDEX_RtxQuery = () => {
  const [selectedPokemon, setSelectPokemon] = useState<any>(undefined)

  return (
    <INDEX_RtxQueryWrapper>
      <h1>Fetching data using RTK Query</h1>

      {selectedPokemon ? (
        <>
          <PokemonDetails />
          <button onClick={() => setSelectPokemon(undefined)}>back</button>
        </>
      ) : (
        <PokemonList onPokemonSelected={setSelectPokemon} />
      )}
    </INDEX_RtxQueryWrapper>
  )
}
