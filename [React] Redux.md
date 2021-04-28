# React Redux

Using redux makes us build app in a sustainable way. It pays off in the long term.

In redux, we have a global store. That all of our components can access.

Redux actions and reducers together control what changes a given component can make to the redux store.

`Actions` contain 2 things: actionType and payload.

Command pattern - We defined possible changes as actions themselves. Actions define different events that can happen in our application.

`Reducers` define how the global store is gonna change whenever one of the events happen.

Components have to trigger an action to modify store.

In Redux each action is processed sequentially. `Dispatch` -> Firing of an action.

## Setup

`npm install redux react-redux`

`react-redux` React specific implementation of redux.

`store.js` Global state

```jsx
// store.js
import { createStore, combineReducers } from "redux";
import { todos } from "./reducers";

const reducers = {
  todos,
};

const rootReducer = combineReducers(reducers);

/**
 * Will be used at the start of App
 */
export const configureStore = () => createStore(rootReducer);
```

```jsx
// index.jsx
import { configureStore } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

```jsx
// actions.js

export const CREATE_TODO = "CREATE_TODO"; // To avoid Typos. These are action types.
// One of the action creators
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: {
    text,
  },
});

export const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
export const markTodoAsCompleted = (id) => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { id },
});

export const CLEAR_TODOS = "CLEAR_TODOS";
export const clearTodos = () => ({
  type: CLEAR_TODOS,
});
```

```jsx
// reducers.js. Right next to actions.js
// We name it according to resource its gonna manage.

import { CREATE_TODO, MARK_TODO_AS_COMPLETED } from "./actions";
import { v4 as uuid } from "uuid";
export const todos = (state = [], action) => {
  // Generally switch case statements are used.
  if (action.type === CREATE_TODO) {
    const newTodo = {
      id: uuid(),
      text: action.payload.text,
      isCompleted: false,
    };
    return [...state, newTodo];
  } else if (action.type === MARK_TODO_AS_COMPLETED) {
    return state.map((todo) => {
      if (todo.id !== payload.id) {
        return todo;
      }
      return { ...todo, isCompleted: true };
    });
  }
  // etc
  return state;
};
```

---

Connecting components to store.

```jsx
// NewTodoForm.jsx
import { connect } from "react-redux"; // connect is a HoC. We can call it with 2 sets of arguments.
import { createTodo } from "../actions";

const NewTodoForm = ({ onCreateClicked, todos }) => {
  return null;
};

// Both of the below functions take in an argument of redux and allows extra props.
// mapStateToProps - gives component access to certain parts of state.
// the state argument we see here is not the same state we see inside reducer.
const mapStateToProps = (state) => ({
  todos: state.todos,
}); // returned object is passed to component as extra props

// mapDispatchToProps - functions that component will be able to use to dispatch actions to our redux store.
const mapDispatchToProps = (dispatch) => ({
  onCreateClicked: (text) => dispatch(createTodo(text)), // takes text from input and dispatches action with prop
});

// connect does not change the component in any way. It returns a connected version.
export const NewTodoFormConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTodoForm);
```

Redux devtools extension in chrome to work:

`store.js` set in a mode so that extension can pick up on it.

```jsx
export const configureStore = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_()
  );
```
