import { useQuery } from "@tanstack/react-query"
import { INDEX_SimpleWrapper } from "./styles/index-wrapper"

type UserData = {
  name: string
  avatar_url: string
  // Add other fields you expect from the API response
  [key: string]: any // This allows for additional fields without strict typing
}

export const INDEX_Simple = () => {
  const { isPending, error, data, isFetching } = useQuery<UserData>({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.github.com/users/JuanPastenCastillo"
      )
      return await response.json()
    }
  })

  if (isPending) return "Loading..."

  if (error) return "An error has occurred: " + error.message

  if (!data) return null // Handle case where data is undefinedF

  return (
    <INDEX_SimpleWrapper>
      <fieldset>
        <legend>
          <h1>Simple use of React-Query:</h1>
        </legend>

        <p>
          URL:{" "}
          <a
            href='https://tanstack.com/query/latest/docs/framework/react/examples/simple'
            target='_blank'
            rel='noreferrer'>
            https://tanstack.com/query/latest/docs/framework/react/examples/simple
          </a>
        </p>

        <h1>{data.name}</h1>
        <h2>All data from will be showed below</h2>
        <ul>
          {Object.entries(data).map(([key, value]) => {
            if (key === "avatar_url") {
              return (
                <li key={key}>
                  <img
                    src={value}
                    alt={`${data.name} photo avatar`}
                  />
                </li>
              )
            }
            return (
              <li key={key}>
                <p>
                  <strong>key</strong>: {key} | <strong>value</strong>:{" "}
                  {value ? value : "null"}
                </p>
              </li>
            )
          })}
        </ul>
        <div>{isFetching ? "Updating..." : ""}</div>
      </fieldset>
    </INDEX_SimpleWrapper>
  )
}
