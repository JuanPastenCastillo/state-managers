import { usePokemonListQuery } from "@/state_managers/redux/redux_toolkit/api/api-pokemon"

export const PokemonList = ({
  onPokemonSelected
}: {
  onPokemonSelected: any
}) => {
  const { isLoading, isError, isSuccess, data } = usePokemonListQuery()

  if (isLoading) {
    return <p>loading, please wait</p>
  }

  if (isError) {
    return <p>something went wrong</p>
  }

  if (isSuccess) {
    return (
      <article>
        <h2>Overview</h2>
        <ol start={1}>
          {data.results.map(({ name }: { name: string }) => (
            <li key={name}>
              <button onClick={() => onPokemonSelected(name)}>{name}</button>
            </li>
          ))}
        </ol>
      </article>
    )
  }
}
