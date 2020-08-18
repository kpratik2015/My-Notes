# React

A JavaScript library for building user interfaces.

- [React](#react)
  - [Why React?](#why-react)
  - [React Features](#react-features)
  - [Rendering with JSX](#rendering-with-jsx)
  - [Component Properties, State, and Context](#component-properties-state-and-context)
  - [Hooks](#hooks)
  - [Event Handling](#event-handling)

## Why React?

React is just the view layer

![](images/React/1.jpg)

![](images/React/2.jpg)

React is divided into two major APIs:

- The React Component API: These are the parts of the page that are actually
  rendered by React DOM.
- React DOM: This is the API that's used to perform the actual rendering on a web page.

**Declarative UI structures**

React components don't require executing steps in an imperative way. This is why JSX is central to React components. The XML-style syntax makes it easy to describe what the UI should look like. That is, what are the HTML elements that this component is going to render? This is called declarative programming and is very well suited for UI development.

Note: The DOM API is how JavaScript is able to change content on the page.

**Performance**

React has something called the virtual DOM, which is used to keep a representation of the real DOM elements in memory. It does this so that each time we re-render a component, it can compare the new content to the content that's already displayed on the page. Based on the difference, the virtual DOM can execute the imperative steps necessary to make the changes.

When you read about React, you'll often see words such as diffing and patching. Diffing means comparing old content with new content to figure out what's changed. Patching means executing the necessary DOM operations to render the new content.

_Note: Like any other JavaScript library, React is constrained by the run-to-completion nature of the main thread._

## React Features

The features of React 16 include the following:

- Revamped core architecture
- Lifecycle methods
- Context API
- Rendering fragments
- Portals
- Rendering lists and strings
- Handling errors
- Server-side rendering

**(Revamped core arch)[https://reactjs.org/blog/2017/09/26/react-v16.0.html]**

Change made to the internal reconciliation code. Instead of rendering every component on the page in a run-tocompilation way, React renders (fibers)[https://github.com/acdlite/react-fiber-architecture]—smaller chunks of the page that can be prioritized and rendered asynchronously.

**(The Context API)[https://reactjs.org/docs/context.html]**

Provides a way for you to supply your components with data at any tree level.

**(Portals)[https://reactjs.org/docs/portals.html]**

When a React component returns content, it gets rendered into its parent component. Then, that parent's content gets rendered into its parent component and so on, all the way to the tree root. There are times when you want to render something that specifically targets a DOM element. For example, a component that should be rendered as a dialog probably doesn't need to be mounted at the parent. Using a portal, you can control precisely where your component's content is rendered.

React features that were introduced after version 16.6.0:

- Memoizing functional components
- Code splitting and loading
- Hooks

**(Memoizing functional components)[https://reactjs.org/docs/react-api.html#reactmemo]**

Memoized components avoid re-rendering if the component data hasn't changed.

## Rendering with JSX

JSX is transpiled into JavaScript statements; browsers have no idea what JSX is. The render() function tells React to take your JSX markup and transform it into JavaScript statements that update the UI in the most efficient way possible.

When you render HTML tags in JSX markup, the expectation is that you'll use lowercase for the tag name. In fact, capitalizing the name of an HTML tag will fail. Tag names are case-sensitive and non-HTML elements are capitalized.

## Component Properties, State, and Context

A pure function is a function without side effects. That is to say, called with a given set of arguments, the function always produces the same output.

Some components have state that changes over time. These components then pass state values to other components as properties. These stateful components are called container components. **The basic premise of container components is simple: don't couple data fetching with the component that renders the data. The container is responsible for fetching the data and passing it to its child component.**

```jsx
// MyContainer.js
import React, { Component } from "react";
import MyList from "./MyList";

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["First", "Second", "Third"]);
    }, 2000);
  });
}
export default class MyContainer extends Component {
  state = { items: [] };
  componentDidMount() {
    fetchData().then((items) => this.setState({ items }));
  }
  render() {
    return <MyList {...this.state} />;
  }
}

// MyList.js
export default ({ items }) => (
  <ul>
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);
```

## Hooks

When in doubt, use one `useState()` Hook per state value.

There's a good chance that at some point, your users will navigate around your app and cause components to unmount before responses to their API requests arrive. When this happens, an error occurs because the component will attempt to update the state values of a component that has been removed.

Thankfully, the useEffect() Hook has a mechanism to clean up things such as pending API requests when the component is removed.

```jsx
import React, { Fragment, useEffect, useState } from "react";
import { Promise } from "bluebird";
Promise.config({ cancellation: true });
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Adam" });
    }, 1000);
  });
}
export default function User() {
  const [id, setId] = useState("loading...");
  const [name, setName] = useState("loading...");
  useEffect(() => {
    const promise = fetchUser().then((user) => {
      setId(user.id);
      setName(user.name);
    });
    return () => {
      promise.cancel();
    };
  }, []);
  return (
    <Fragment>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </Fragment>
  );
}
```

**Using reducer Hooks to scale state management**

A reducer function in a React application is a function that takes the current state, an action, and any other arguments that are needed to update the state. It returns the new state of the component. The action argument tells the reducer function what new state to return and is often used in a switch statement.

```jsx
import React, { Fragment, useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.value };
    case "changeAge":
      return { ...state, age: action.value };
    default:
      throw new Error(`${action.type} is not a valid action`);
  }
}
export default function App() {
  const [{ name, age }, dispatch] = useReducer(reducer, {});
  return (
    <Fragment>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) =>
          dispatch({ type: "changeName", value: e.target.value })
        }
      />
      <p>Name: {name}</p>
      <input
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => dispatch({ type: "changeAge", value: e.target.value })}
      />
      <p>Age: {age}</p>
    </Fragment>
  );
}
```

The `useReducer()` function takes two arguments: the _reducer_ function that updates the state, and the _initial_ state of the component.
We use the object spread operator to return a new state object, made from the existing state and the updated state object values.

In real applications, there are often scenarios where updating one piece of state means that another piece of state needs to be updated as well, based on this new value.

Let's look at an example that allows the user to select an item and the quantity of that item. It then shows the cost. This means that whenever the quantity or item fields change, the total must also change.

```jsx
import React, { Fragment, useReducer, useEffect } from "react";
const initialState = {
  options: [
    { id: 1, name: "First", value: 10 },
    { id: 2, name: "Second", value: 50 },
    { id: 3, name: "Third", value: 200 },
  ],
  quantity: 1,
  selected: 1,
};
function reduceButtonStates(state) {
  return {
    ...state,
    decrementDisabled: state.quantity === 0,
    incrementDisabled: state.quantity === 10,
  };
}
function reduceTotal(state) {
  const option = state.options.find((option) => option.id === state.selected);
  return { ...state, total: state.quantity * option.value };
}
function reducer(state, action) {
  let newState;
  switch (action.type) {
    case "init":
      newState = reduceTotal(state);
      return reduceButtonStates(newState);
    case "decrementQuantity":
      newState = { ...state, quantity: state.quantity - 1 };
      newState = reduceTotal(newState);
      return reduceButtonStates(newState);
    case "incrementQuantity":
      newState = { ...state, quantity: state.quantity + 1 };
      newState = reduceTotal(newState);
      return reduceButtonStates(newState);
    case "selectItem":
      newState = { ...state, selected: Number(action.id) };
      return reduceTotal(newState);
    default:
      throw new Error(`${action.type} is not a valid action`);
  }
}
```

Here's the _App_ component that uses the reducer:

```jsx
export default function App() {
  const [
    {
      options,
      selected,
      quantity,
      total,
      decrementDisabled,
      incrementDisabled,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "init" });
  }, []);
  return (
    <Fragment>
      <section>
        <button
          disabled={decrementDisabled}
          onClick={() => dispatch({ type: "decrementQuantity" })}
        >
          -
        </button>
        <button
          disabled={incrementDisabled}
          onClick={() => dispatch({ type: "incrementQuantity" })}
        >
          +
        </button>
        <input readOnly value={quantity} />
      </section>
      <section>
        <select
          value={selected}
          onChange={(e) => dispatch({ type: "selectItem", id: e.target.value })}
        >
          {options.map((o) => (
            <option key={o.id} value={o.id}>
              {o.name}
            </option>
          ))}
        </select>
      </section>
      <section>
        <strong>{total}</strong>
      </section>
    </Fragment>
  );
}
```

Here's what you'll see when the screen first loads:
![](images/React/3.jpg)

The goal is to keep related state operations close to one another since they're related. The perfect place to do this is in a reducer function.

## Event Handling

The differentiating factor with event handling in React components is that it's declarative. Contrast this with something like jQuery, where you have to write imperative code that selects the relevant DOM elements and attaches event handler functions to them.

The advantage of the declarative approach to event handlers in JSX markup is that they're part of the UI structure. Not having to track down code that assigns event handlers is mentally liberating.
