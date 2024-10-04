import IMGOneWayDataFlow from "@/assets/redux/redux-essentials/one-way-data-flow.png"
import { CodeHighlighted } from "@/components/code_highlight"
import { ReduxEssenstialsWrapper } from "./styles/ReduxEssenstialsWrapper"

export const ReduxEssenstials = () => {
  return (
    <ReduxEssenstialsWrapper>
      <h1>Redux Essenstials from:</h1>
      <a
        href='https://redux.js.org/tutorials/essentials/part-1-overview-concepts'
        target='_blank'
        rel='noreferrer'>
        https://redux.js.org/tutorials/essentials/part-1-overview-concepts
      </a>

      <section>
        <h2>What is redux?</h2>
        <p>
          Redux is a pattern and library for managing and updating global
          application state, where the UI triggers events called{" "}
          <b>"actions"</b> to describe what happened, and separate update logic
          called <b>"reducers"</b> updates the state in response
        </p>
      </section>

      <section>
        <h2>When Should I Use Redux?</h2>
        <p>
          Redux helps you deal with shared state management, but like any tool,
          it has tradeoffs [on the] short term and long term productivity
        </p>
        <ul>
          Redux is more useful when:
          <li>
            You have large amounts of application state that are needed in many
            places in the app
          </li>
          <li>The app state is updated frequently over time</li>
          <li>The logic to update that state may be complex</li>
          <li>
            The app has a medium or large-sized codebase, and might be worked on
            by many people
          </li>
        </ul>
        <p>
          Caveat: <i>Not all apps need Redux</i>
        </p>
      </section>

      <section>
        <h2>State management</h2>
        <CodeHighlighted
          code={`
              function Counter() {
                // State: a counter value
                const [counter, setCounter] = useState(0)
            
                // Action: code that causes an update to the state when something happens 
                const increment = () => {
                  setCounter((prevCounter) => prevCounter + 1)
                }
            
                // View: the UI definition
                return (
                  <div>
                    Value: {counter} <button onClick={increment}>Increment</button>
                  </div>
                )
              }
            `}
        />
        <ul>
          This is a small example of "one-way data flow":
          <li>
            State describes the condition of the app at a specific point in time
          </li>
          <li>The UI is rendered based on that state</li>
          <li>
            When something happens (such as a user clicking a button), the state
            is updated based on what occurred
          </li>
          <li>The UI re-renders based on the new state</li>
          <li>
            <img
              src={IMGOneWayDataFlow}
              alt='One way data flow'
            />
          </li>
        </ul>
        <p>
          (...) the simplicity can break down when we have multiple components
          that need to share and use the same state, especially if those
          components are located in different parts of the application.
          Sometimes this can be solved by <b>"lifting state up"</b> to parent
          components, but that doesn't always help
        </p>
        <p>
          One way to solve this is to extract the shared state from the
          components, and put it into a centralized location outside the
          component tree. With this, our component tree becomes a big{" "}
          <b>"view"</b>, and any component can access the state or trigger
          actions, no matter where they are in the tree!
        </p>
        <p>
          This is the basic idea behind Redux:{" "}
          <b>
            a single centralized place to contain the global state in your
            application
          </b>
          , and specific patterns to follow when updating that state to make the
          code predictable
        </p>
      </section>

      <section>
        <h2>Terminology</h2>
        <ul>
          <li>
            <p>
              Actions: An <b>action</b> is a plain JavaScript object that has a{" "}
              <code>type</code> field. You can think of an action as an{" "}
              <b>
                event that describes something that happened in the application
              </b>
            </p>
            <p>
              The <code>type</code> field should be a string that gives this
              action a descriptive name, like <b>"todos/todoAdded"</b>
            </p>
            <p>
              An action object can have other fields with additional information
              about what happened. By convention, we put that information in a
              field called <code>payload</code>
            </p>
          </li>
          <li>
            <p>
              Reducers: A <b>reducer</b> is a function that receives the current{" "}
              <code>state</code> and an <code>action</code> object, decides how
              to update the state if necessary, and returns the new state:{" "}
              <code>{`(state, action) => newState`}</code>
            </p>

            <ul>
              <p>Reducers must always follow some specific rules:</p>
              <li>
                They should only calculate the new state value based on the
                state and action arguments
              </li>
              <li>
                They are not allowed to modify the existing state. Instead, they
                must make immutable updates, by copying the existing state and
                making changes to the copied values
              </li>
              <li>
                They must be "pure" - they cannot do any asynchronous logic,
                calculate random values, or cause other "side effects"
              </li>
            </ul>
          </li>
          <li>
            <p>
              Store: The current Redux application state lives in an object
              called the <b>store</b>
            </p>
            <p>
              The store is created by passing in a reducer, and has a method
              called <code>getState</code>:
            </p>
            <CodeHighlighted
              code={`
                import { configureStore } from '@reduxjs/toolkit'
                const store = configureStore({ reducer: counterReducer })
                
                console.log(store.getState())
                // {value: 0}`}
            />
          </li>
          <li>
            <p>
              Dispatch: The only way to update the state is to call
              <code>store.dispatch()</code> and pass in an action object. For
              example:
              <CodeHighlighted
                code={`
                  store.dispatch({ type: 'counter/increment' })
                  
                  console.log(store.getState())
                  // {value: 1}`}
              />
            </p>
            <p>
              You can think of dispatching actions as{" "}
              <b>"triggering an event"</b> in the application
            </p>
          </li>
          <li>
            <p>
              Selectors: <b>Selectors</b> are functions that know how to extract
              specific pieces of information from a store state value. As an
              application grows bigger, this can help avoid repeating logic as
              different parts of the app need to read the same data:
              <CodeHighlighted
                code={`
                  const selectCounterValue = state => state.value
                  const currentValue = selectCounterValue(store.getState())
                  
                  console.log(currentValue)
                  // 2
                `}
              />
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Redux Application Data Flow</h2>
        <p>
          Earlier, we talked about "one-way data flow", which describes this
          sequence of steps to update the app:
        </p>
        <ul>
          <li>
            State describes the condition of the app at a specific point in time
          </li>
          <li>The UI is rendered based on that state</li>
          <li>
            When something happens (such as a user clicking a button), the state
            is updated based on what occurred
          </li>
          <li>The UI re-renders based on the new state</li>
        </ul>

        <p>
          For Redux specifically, we can break these steps into more detail:
        </p>

        <ul>
          <li>
            <b>Initial setup:</b>
            <ul>
              <li>A Redux store is created using a root reducer function</li>
              <li>
                The store calls the root reducer once, and saves the return
                value as its initial state
              </li>
              <li>
                When the UI is first rendered, UI components access the current
                state of the Redux store, and use that data to decide what to
                render. They also subscribe to any future store updates so they
                can know if the state has changed.
              </li>
            </ul>
          </li>
          <li>
            <b>Updates:</b>
            <ul>
              <li>
                Something happens in the app, such as a user clicking a button
              </li>
              <li>
                The app code dispatches an action to the Redux store, like{" "}
                <code>{`dispatch({type: 'counter/increment'})`}</code>
              </li>
              <li>
                The store runs the reducer function again with the previous{" "}
                <code>state</code> and the current <code>action</code>, and
                saves the return value as the new <code>state</code>
              </li>
              <li>
                The store notifies all parts of the UI that are subscribed that
                the store has been updated
              </li>
              <li>
                Each UI component that needs data from the store checks to see
                if the parts of the state they need have changed
              </li>
              <li>
                Each component that sees its data has changed forces a re-render
                with the new data, so it can update what's shown on the screen
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </ReduxEssenstialsWrapper>
  )
}
