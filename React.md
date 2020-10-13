# React

A JavaScript library for building user interfaces.

- [React](#react)
  - [Why React?](#why-react)
  - [React Features](#react-features)
  - [Rendering with JSX](#rendering-with-jsx)
  - [Component Properties, State, and Context](#component-properties-state-and-context)
  - [Hooks](#hooks)
  - [Event Handling](#event-handling)
  - [Crafting Reusable Components](#crafting-reusable-components)
  - [React Component Life Cycle](#react-component-life-cycle)
  - [Code Splitting Using Lazy Components and Suspense](#code-splitting-using-lazy-components-and-suspense)
  - [Server-Side React Components](#server-side-react-components)
  - [Handling Application State](#handling-application-state)
  - [Apollo](#apollo)
  - [JSX](#jsx)
  - [Babel](#babel)
  - [Uncontrolled v/s Controlled Components](#uncontrolled-vs-controlled-components)
  - [Testing](#testing)
    - [Integration vs Unit Testing](#integration-vs-unit-testing)
    - [Shallow rendering](#shallow-rendering)
    - [Jest](#jest)
    - [Enzyme](#enzyme)
  - [Flux and Redux](#flux-and-redux)
  - [Q&A](#qa)
    - [What are React components?](#what-are-react-components)
    - [How do you tell React to insert component on page (DOM)?](#how-do-you-tell-react-to-insert-component-on-page-dom)
    - [In React, how are native HTML elements cased?](#in-react-how-are-native-html-elements-cased)
    - [What is a Virtual DOM?](#what-is-a-virtual-dom)
    - [Virtual DOM vs. Shadow DOM, are they the same thing?](#virtual-dom-vs-shadow-dom-are-they-the-same-thing)

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

**Easy to integrate into existing projects by not being overly opinionated**

You can add React to an existing project little by little if you want, and this is in large part thanks to the fact that React doesn’t impose a rigid application architecture on you like other options do.

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

**Importing generic handlers**

```jsx
import React, { Component } from "react";
import reverse from "./reverse";
export default class MyList extends Component {
  state = {
    items: ["Angular", "Ember", "React"],
  };
  onReverseClick = reverse.bind(this);
  render() {
    const {
      state: { items },
      onReverseClick,
    } = this;
    return (
      <section>
        <button onClick={onReverseClick}>Reverse</button>
        <ul>
          {items.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </section>
    );
  }
}
```

The onReverseClick method actually calls the generic reverse() function. It is created using bind() to bind the context of the generic function to this component instance.

Note: If you have a class-based component, you can bind your function context to the component class so that you have direct access to the component state and properties.

**Binding handlers to elements**

When you assign an event handler function to an element in JSX, React doesn't actually attach an event listener to the underlying DOM element. Instead, it adds the function to an internal mapping of functions. There's a single event listener on the document for the page. When the React component is removed, the handler is simply removed from the list of handlers.

**Using synthetic event objects**

Synthetic events serve two purposes in React:

- They provide a consistent event interface, normalizing browser inconsistencies.
- Synthetic events contain information that's necessary for propagation to work.

**Understanding event pooling**

Every synthetic event wrapper that's created will also need to be garbage collected at some point, which can be expensive in terms of CPU time. When the garbage collector is running, none of your JavaScript code is able to run.

React deals with this problem by allocating a synthetic instance pool. Whenever an event is triggered, it takes an instance from the pool and populates its properties. The pool keeps a reference to the synthetic event instances, so they're never eligible for garbage collection. React never has to allocate new instances either.

However, there is one gotcha that you need to be aware of. It involves accessing the synthetic event instances from asynchronous code in your event handlers. This is an issue because, as soon as the handler has finished running, the instance goes back into the pool. When it goes back into the pool, all of its properties are cleared.

## Crafting Reusable Components

The general rule is that the further your components move from stateful data, the more utility they have, because their property values could be passed in from anywhere in the application.

## React Component Life Cycle

![](images/React/4.jpg)

- getDerivedStateFromProps(): This method allows you to update the state of the component based on the property values of the component. This method is called when the component is initially rendered and when it receives new property values.
- render(): Returns the content to be rendered by the component. This is called when the component is first mounted to the DOM, when it receives new property values, and when setState() is called.
- componentDidMount(): This is called after the component is mounted to the DOM. This is where you can perform component initialization work, such as fetching data.
- shouldComponentUpdate(): You can use this method to compare new states or props with current states or props. Then, you can return false if there's no need to re-render the component. This method is used to make your components more efficient.
- getSnapshotBeforeUpdate(): This method lets you perform operations directly on the DOM elements of your component before they're actually committed to the DOM. The difference between this method and render() is that getSnapshotBeforeUpdate() isn't asynchronous. With render(), there's a good chance that the DOM structure could change between when it's called and when the changes are actually made in the DOM.
- componentDidUpdate(): This is called when the component is updated. It's rare that you'll have to use this method.

**To render or not to render**

The shouldComponentUpdate() life cycle method is used to determine whether or not the component will render when asked to.

```jsx
import React, { Component } from "react";
function referenceEquality(arr1, arr2) {
  return arr1 === arr2;
}
function valueEquality(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
export default class MyList extends Component {
  state = {
    items: new Array(5000).fill(null).map((v, i) => i),
  };
  shouldComponentUpdate(props, state) {
    if (!referenceEquality(this.state.items, state.items)) {
      return !valueEquality(this.state.items, state.items);
    }
    return false;
  }
  render() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}
```

The items state is initialized to an array with 5000 items in it. This is a fairly large collection, so you don't want the virtual DOM inside React to constantly diff this list. The virtual DOM is efficient at what it does, but not nearly as efficient as code, which can perform a simple should or shouldn't render check. The shouldComponentRender() method that you've implemented here does exactly that.

Here's what the performance profile looks like for this component:

![](images/React/5.jpg)

The initial render takes the longest—a few hundred milliseconds. But then you have all of these tiny time slices that are completely imperceptible to the user experience. These are the result of shouldComponentUpdate() returning false. Let's comment out this method now and see how this profile changes:

![](images/React/6.jpg)

**Rendering jQuery UI widgets**

```jsx
import React, { Component } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/button";
import "jquery-ui/themes/base/all.css";
export default class MyButton extends Component {
  componentDidMount() {
    $(this.button).button(this.props);
  }
  componentDidUpdate() {
    $(this.button).button("option", this.props);
  }
  render() {
    return (
      <button
        onClick={this.props.onClick}
        ref={(button) => {
          this.button = button;
        }}
      />
    );
  }
}
```

The jQuery UI button widget expects a `<button>` element, so this is what's rendered by the component.

## Code Splitting Using Lazy Components and Suspense

There are two pieces involved with using the new lazy() API in React. First, there's bundling components into their own separate files so that they can be downloaded by the browser separately from other parts of the application. Secondly, once you have created the bundles, you can build React components that are lazy—they don't download anything until the first time they're rendered.

Let's take a look at a simple component that we might want to bundle separately from the rest of the application:

```jsx
import React from "react";
export default function MyComponent() {
  return <p>My Component</p>;
}
```

Now let's take a look at how we would import this module dynamically using the import() function, resulting in a separate bundle:

```jsx
import React, { useState, useEffect } from "react";
export default function App() {
  const [MyComponent, setMyComponent] = useState(() => () => null);
  useEffect(() => {
    import("./MyComponent").then((module) => {
      setMyComponent(() => module.default);
    });
  }, []);
  return <MyComponent />;
}
```

Making components lazy:

```jsx
import React, { Suspense, lazy } from "react";
const MyComponent = lazy(() => import("./MyComponent"));
export default function App() {
  return (
    <Suspense fallback={"loading..."}>
      <MyComponent />
    </Suspense>
  );
}
```

If you have too many lazy components, your app is going to end up making several HTTP requests to fetch them – at the same time. There's no benefit to having separate bundles for components that are used on the same part of the app.

## Server-Side React Components

**Another term for server-side rendering is isomorphic JavaScript.** This is a fancy way of saying JavaScript code that can run in the browser and in Node.js without modification.

In the case of rendering on the server, components are rendered to strings. The server can't actually display rendered HTML; all it can do is send the rendered markup to the browser.

The main motivation behind server-side rendering, for me personally, is improved performance. In particular, the initial rendering just feels faster for the user and this translates to an overall better user experience.

**Rendering to strings**

Component to render:

```jsx
import React from "react";
import PropTypes from "prop-types";
export default function App({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
App.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
```

The server that will render this component when the
browser asks for it:

```jsx
import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import App from "./App";
const doc = (content) =>
  `
<!doctype html>
<html>
<head>
<title>Rendering to strings</title>
</head>
<body>
<div id="app">${content}</div>
</body>
</html>
`;
const app = express();
app.get("/", (req, res) => {
  const props = { items: ["One", "Two", "Three"] };
  const rendered = renderToString(<App {...props} />);
  res.send(doc(rendered)); // doc() - this creates the basic HTML document template with a placeholder for rendered React
content.
});
app.listen(8080, () => {
  console.log("Listening on 127.0.0.1:8080");
});
```

**Backend routing**

```jsx
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import express from "express";
import App from "./App";
const app = express();
app.get("/*", (req, res) => {
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    res.write(`
<!doctype html>
<div id="app">${html}</div>
`);
    res.end();
  }
});
app.listen(8080, () => {
  console.log("Listening on 127.0.0.1:8080");
});
```

**Frontend reconciliation**

The user wants to use the application and the server needs to deliver the client's code bundle.

index.js

```jsx
import React from "react";
import { hydrate } from "react-dom";
import App from "./App";
hydrate(<App />, document.getElementById("root"));
```

In this case, you're using the hydrate() function instead of the render() function. The two functions have the same end result—rendered JSX content in the browser window. The hydrate() function is different because it expects rendered component content to already be in place. This means that it will perform less work because it will assume that the markup is correct and doesn't need to be updated on the initial render.

Only in development mode will React examine the entire DOM tree of the server-rendered content to make sure that the correct content is displayed. If there's a mismatch between the existing content and the output of the React components, you'll see warnings that show you where these mismatches happened so that you can go and fix them.

## Handling Application State

**Information architecture and Flux**

Flux is a set of patterns created by Facebook that helps developers think about their information architecture in a way that fits in naturally with their apps.

**Unidirectionality**

Whenever the container state changes, the child components are re-rendered with new property values. This is unidirectional data flow.
Flux takes this idea and applies it to something called a store. A store is an abstract concept that holds application state.

When changes can only come from one direction, you can eliminate a number of other possibilities, thus making the architecture as a whole more predictable.

**Synchronous update rounds**

When you change the state of a React container, it will re-render its children, who re-render their children, and so on. In Flux terminology, this is called an **update round**. From the time state changes to the time that the UI elements reflect this change, this is the boundary of the round. It's nice to be able to group the dynamic parts of application behavior into larger chunks like this because it's easier to reason about cause and effect.

A potential problem with React container components is that they can interweave with one another and render in a non-deterministic order. JavaScript is a single-threaded, run-to-completion environment that should be embraced by working with it rather than against it. Update the whole UI, and then update the whole UI again. It turns out that React is a really good tool for this job.

**Predictable state transformations**

You're keeping all your application state in a store, which is great, but you can still break things by mutating data in other places.
The problem with performing these state transformations outside the store is that you don't necessarily know that they're happening. Think of mutating data as a butterfly effect: one small change has far-reaching consequences that aren't obvious at first. _The solution is to only mutate state in the store, without exception._

**Implementing Redux**

Redux doesn't strictly follow the patterns set out by Flux. Instead, it borrows key ideas from Flux and implements a small API to make it easy to implement Flux.

In Redux, the entire state of the application is represented by a single store. Here's what it looks like:

```jsx
export default {
  App: {
    title: "Neckbeard News",
    links: [
      { name: "All", url: "/" },
      { name: "Local", url: "/local" },
      { name: "Global", url: "/global" },
      { name: "Tech", url: "/tech" },
      { name: "Sports", url: "/sports" },
    ],
  },
  Home: {
    articles: [],
  },
  Article: {
    full: "",
  },
};
```

In Redux, you divide up the application state into slices. In this case, it's a simple application, so the store only has three slices of state. Each slice of the state is mapped to a major application feature.
For example, the Home key represents a state that's used by the Home component of your app. It's important to initialize any state, even if it's an empty object or array, so that your components have initial properties.

**Creating the store**

In Redux, you assign a reducer function to each slice of state in your store.

The key concept of a reducer in Redux is that it's pure and side-effect free. This is where having Immutable.js structures as state comes in handy.

```jsx
import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import App from "./App";
import Home from "./Home";
import Article from "./Article";
export default createStore(
  combineReducers({
    App,
    Home,
    Article,
  }),
  initialState
);
```

The `App`, `Home`, and `Article` functions are named in exactly the same way as the slice of state that they manipulate.

**Store provider and routes**

Redux has a Provider component (technically, it's the `react-redux` package that provides it), which is used to wrap the top-level components of your application. This will ensure that Redux store data is available to every component in your application.

```jsx
import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import App from "./App";
export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
```

**The App component**

```jsx
import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Home";
import Article from "./Article";
function articleList(filter) {
  return (props) => <Home {...props} filter={filter} />;
}
const categoryListStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
};
const categoryItemStyle = {
  padding: "5px",
};
const Local = articleList("local");
const Global = articleList("global");
const Tech = articleList("tech");
const Sports = articleList("sports");
export default connect((state) => state.App)(({ title, links }) => (
  <Router>
    <main>
      <h1>{title}</h1>
      <ul style={categoryListStyle}>
        {/* Renders a link for each article category.
The key thing to note is that the "links"
value comes from a Redux store. */}
        {links.map((l) => (
          <li key={l.url} style={categoryItemStyle}>
            <NavLink exact to={l.url} activeStyle={{ fontWeight: "bold" }}>
              {l.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <section>
        <Route exact path="/" component={Home} />
        <Route exact path="/local" component={Local} />
        <Route exact path="/global" component={Global} />
        <Route exact path="/tech" component={Tech} />
        <Route exact path="/sports" component={Sports} />
        <Route exact path="/articles/:id" component={Article} />
      </section>
    </main>
  </Router>
));
```

`reducer` function of the App component

```jsx
import initialState from "./initialState";
const title = initialState.App.title;
const articleLinks = [
  {
    name: "Home",
    url: "/",
  },
];
const homeLinks = initialState.App.links;
const typeMap = {
  FETCHING_ARTICLE: (state) => ({ ...state, title: "...", articleLinks }),
  FETCH_ARTICLE: (state, payload) => ({ ...state, title: payload.title }),
  FETCHING_ARTICLES: (state) => ({ ...state, title, links: homeLinks }),
  FETCH_ARTICLES: (state) => ({ ...state, title }),
};
export default function App(state = initialState, { type, payload }) {
  const reducer = typeMap[type];
  return reducer ? reducer(state, payload) : state;
}
```

Take the `FETCHING_ARTICLE` and `FETCHING_ARTICLES` actions, for example. You want to change the UI before actually issuing a network request.

**The Home Component**

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchingArticles: PropTypes.func.isRequired,
    fetchArticles: PropTypes.func.isRequired,
    toggleArticle: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  };
  static defaultProps = {
    filter: "",
  };
  componentDidMount() {
    this.props.fetchingArticles();
    this.props.fetchArticles(this.props.filter);
  }
  onTitleClick = (id) => () => this.props.toggleArticle(id);
  render() {
    const { onTitleClick } = this;
    const { articles } = this.props;
    return (
      <ul style={listStyle}>
        {articles.length === 0 ? <li style={listItemStyle}>...</li> : null}
        {articles.map((a) => (
          <li key={a.id} style={listItemStyle}>
            <button onClick={onTitleClick(a.id)} style={titleStyle}>
              {a.title}
            </button>
            <p style={{ display: a.display }}>
              <small>
                <span>{a.summary} </span>
                <Link to={`articles/${a.id}`}>More...</Link>
              </small>
            </p>
          </li>
        ))}
      </ul>
    );
  }
}
export default connect(
  (state, ownProps) => ({ ...state.Home, ...ownProps }),
  (dispatch) => ({
    fetchingArticles: () =>
      dispatch({
        type: "FETCHING_ARTICLES",
      }),
    fetchArticles: (filter) => {
      const headers = new Headers();
      headers.append("Accept", "application/json");
      fetch(`/api/articles/${filter}`, { headers })
        .then((resp) => resp.json())
        .then((json) =>
          dispatch({
            type: "FETCH_ARTICLES",
            payload: json,
          })
        );
    },
    toggleArticle: (payload) =>
      dispatch({
        type: "TOGGLE_ARTICLE",
        payload,
      }),
  })
)(Home);
```

Let's focus on the `connect()` function, which is used to connect the Home component to the store. The first argument is a function that takes relevant state from the store and returns it as props for this component. It's using `ownProps` so that you can pass props directly to the component and override anything from the store. The second argument is a function that returns action creator functions as `props`. The `dispatch()` function is how these action creator functions are able to deliver payloads to the store.

`reducer` function used with the _Home_ component:

```jsx
import initialState from "./initialState";
const typeMap = {
  FETCHING_ARTICLES: (state) => ({ ...state, articles: [] }),
  FETCH_ARTICLES: (state, payload) => ({
    ...state,
    articles: payload.map((a) => ({ ...a, display: "none" })),
  }),
  TOGGLE_ARTICLE: (state, id) => {
    const articles = [...state.articles];
    const index = articles.findIndex((a) => a.id === id);
    articles[index] = {
      ...articles[index],
      display: articles[index].display === "none" ? "block" : "none",
    };
    return { ...state, articles };
  },
};
export default function Home(state = initialState, { type, payload }) {
  const reducer = typeMap[type];
  return reducer ? reducer(state, payload) : state;
}
```

## Apollo

At a high level, you can think of Apollo as an implementation of Flux architecture patterns and you can think of GraphQL as the interface that describes how the Flux stores within Apollo Client work.

## JSX

JSX stands for JavaScript Syntax Extension, and it is a syntax React provides that looks a lot like HTML/XML.JSX was created to make this JavaScript representation of HTML more HTML-like.

## Babel

Most browsers in use today do not fully support ES6. Babel is a JavaScript transpiler. Babel turns ES6 code into ES5 code. We call this process transpiling. So we can enjoy the features of ES6 today yet ensure our code still runs in browsers that only support ES5.

Another handy feature of Babel is that it understands JSX. Babel compiles our JSX into vanilla ES5 JS that our browser can then interpret and execute. We just need to instruct the browser that we want to use Babel to compile and run our JavaScript code.

Vanilla e.g.:

```html
<script src="vendor/babel-standalone.js"></script>
<!-- The attribute type="text/babel" indicates to Babel that we would like it to handle the loading of this script. The attribute data-plugins specifies a special Babel plugin we use -->
<script
  type="text/babel"
  data-plugins="transform-class-properties"
  src="./js/app.js"
></script>
```

## Uncontrolled v/s Controlled Components

With React we shouldn’t have to worry about modifying the DOM to match application state. We should concentrate only on altering state and rely on React’s ability to efficiently manipulate the DOM to match. This provides us with the certainty that for any given value of state, we can predict what render() will return and therefore know what our app will look like.

In uncontrolled component, for instance an input - a user chould have typed (or not typed) into the field, the only way to know what the input field looks like is to access it via refs and check its value.

By converting this field to a “controlled component”, we give React control over it. It’s value will always be specified by render() and our application state. When we do this, we can predict how our application will look by examining our state object.

By directly tying our view to our application state we get certain features for very little work. For example, imagine a long form where the user must answer many questions by filling out lots of input fields. If the user is halfway through and accidentally reloads the page that would ordinarily clear out all the fields. If these were controlled components and our application state was persisted to localStorage, we would be able to come back exactly where they left off.

The flow for a controlled component looks like this:

1. The user enters/changes the input.
2. The onChange handler is called with the “change” event.
3. Using event.target.value we update the input element’s value in state.
4. render() is called and the input is updated with the new value in state.

## Testing

JavaScript has a variety of testing libraries that pack a bunch of great features. These libraries help us organize our test suite in a robust, maintainable manner.
An example of testing libraries you may have heard of or worked with are Mocha, Jasmine, QUnit, Chai, and Tape.

Testing libraries as having three major components:

- The test runner. This is what you execute in the command-line. The test runner is responsible for finding your tests, running them, and reporting results back to you in the console.
- A domain-specific language for organizing your tests. As we’ll see, these functions help us perform common tasks like orchestrating setup and teardown before and after tests run.
- An assertion library. The assert functions provided by these libraries help us easily make otherwise complex assertions, like checking equality between JavaScript objects or the presence of certain elements in an array.

### Integration vs Unit Testing

Integration tests are tests where multiple modules or parts of a software system are tested together. For a React app, we can think of each component as an individual module. Therefore, an integration test would involve testing our app as a whole.

Integration tests might go even further. If our React app was communicating with an API server, integration tests could involve communicating with that server as well. Developers often like to call these types of integration tests end-to-end tests.

For React components, we’ll make two kinds of assertions:

1. Given a set of inputs (state & props), assert what a component should output (render).
2. Given a user action, assert how the component behaves. The component might make a state update or call a prop-function passed to it by a parent.

### Shallow rendering

Normally, when a React component renders it first produces its virtual DOM representation. This virtual DOM representation is then used to make updates to an actual DOM.

When a component is shallow rendered, it does not write to a DOM. Instead, it maintains its virtual DOM representation. You can then make assertions against this virtual DOM much like you would an actual one.

**Furthermore, your component is rendered only one level deep (hence “shallow”).** So if the render function of your component contains children, those children won’t actually be rendered. Instead, the virtual DOM representation will just contain references to the un-rendered child components.

React provides a library for shallow rendering React components, react-test-renderer. This library is useful, but is a bit low-level and can be verbose.
Enzyme is a library that wraps react-test-renderer, providing lots of handy functionality that is helpful for writing React component tests.

There are a two primary advantages to shallow rendering:

1. It tests components in isolation: This is preferable for unit tests.
2. It’s faster: With shallow rendering, you avoid the DOM entirely.

### Jest

Facebook created and maintains Jest. For assertions, Jest uses Jasmine’s assertion library.
As of Jest 15, Jest will consider any file that ends with `*.test.js` or `*.spec.js` a test.

In Jest, we use `expect()` statements to make assertions. `toBe` is a matcher, it uses === operator under the hood. `toEqual` is more sophisticated as it can assert two identical objects.

```js
// Sample
describe("My test suite", () => {
  // It’s conventional to title the top-level describe whatever module is currently under test.
  it("`true` should be `true`", () => {
    expect(true).toBe(true);
  });
  it("`false` should be `false`", () => {
    expect(false).toBe(false);
  });
});
```

When writing unit tests, we’ll often find that the module we’re testing depends on other modules in our application. Jest has a powerful way to mock client. We could “inject” this fake Client as opposed to the real one for testing purposes.

```js
// Example
const Client = {
  search: (_, cb) => {
    const result = [
      {
        description: "Hummus",
        kcal: "166",
        protein_g: "8",
        fat_g: "10",
        carbohydrate_g: "14",
      },
    ];
    cb(result);
  },
};
```

### Enzyme

Enzyme was initially developed by Airbnb. Enzyme, through react-test-renderer, allows you to shallow render a component. Instead of using ReactDOM.render() to render a component to a real DOM, you use Enzyme’s shallow() to shallow render it:

```js
const wrapper = Enzyme.shallow(<App />);
```

## Flux and Redux

A common pain point is the tight coupling between user interactions and state changes. For complex web applications, oftentimes a single user interaction can affect many different, discrete parts of the state.
The function in the top-level component that handles a user clicking on an email must describe all of the state changes that occur. This loads a single function with lots of complexity and responsibility.

Facebook was running into this and other architectural problems with their apps. This motivated them to invent Flux.

Flux is a design pattern. The predecessor to Flux at Facebook was another design pattern, Model-View-Controller (MVC).

In MVC, user interactions with the View trigger logic in the Controller. The Controller instructs the Model how to update itself. After the Model updates, the View re-renders.

The Flux design pattern is made up of four parts, organized as a one-way data pipeline:

```
  ..................................
  |                                |
  .                                .
Action -> Dispatcher -> Store -> View
```

The view dispatches actions that describe what happened. The store receives these actions and determines what state changes should occur. After the state updates, the new state is pushed to the View.

**Redux**

All of your application’s data is in a single data structure called the state which is held in the store.
We saw that the store has a single private variable for the state, state.
Your app reads the state from this store.
We use getState() to access the store’s state.
The state is never mutated directly outside the store.
Because state is a private variable, it cannot be mutated outside of the store.
The views emit actions that describe what happened.
We use dispatch() to send these actions to the store.
A new state is created by combining the old state and the action by a function called the reducer.
Inside of dispatch(), our store uses reducer() to get the new state, passing in the current state and the action.

_Reducers functions must be pure functions._

## Q&A

### What are React components?

React components are ES6 classes that extend the class React.Component.

A ReactComponent is a JavaScript object that, at a minimum, has a render() function. render() is expected to return a ReactElement.

_Note: While JavaScript is not a classical language, ES6 introduced a class declaration syntax. ES6 classes are syntactical sugar over JavaScript’s prototype-based inheritance model._

`contains()` matches all the attributes on an element. `containsMatchingElement()` will check if anything in the component’s output looks like the expected element. We don’t have to match attribute-for-attribute.

`find()` is another EnzymeWrapper method. It expects as an argument an Enzyme selector.

```js
// Example
it('should have the `th` "Items"', () => {
  expect(wrapper.contains(<th>Items</th>)).toBe(true);
});
it("should have a `button` element", () => {
  expect(wrapper.containsMatchingElement(<button>Add item</button>)).toBe(true);
});
it("should have an `input` element", () => {
  expect(wrapper.containsMatchingElement(<input />)).toBe(true);
});
it("`button` should be disabled", () => {
  const button = wrapper.find("button").first();
  expect(button.props().disabled).toBe(true);
});
```

### How do you tell React to insert component on page (DOM)?

Using `ReactDOM.render()`. We pass in two arguments to the ReactDOM.render() method. The first argument is what we’d like to render. The second argument is where to render it: `ReactDOM.render([what], [where]);` (e.g. `ReactDOM.render(<App />, document.getElementById('content'));`)
The two things can also be said as:

1. The root of our virtual tree
2. the mount location where we want React write to the actual browser DOM

```js
var boldElement = React.createElement("b");
var mountElement = document.querySelector("#root");
// Render the boldElement in the DOM tree
ReactDOM.render(boldElement, mountElement);
```

### In React, how are native HTML elements cased?

In React, native HTML elements always start with a lowercase letter whereas React component names always start with an uppercase letter.

### What is a Virtual DOM?

The Virtual DOM is a tree of JavaScript objects that represents the actual DOM.
One of the interesting reasons to use the Virtual DOM is the API it gives us. When using the Virtual DOM we code as if we’re recreating the entire DOM on every update.
The Virtual DOM will:

- use efficient diffing algorithms, in order to know what changed
- update subtrees of the DOM simultaneously
- batch updates to the DOM

React’s Virtual DOM is a tree of ReactElements.

### Virtual DOM vs. Shadow DOM, are they the same thing?

No. The Shadow DOM is a form of encapsulation on our elements. Think about using the `<video>` tag in your browser. In a video tag, your browser will create a set of video controls such as a play button, a timecode number, a scrubber progress bar etc. These elements aren’t part of your “regular DOM”, but instead, part of the “Shadow DOM”.
