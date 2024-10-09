import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface PokemonListing {
  count: number
  results: Array<{
    name: string
    url: string
  }>
}

interface PokemonDetailData {
  id: number
  name: string
  height: number
  weight: number
  types: Array<{
    slot: number
    type: {
      name: string
      url: string
    }
  }>
  sprites: {
    front_default: string
  }
}

const baseQueryWithErrorHandling = async (
  args: any,
  api: any,
  extraOptions: any
) => {
  const result = await fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/"
  })(args, api, extraOptions)

  if (result.error) {
    // You can log or manipulate the error here if needed
    const errorData = result.error.data || { message: "An error occurred" }
    return { error: { status: result.error.status, data: errorData } }
  }

  return result
}

export const apiPokemon = createApi({
  baseQuery: baseQueryWithErrorHandling,

  endpoints: (build) => ({
    pokemonList: build.query<PokemonListing, void>({
      query() {
        return {
          url: "pokemon",
          params: {
            limit: 9
          },
          method: "GET",
          headers: {}
        }
      }
    }),
    pokemonDetail: build.query<PokemonDetailData, { name: string }>({
      query: ({ name }) => `pokemon/${name}`
    })
  })
})

export const { usePokemonListQuery, usePokemonDetailQuery } = apiPokemon
