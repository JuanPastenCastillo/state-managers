import { Counter } from "./counter"
import { INDEX_ReduxToolkitWrapper } from "./styles/INDEX_ReduxToolkitWrapper"

/* 
!FH1:

- https://redux-toolkit.js.org/introduction/why-rtk-is-redux-today

- https://redux-toolkit.js.org/tutorials/overview
- https://redux-toolkit.js.org/tutorials/typescript

- https://redux-toolkit.js.org/rtk-query/comparison
*/

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
