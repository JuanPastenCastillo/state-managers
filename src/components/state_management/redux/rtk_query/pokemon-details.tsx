import { usePokemonDetailQuery } from "@/state_managers/redux/redux_toolkit/api/api-pokemon"

const listFormatter = new Intl.ListFormat("en", {
  style: "short",
  type: "conjunction"
})

export const PokemonDetails = ({
  selectedPokemon
}: {
  selectedPokemon: string
}) => {
  const { isLoading, isError, isUninitialized, data } = usePokemonDetailQuery({
    name: selectedPokemon
  })

  if (isUninitialized || isLoading) {
    return <p>loading, please wait</p>
  }

  if (isError) {
    return <p>something went wrong</p>
  }

  return (
    <article>
      <h2>{data.name}</h2>
      <img
        src={data.sprites.front_default}
        alt={data.name}
      />
      <ul>
        <li>id: {data.id}</li>
        <li>height: {data.height}</li>
        <li>weight: {data.weight}</li>
        <li>
          types:
          {listFormatter.format(data.types.map((item) => item.type.name))}
        </li>
      </ul>
    </article>
  )
}
