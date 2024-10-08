import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const fakePokemonListing = {
  count: 1126,
  next: "https://pokeapi.co/api/v2/pokemon?offset=9&limit=9",
  previous: null,
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
    { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
    { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" }
  ]
}

const fakePokemonDetailData = {
  id: 1,
  name: "bulbasaur",
  height: 7,
  weight: 69,
  types: [
    {
      slot: 1,
      type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
    },
    {
      slot: 2,
      type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
    }
  ],
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  }
}

function simulateLoading() {
  return new Promise((resolve) => setTimeout(resolve, 500))
}

export const apiPokemon = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (build) => ({
    pokemonList: build.query({
      async queryFn() {
        await simulateLoading()
        return { data: fakePokemonListing } // Ensure `data` is returned
      }
    }),
    pokemonDetail: build.query({
      async queryFn() {
        await simulateLoading()
        return { data: fakePokemonDetailData } // Ensure `data` is returned
      }
    })
  })
})

export const { usePokemonListQuery, usePokemonDetailQuery } = apiPokemon
