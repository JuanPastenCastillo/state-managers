import { useState } from "react"
import { PokemonDetails } from "./pokemon-details"
import { PokemonList } from "./pokemon-list"
import { INDEX_RtxQueryWrapper } from "./styles/INDEX_RtxQueryWrapper"

export const INDEX_RtxQuery = () => {
  const [selectedPokemon, setSelectPokemon] = useState<string | undefined>(
    undefined
  )

  return (
    <INDEX_RtxQueryWrapper>
      <h1>Fetching data using RTK Query</h1>

      {selectedPokemon ? (
        <>
          <PokemonDetails selectedPokemon={selectedPokemon} />
          <button onClick={() => setSelectPokemon(undefined)}>back</button>
        </>
      ) : (
        <PokemonList onPokemonSelected={setSelectPokemon} />
      )}
    </INDEX_RtxQueryWrapper>
  )
}
