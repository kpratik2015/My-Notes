# Angular Pointers

- [Angular Pointers](#angular-pointers)
  - [Version Feature Breakdown](#version-feature-breakdown)
  - [Takeaways](#takeaways)
  - [Q&A](#qa)
    - [More Q&As at https://github.com/sudheerj/angular-interview-questions](#more-qas-at-httpsgithubcomsudheerjangular-interview-questions)

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
- HTTP API known as HttpClient which is based on top of XMLHttpRequest interface

  ```typescript
  @NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule. Order matters.
    HttpClientModule,
  ],
  ......
  })
  export class AppModule {}
  ```

- Error handling in subscribe: `.subscribe((data) => {}, error => {})`
- RxJS is a library for composing asynchronous and callback-based code in a functional, reactive style using Observables.
- Observer is an interface for a consumer of push-based notifications

  ```typescript
  interface Observer<T> {
    closed?: boolean;
    next: (value: T) => void;
    error: (err: any) => void;
    complete: () => void;
  }
  ```

- RxJs Subjects: A subject is a kind of advanced observable that returns values to more than one observer, which allows it to act as a kind of event emitter. OR A Subject is a special type of Observable which shares a single execution path among observers.

- Short hand notation of subscribe

  ```typescript
  myObservable.subscribe(
    x => console.log("Observer got a next value: " + x),
    err => console.error("Observer got an error: " + err),
    () => console.log("Observer got a complete notification")
  );
  ```

- Whenever we create an [Angular Element](https://blog.angulartraining.com/tutorial-how-to-create-custom-angular-elements-55aea29d80c5), we create a new custom HTML element that can be used on any webpage, even if that webpage does not use Angular at all

- Custom elements (or Web Components) are a Web Platform feature which extends HTML by allowing you to define a tag whose content is created and controlled by JavaScript code.

  ![](https://miro.medium.com/max/1802/1*m911WG6xC1eExLFZkutIDA.png)

  _Note: replace target value in tsconfig.json from es5 to es2015 as in browsers that support Custom Elements natively_

- When a component is not a part of any other component and is also not a root of Angular application, we need to put it in `entryComponents` so that it does not get dropped in tree shaking proccess.

- The Angular `<ng-container>` is a grouping element that doesn't interfere with styles or layout because Angular doesn't put it in the DOM.

  ![](https://miro.medium.com/max/1230/1*j-TJRTA11OrLKdLrmrjQjA.png)

- `*ngTemplateOutlet` used for two scenarios — to insert a common template in various sections of a view irrespective of loops or condition and to make a highly configured component

  ![](https://miro.medium.com/max/1918/1*M2mxgv1g3VcftdHOFFmTdw.png)

- Typings for custom elements `const container = document.createElement('my-container') as NgElement & WithProperties<{message: string}>;`

- JIT v/s AOT: Just-in-Time (JIT) is a type of compilation that compiles your app in the browser at runtime (dev environment) and Ahead-of-Time (AOT) is a type of compilation that compiles your app at build time (prod environment).

- Enable binding expression validation: `"angularCompilerOptions": {"fullTemplateTypeCheck": true, ... }`

- You can disable binding expression type checking using \$any() type cast function(by surrounding the expression). `template: '{{$any(this).contacts.email}}'`

- Non null type assertion operator: `{{contact!.email}}` i.e. to tell TypeScript that the variable 'contact' cannot be null, we can use ! operator

- Codelyzer provides set of tslint rules for static code analysis of Angular TypeScript projects. `ng new codelyzer && ng lint`

- Angular animations require adding animations: [] metadata in @Component

- Using DomSanitizer we can inject the dynamic Html,Style,Script,Url

- Angular Language Service - get completions, errors, hints, and navigation inside your Angular templates

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

**Components** — These are directives with a template.
**Structural directives** — These directives change the DOM layout by adding and removing DOM elements.
**Attribute directives** — These directives change the appearance or behavior of an element, component, or another directive.

Create directive by `ng generate directive <name>`

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

15. What is router outlet?

The RouterOutlet is a directive from the router library and it acts as a placeholder that marks the spot in the template where the router should display the components for that outlet. Router outlet is used like a component,

16. What is Angular Universal?

Angular Universal is a server-side rendering module for Angular applications in various scenarios. This is a community driven project and available under @angular/platform-server package. Recently Angular Universal is integrated with Angular CLI.

17. What is folding?

The compiler can only resolve references to exported symbols in the metadata. Folding is a process in which the collector evaluate an expression during collection and record the result in the .metadata.json instead of the original expression. Compiler can't fold spread operator on arrays, objects created using new keywords and function calls.

18. What are macros?

The AOT compiler supports macros in the form of functions or static methods that return an expression in a single return expression.

```typescript
// Example
export function wrapInArray<T>(value: T): T[] {
  return [value];
}

// Usage
@NgModule({
  declarations: wrapInArray(TypicalComponent)
})
export class TypicalModule {}
```

19. What is zone?

A Zone is an execution context that persists across async tasks. Angular relies on zone.js to run Angular's change detection processes when native JavaScript operations raise events

20. What is State function?

Angular's state() function is used to define different states to call at the end of each transition.

```typescript
state(
  "open",
  style({
    height: "300px",
    opacity: 0.5,
    backgroundColor: "blue"
  })
);
```

21. What are the case types in Angular?

Angular uses capitalization conventions to distinguish the names of various types. Angular follows the list of the below case types.

- **camelCase** : Symbols, properties, methods, pipe names, non-component directive selectors, constants uses lowercase on the first letter of the item. For example, "selectedUser"
- **UpperCamelCase (or PascalCase)**: Class names, including classes that define components, interfaces, NgModules, directives, and pipes uses uppercase on the first letter of the item.
- **dash-case (or "kebab-case")**: The descriptive part of file names, component selectors uses dashes between the words. For example, "app-user-list".
- **UPPER_UNDERSCORE_CASE**: All constants uses capital letters connected with underscores. For example, "NUMBER_OF_USERS".

22. What are the class decorators in Angular?

@Component(), @Directive(), @Pipe(), @Injectable(), @NgModule()

23. What are class field decorators?

@Input, @Output

24. How do you select an element with in a component template?

You can use @ViewChild directive to access elements in the view directly. Let's take input element with a reference,

```typescript
<input #uname>
```

and define view child directive and access it in ngAfterViewInit lifecycle hook

```typescript
@ViewChild('uname') input;

ngAfterViewInit() {
  console.log(this.input.nativeElement.value);
}
```

25. How do you detect route change in Angular?

`this.router.events.subscribe((event: Event) => {})`

26. What is the purpose of innerHTML?

The innerHtml is a property of HTML-Elements, which allows you to set it's html-content programatically. Let's display the below html code snippet in a
tag as below using innerHTML binding, `<div [innerHTML]="htmlSnippet"></div>`
and define the htmlSnippet property from any component

```typescript
export class myComponent {
  htmlSnippet: string = "<b>Hello World</b>, Angular";
}
```

27. What is safe navigation operator?

The safe navigation operator(?)(or known as Elvis Operator) is used to guard against null and undefined values in property paths when you are not aware whether a path exists or not. i.e. It returns value of the object path if it exists, else it returns the null value.

### More Q&As at [https://github.com/sudheerj/angular-interview-questions](https://github.com/sudheerj/angular-interview-questions)
