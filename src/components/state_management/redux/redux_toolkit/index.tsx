import { Counter } from "./counter"
import { INDEX_ReduxToolkitWrapper } from "./styles/INDEX_ReduxToolkitWrapper"

export const INDEX_ReduxToolkit = () => {
  return (
    <INDEX_ReduxToolkitWrapper>
      <h1>Redux-Toolkit from:</h1>
      <a
        href='https://redux-toolkit.js.org/introduction/getting-started'
        target='_blank'
        rel='noreferrer'>
        https://redux-toolkit.js.org/introduction/getting-started
      </a>
      <Counter />
    </INDEX_ReduxToolkitWrapper>
  )
}
