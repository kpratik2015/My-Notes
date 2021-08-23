# React State Management Deep Dive

## [Jotai v/s Recoil](https://blog.logrocket.com/jotai-vs-recoil-what-are-the-differences/)

### [Jotai](https://github.com/pmndrs/jotai) (4.6k stars, created Aug. 12, 2020)

- No string keys. So less boilerplate code and use of WeakMap to store key.
- TypeScript oriented
- Made by same team as zustand [How is jotai different from zustand?](https://github.com/pmndrs/jotai/issues/13)
- Has [integration with react-query](https://docs.pmnd.rs/jotai/integrations/query) which can be used to manage server state in app
- Has `v1.0.0` released
- 38 contributors
- 13 Open and 203 Closed issues
- Concurrent mode support is not priority
- Stores state inside the React tree. Uses context under the hood.
- Has rudimental observability through React Dev Tools (if you use atom.debugLabel).
- Simpler API than Recoil
- Doesn't have [memory leak issue](https://github.com/pmndrs/jotai/issues/420#issuecomment-858000164)

### [Recoil](https://github.com/facebookexperimental/recoil) (13.3k stars, created May 5, 2020)

- String keys which works well with React Fast Refresh
- Created by facebook experimental team and currently used in few dozens of their internal projects.
- Production ready but APIs might change so doesn't have `v1.0.0` release.
- Javascript oriented
- 65 contributors
- 129 Open and 473 Closed issues
- Recoil has support for Concurrent Mode since `0.0.11`
- Stores state inside the React tree. Uses context under the hood.
- Has Recoil Dev Tools
- Supports async selectors and has helpers like `waitForAll`, `waitForAny`, `waitForNone`, `noWait`.
