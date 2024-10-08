import { useRouteError } from "react-router-dom"

interface RouteError {
  message?: string
  statusText?: string
}

export const ErrorPage = () => {
  const error = useRouteError() as RouteError

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          <i>{error.statusText || error.message}</i>
        </i>
      </p>
    </div>
  )
}
