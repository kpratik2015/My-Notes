# Microfrontend

- [Microfrontend](#microfrontend)
  - [Introduction](#introduction)
  - [Communication](#communication)
  - [Routing](#routing)
  - [Composing micro-frontends](#composing-micro-frontends)
    - [Module Federation](#module-federation)
    - [Web Components](#web-components)
  - [Notes](#notes)
  - [Reference/Resource](#referenceresource)

## Introduction

A microfrontend is a microservice that exists within a browser. Think of the DOM as the shared resource that your microfrontends are owning. One microfrontend's DOM should not be touched by another microfrontend, similar to how one backend microservice's database should not be touched by any microservice except the one that owns/controls it.

A micro-frontend represents a business domain that is autonomous, independently deliverable, and owned by a single team.

## Communication

Each micro-frontend should be unaware of the others on the same page; otherwise, we are breaking the principle of independent deployment.

We can inject an eventbus, a mechanism that allows decoupled components to communicate with each other via events sent via a bus, in each micro-frontend, and notify the event to every micro-frontend.

Another solution is to use custom events. These are normal events but with a custom body, which allows us to define the string that identifies the event and an optional object custom for the event. The custom events should be dispatched via an object available to all the micro-frontends, such as the window object, which is the representation of a window in a browser. If you decide to implement your micro-frontends with iframes, using an eventbus would allow you to avoid challenges like which window object to use from inside the iframe, because each iframe has its own window object.

Other options: Web storage & Query strings

Examples of Event Emitter to use:

1. Observables / Subjects (rxjs) - one microfrontend emits new values to a stream that can be consumed by any other microfrontend. It exports the observable to all microfrontends from its in-browser module, so that others may import it.
2. CustomEvents - browsers have a built-in event emitter system that allows you to fire custom events. Check out [this documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events) for more information. Firing the events with `window.dispatchEvent` allows you to subscribe in any other microfrontend with `window.addEventListener`.
3. Any other pub/sub event emitter system.

## Routing

When you use client-side composition and routing, your best implementation choice is an application shell loading multiple micro-frontends in the same view with the webpack plug-in called Module Federation, with iframes, or with web components, for instance. For the edge-side composition, the only solution available is using edge-side includes (ESI).

When you decide to use server-side composition, you can use server-side includes (SSI) or one of the many SSR frameworks for your micro-frontend applications.

## Composing micro-frontends

4 ways to do it on client-side:

1. **ES modules** - `<script type="module" src="catalogMFE.js"></script>` This module will be always deferred and can implement cross-origin resource sharing (CORS) authentication.
2. **SystemJS** - This module loader supports import maps specifications, which are not natively available inside the browser. This is a handy solution when we want our micro-frontends to load at runtime, because it uses a syntax similar to import maps and allows SystemJS to take care of the browser’s API fragmentation.
3. **Module Federation** - plug-in introduced in webpack 5 used for loading external modules, libraries, or even entire applications inside another one. The plug-in takes care of the undifferentiated heavy lifting needed for composing micro-frontends, wrapping the micro-frontends’ scope and sharing dependencies between different micro-frontends or handling different versions of the same library without runtime errors. Every micro-frontend is imported as a module and then implemented in the same way as a component of a UI framework.
4. **HTML parsing** - When a micro-frontend has an entry point represented by an HTML page, we can use JavaScript for parsing the DOM elements and append the nodes needed inside the application shell’s DOM. This technique is used by some frameworks, such as qiankun, which allows HTML documents to be micro-frontend entry points.

With single SPA you can use ES modules, SystemJS with import maps, or Module Federation. All these techniques allow you to implement static or dynamic routes.

### Module Federation

Module Federation allows chunks of JavaScript code to load synchronously or asynchronously, meaning multiple developers or even teams can work in isolation and take care of the application composition, lazy-loading different JavaScript chunks behind the scenes at runtime.

A Module Federation application is composed of two parts:

1. The host - Represents the container of one or more micro-frontends or libraries loaded.
2. The remote - Represents the micro-frontend or library that will be loaded inside a host at runtime.

Module Federation will wrap the two libraries in different scopes to avoid the clashes that could happen at runtime, or you can even specify the scope for a different version of the same library using Module Federation APIs.

Composition takes place at runtime either on the client side, when we use an application shell for loading different micro-frontends, or on the server side, when we use server-side rendering.

Behind the scenes, Module Federation orchestrates two webpack plug-ins: `ContainerPlugin` and `ContainerReferencePlugin`. The first is responsible for creating a container to asynchronously load and synchronously evaluate a module, while the second is responsible for overriding the container created as placeholder with the remote module and making the code acting as present in the initial bundle.

Module Federation creates many JavaScript chunk files by default, but we may prefer a less chatty implementation for our remote, loading just two or three files. In this case, we could use the `MinChunkSizePlugin` that forces webpack to slice the chunks with a minimum of kilobytes per file. We could also use the `DefinePlugin` to replace variables in your code with other values or expressions at compile time.

Since the application shell is the container for our micro-frontends, it’s the host, to use Module Federation vocabulary. To asynchronously load our dependencies, we have to split the initialization of our application into multiple files. We’ll split the application shell into three main files: index.js, bootstrap.js, and app.js.

The `filename` field (e.g. `filename: "remoteEntry.js"`) is for specifying a remote’s entry point. Within the file specified in this field, we have a map of all the chunks generated by webpack and loaded by Module Federation when a micro-frontend should be rendered in the application shell. The `exposes` field is used to list all the modules we want to expose to a host for integration inside an application.

### Web Components

Web components are a set of web platform APIs that allow you to create custom, reusable, and encapsulated HTML tags for use in web pages and web apps. We can encapsulate our styles inside web components without fear of leaking in the main application.

Web components consist of three main technologies, which can be used together to create custom elements with encapsulated functionality that can be reused wherever you like without fear of code collisions.

1. Custom elements - They are an extension of HTML components. Moreover, we can configure exposed properties to configure our micro-frontends accordingly when needed.
2. Shadow DOM - A set of JavaScript APIs for attaching an encapsulated “shadow” DOM tree to an element, rendered separately from the main DOM.
3. HTML templates - The template and slot elements enable you to write markup templates that are not displayed in the rendered page.

## Notes

- The application shell is always present during users’ sessiHTML templates - The template and slot elements enable you to write markup templates that are not displayed in the rendered page.ons because it’s responsible for orchestrating the web application as well as exposing some life cycle APIs for micro-frontends in order to react when they are fully mounted or unmounted.
- DRY is about the duplication of knowledge, of intent. It’s about expressing the same thing in two different places, possibly in two totally different ways.
- A proposal for adding a ShadowRealm, a sandbox like iframes that is lighter and closer to modern web APIs, is in draft to the TC39.
- iframes are really bad for performance. They are CPU-intensive, especially when multiple iframes are used in the same view.
- We may risk blurring the line between components and micro-frontends, where the former should be open to extension, while the latter should be close to extension but open to communication.
- [OpenComponents](https://oreil.ly/0ETxx) is another micro-frontend framework for server-side horizontal-split architectures.
- By default, Module Federation loads the greatest version of a shared library configured in a project. Therefore, if we have an application shell loading React 18 and a micro-frontend using React 17, React 18 will be loaded unless we specify the version we want to use with the requiredVersion property.
- When the business domain leaks into its container, you have to review whether you are implementing a micro-frontend or a component.

## Reference/Resource

1. [Single-spa](https://single-spa.js.org/)
2. Building Micro-Frontends
3. [Module Federation](https://webpack.js.org/concepts/module-federation/)
4. [Strangler Pattern](https://martinfowler.com/bliki/StranglerFigApplication.html)
5. [Dynamic Remotes](https://github.com/module-federation/module-federation-examples/tree/master/advanced-api/dynamic-remotes)
6. [Fronts](https://github.com/unadlib/fronts)
7. [Thoughtworks](http://thoughtworks.libsyn.com/whats-so-cool-about-micro-frontends)
8. [Medium](https://medium.com/@lucamezzalira/micro-frontends-resources-53b1ec7d512a)
9. [Ara](https://ara-framework.github.io/website/blog/)
10. [YT playlist](https://www.youtube.com/playlist?list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU)
11. [Zack](https://medium.com/swlh/webpack-5-module-federation-a-game-changer-to-javascript-architecture-bcdd30e02669)
12. [Martin Fowler](https://martinfowler.com/)
