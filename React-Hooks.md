# React Hooks

Hooks offer a much cleaner way of sharing code and hooking into functionality than the older methods of higher-order components and render props, which often lead to highly nested code (“wrapper hell”) and false code hierarchies.

Without Concurrent Mode, interactions like keystrokes are blocked by long-running updates.

React can intelligently batch updates together and ignore redundant updates.

When you pass dispatch function down to child and use it in an effect, put it in the dependency list.

We want to display the data for only their last selection. Unfortunately, we’re not in control of when the data returns from the server, and an older request might resolve after a more recent one, leaving the display out of sync with the user’s selection.
We could try to implement a way to cancel in-flight requests. If the data response isn’t too large, however, it’s easier to simply let the requests run their course and ignore the unwanted data when it arrives.

```jsx
useEffect(() => {
  if (bookable) {
    let doUpdate = true;
    setBookings(null);
    setError(false);
    setBooking(null);
    getBookings(bookable.id, week.start, week.end)
      .then((resp) => {
        if (doUpdate) {
          setBookings(transformBookings(resp));
        }
      })
      .catch(setError);
    return () => (doUpdate = false);
  }
}, [week, bookable, setBooking]);
```

When a context provider’s value changes, its consumers re-render. A provider might also re-render as a result of its parent re-rendering.
If the provider’s value is an object that the code creates every time the provider renders, the value changes on each render, even if the property values you assign to the object stay the same.

**Solution**: Create 2 providers

```jsx
import { createContext, useState } from "react";
const UserContext = createContext();
export default UserContext;
export const UserSetContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={user}>
      <UserSetContext.Provider value={setUser}>
        {children}
      </UserSetContext.Provider>
    </UserContext.Provider>
  );
}
```

## Consuming a context value with a custom hook

```jsx
import { createContext, useContext, useState } from "react";
const UserContext = createContext();
const UserSetContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={user}>
      <UserSetContext.Provider value={setUser}>
        {children}
      </UserSetContext.Provider>
    </UserContext.Provider>
  );
}
export function useUser() {
  const user = useContext(UserContext);
  const setUser = useContext(UserSetContext);
  if (!setUser) {
    throw new Error("The UserProvider is missing.");
  }
  return [user, setUser];
}
```

## React Query

React Query is a library for managing server state from your React apps. React Query will provide caching, merging of multiple requests, background fetching to get the latest data, and useful status codes and flags for keeping users informed.

## Footnotes

- default case for reducer:

```jsx
throw new Error(`Unknown action type: ${action.type}`);
```
