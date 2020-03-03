# Angular Pointers

## Version Feature Breakdown

**Angular 2**

- 2016
- ES6 + typescript ^1.8
- Component based instead of Controller
- Support for Mobile/Low-end devices

**Angular 3** got skipped to bring versioning of MonoRepo on track with router and others

**Angular 4**

- 2017
- TS ^2.2
- Perf improvement, reduction of size of AOT compiler
- @angular/animation separated from core
- Else block in \*ngIf

  ```
  *ngIf=”yourCondition; else myFalsyTemplate”
  “<ng-template #myFalsyTemplate>Else Html</ng-template>”
  ```

**Angular 5**

- Nov. 2017
- TS ^2.3
- Share app state between server and client easily w/ Angular Universal State Transfer API and DOM Support.
- Preserve white space (remove unnecessary new lines, tabs and white spaces)

  ```
  // in component decorator you can now add:
  “preserveWhitespaces: false”
  // or in tsconfig.json:
  “angularCompilerOptions”: { “preserveWhitespaces”: false}`
  ```

- Increased strandardization
- Multiple names support for both directives and components
- HttpClientModule (deprecation of HttpClient from @angular/HTTP)
- New Router life-cyles: ActivationStart, ActivationEnd, ChildActivationStart, ChildActivationEnd, GuardsCheckStart, GuardsCheckEnd, ResolveStart and ResolveEnd.

**Angular 6**

- April 2018
- RxJS 6 upgrade
- i18n (internationalization) – Without having to build the application once per locale, any Angular application can have “runtime i18n”
- Sync major version number of CLI, framework, & material + cdk
- Registering provider new way. Instead of adding in `app.module.ts` providers, we can:

  ```typescript
  // MyService.ts
  @Injectable({ providedIn: "root" })
  export class MyService {}
  ```

- ngModelChange now gives updated value
- Two new CLI commands:
  - `ng update <package>` analyse package.json and recommend updated to app
  - `ng add` makes adding angular material, pwa, service works and angular elements easier
- CLI + Material starter templates
- `angular.json` instead of `.angular-cli.json` and `angular.json` can add multiple projects
- Renamed operators

  ```
  do() => tap()
  catch() => catchError()
  finally() => finalize()
  switch()=>switchAll()
  throw() => throwError
  ```

**Angular 7**

- October 2018
- TS ^2.9
- New compiler — Compatibility Compiler (ngcc)
- New Pipe — KeyValuePipe
- Virtual scrolling
- Drag and Drop
- Bundle lower and higher limit size
- Improved error handling
- Native Script

**Angular 8**

- March 2019
- TS ^3.4
- IVY Engine
  - Incremental DOM
  - Tree Shaking
  - Low Memory Footprint
- Differential loading: separate bundles for legacy JS (ES5) and modern JS (ES2015+). Correct bundle will be loaded automatically by browser
- Angular Router Backwards Compatibility to facilitate upgrade of Angular 1.x apps to Angular 2+
- Web worker building support `ng g webWorker <name>`
- Bazel Support
- Lazy Loading `{path: 'user', loadChildren: () => import('./users/user.module).then(m => m.UserModule)}`
- CLI workflow improvements - 3rd party libs and tools can extend ng-build, ng-test, etc.
- Angular Firebase deploy support

## Takeaways

- A component(@component) is a directive-with-a-template

## Q&A

1. ng-content ? -> React.children

You use the <ng-content></ng-content> tag as a placeholder for that dynamic content, then when the template is parsed Angular will replace that placeholder tag with your content. Think of it like curly brace interpolation, but on a bigger scale. The technical term for this is “content projection" because you are projecting content from the parent component into the designated child component.

With ng-content the value comes from the component in its execution context.

![](https://miro.medium.com/max/716/1*ohX7XyMKjpjiWSDNZ7adsg.png)

![](https://miro.medium.com/max/730/1*GDBpEj5-tZGPyUNYzGB15w.png)

2. Various features of Angular

=> Creation of accessible applications
=> CLI
=> Animation
=> Desktop, native and PWA. Native mobile app also possible via cordova, Ionic or NativeScript.
=> Code Splitting, Code Generation and templates
=> Testing using Karma

3. Services ?

=> Singleton objects
=> Organize s well as share business logic, models, or data and fuctions with components

4. Advantages and Disadvantages ?

_Advantages_

=> Custom directive
=> Community
=> MVC pattern architecture
=> 2 way data binding
=> dependency injection, RESTful services, and validations

_Disadvantages_

=> Complexity
=> Too Opinionated

5. Authentication and Authorization ?

The user login credentials are passed to an authenticate API, which is present on the server. Post server-side validation of the credentials, a JWT (JSON Web Token) is returned. The JWT has information or attributes regarding the current user. The user is then identified with the given JWT. This is called authentication.

Post logging-in successfully, different users have a different level of access. While some may access everything, access for others might be restricted to only some resources. The level of access is authorization.

6. Observables v/s Promise

As soon as a promise is made, the execution takes place. However, this is not the case with observables because they are lazy. This means that nothing happens until a subscription is made. While promises handle a single event, observable is a stream that allows passing of more than one event. A callback is made for each event in an observable.

7. Types of directives ?

Attribute (ngClass), Structural (\*ngIf) and Custom (Dropdown).

8. Annotation v/s Decorator

=> @Component is annotation and adds metadata that gives a class special meaning.
=> Decorators are a proposed standard for ECMAScript 2016 by Yehuda Katz, to annotate and modify classes and properties at design time.

```typescript
// A simple decorator
@decoratorExpression
class MyClass {}

// logic of decorator depends on us
function decoratorExpression(target) {
  // Add a property on target
  target.annotated = true;
}
```

9. Building blocks of Angular

Components, Data Binding, Dependency Injection, Directives, Metadata, Modules, Routing, Services and Template.

10. Angular Architecture

![](https://hackr.io/blog/uploads/images/1570190912nVsPYyUCFu.jpg)

11. Ahead-of-time (AOT) compilation

The Angular ahead-of-time (AOT) compiler converts your Angular HTML and TypeScript code into efficient JavaScript code during the build phase before the browser downloads and runs that code.

12. Types of data binding

Interpolation - Adds the value of a property from the component
Event Binding – Enables the application to respond to user input in the target environment
Property Binding – Enables interpolation of values computed from application data into the HTML
Two-way Binding – Changes made in the application state gets automatically reflected in the view and vice-versa. The ngModel directive is used for achieving this type of data binding.

13. On which types of the component can we create a custom directive?

Angular provides support to create custom directives for the following:

**Element directives** − Directive activates when a matching element is encountered.
**Attribute** − Directive activates when a matching attribute is encountered.
**CSS** − Directive activates when a matching CSS style is encountered.
**Comment** − Directive activates when a matching comment is encountered

14. What are the lifecycle hooks for components and directives?

**constructor**: It is invoked when a component or directive is created by calling new on the class.
**ngOnChanges**: It is invoked whenever there is a change or update in any of the input properties of the component.
**ngOnInit**: It is invoked every time a given component is initialized. This hook is only once called in its lifetime after the first ngOnChanges.
**ngDoCheck**: It is invoked whenever the change detector of the given component is called. This allows you to implement your own change detection algorithm for the provided component.
**ngOnDestroy**: It is invoked right before the component is destroyed by Angular. You can use this hook in order to unsubscribe observables and detach event handlers for avoiding any kind of memory leaks.

![](https://github.com/sudheerj/angular-interview-questions/raw/master/images/lifecycle.png)

### More Q&As at [https://github.com/sudheerj/angular-interview-questions](https://github.com/sudheerj/angular-interview-questions)
