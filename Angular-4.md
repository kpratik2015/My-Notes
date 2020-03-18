# Angular 4 from Scratch

- [Angular 4 from Scratch](#angular-4-from-scratch)
  - [Why Angular ?](#why-angular-)
  - [Architecture of Angular Apps](#architecture-of-angular-apps)
    - [Front-End](#front-end)
    - [Back-End](#back-end)
    - [HTTP Services/APIs](#http-servicesapis)
  - [Angular CLI](#angular-cli)
  - [Code Editor](#code-editor)
  - [Setup](#setup)
  - [Project Structure](#project-structure)
    - [e2e](#e2e)
    - [node_modules](#node_modules)
    - [src](#src)
  - [Webpack](#webpack)
    - [It is called Hot Module Reloading](#it-is-called-hot-module-reloading)
  - [AngularJS vs Angular 2 vs Angular 4](#angularjs-vs-angular-2-vs-angular-4)
  - [Components](#components)
    - [Steps for components](#steps-for-components)
    - [Naming convetion](#naming-convetion)
    - [Registering Component](#registering-component)
    - [Generating a Component](#generating-a-component)
  - [Template Basics](#template-basics)
    - [Inline](#inline)
    - [Interpolation, ngFor and ngIf](#interpolation-ngfor-and-ngif)
  - [Services](#services)
    - [Naming convention](#naming-convention)
    - [Dependency Injection](#dependency-injection)
      - [Singleton: Imagine we have a lot of components and CoursesService provides data to all these components. In memory we will have single instance of CoursesService and angular will pass same instance to all the components.](#singleton-imagine-we-have-a-lot-of-components-and-coursesservice-provides-data-to-all-these-components-in-memory-we-will-have-single-instance-of-coursesservice-and-angular-will-pass-same-instance-to-all-the-components)
    - [Generating Services using Angular CLI](#generating-services-using-angular-cli)
      - [Note: spec files are used for testing.](#note-spec-files-are-used-for-testing)
  - [Property Binding](#property-binding)
  - [Adding bootstrap](#adding-bootstrap)
  - [Class binding](#class-binding)
  - [Style binding](#style-binding)
  - [Event binding](#event-binding)
  - [Event filtering and template variables](#event-filtering-and-template-variables)
  - [Two way binding](#two-way-binding)
  - [Pipes](#pipes)
  - [Custom Pipes](#custom-pipes)
  - [Shadow DOM](#shadow-dom)

## Why Angular ?

- Gives our applications clean structure
- Easier to maintain than vanilla javascript
- Includes a lot of re-usable code like navigation
- Makes our applications more testable
- Using Angular makes life easier

## Architecture of Angular Apps

### Front-End

HTML, CSS, TypeScript, Angular

HTML Templates, Presentation Logic

### Back-End

Data + APIs

Business Logic

### HTTP Services/APIs

Endpoints that are accessible via the HTTP Protocol

## Angular CLI

It is a library that helps create new angular project with some boiler plate code. It also helps deployable package.

## Code Editor

Visual Studio Code Editor

## Setup

Download [Nodejs](https://nodejs.org/en/download/) which has npm package.

After installing check in cmd with command: node -v

As of today states: v8.11.3

Then run some commands: (Before running check if you have installed by running: ng -v)

_Note: -g is for global. That is, you have to only run it once and not everytime you start a project_

```
cd to code folder.

ng new project-name

cd project-name

ng -v
```

_Now ng -v provides versions of all the things angular installed_

Now make sure you have typescript installed > v2.16. If not, do the following:

```
npm install typescript@2.7.2 --save

ng - v

ng serve --open

```

## Project Structure

### e2e

End to end tests for application. Automated tests to simulate real user.

### node_modules

third party libraries the app may depend upon. This is for development.

### src

This is where we have actual source code of our app.

assets folder stores images or icon or stuff

environments folder stores configuration settings for different environment

index.html contains our angular application. The css n js will be dynamically inserted

main.ts is the starting point. Bootstrapping Main module of our app.

polyfills.ts have some parts of javascripts that are needed by angular

styles.css has global styles of our app

test.ts is used for setting up testing environment

.editorconfig when in team envinronment all team should use same settings

karma.conf.js is test runner for js files

package.json has settings like name and version. It contains dependencies. You can delete whatever u dnt need

Devdependencies are for development environment only. Not for production.

tsconfig.js has type of settings for typescript compiler

tslint is a static analysis for typescript code.

## Webpack

Angular CLI uses webpack to combine our scripts, stylesheets and other stuff into bundles and minifies the bunbles

main.bundle.js has all our core code

styles.bundle.js has styles stored in javascript bundle

vendor.bundle.js has 3rd party code

Whenever you modify a file, webpack recompiles the bundle and displays the output.

### It is called Hot Module Reloading

## AngularJS vs Angular 2 vs Angular 4

AngularJS was introduced in 2010. The framework was not designed keeping the current frameworks in mind. So they redesigned it to Angular 2 in 2016.

Angular 4 came out after Angular 2.3. Angular 4 was not a new framework, it wasn't a major upgrade.

Angular libraries:

- core
- compiler
- http
- router

## Components

The component encapsulates the data, html template and logic for the view. Allows re-usability.

Parent component is App Component.

Module is group of similar components.

Where you'll spend most of your time. They are basic building blocks.

Technically they are classes with component decorator.

We can't communicate with the code defined in component class.

### Steps for components

- Create a component
- Register it in a module
- Add an element in an HTML markup

### Naming convetion

For suppose a course form named component:

```
course-form.component.ts
```

Inside a courses.component.ts, the class name would be like:

```
import { Component } from '@angular/core';

@Component({
  selector: 'courses', // for <div class="courses"> we put '.courses'
  template: '<h1>Hello</h1>'
})

export class CoursesComponent {

}
```

### Registering Component

In app.module.ts, @NgModule converts a plain typescript class into an angular module.

```
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
  AppComponent,
  CoursesComponent
  ],
  // ...
})
```

Opening: \components101\src\app\app.component.ts

You'll find 3 sections:

- import statement is input. You can import services
- component decorator @component. We're using component from above class. There is app-root in index.html.
- AppComponent defines events that occur in the template through data binding.

```
ng g component my-new-component
```

Above command generates 4 files.
_g is shorthand for generate. spec.ts file is used for unit testing_
Other area affected is app.module.ts.

Going to components101\src\app\my-new-component\my-new-component.component.ts

Copy selector and go to app.component.html to add following:

```
<app-my-new-component></app-my-new-component>
```

Go back to console and type

```
ng serve
```

Then you can go to [localhost:4200](http://localhost:4200/)

### Generating a Component

In visual studio, press Ctrl + \` to bring up terminal.

```
ng g c component-name
```

## Template Basics

- Inline and External Templating
- Interpolation
- ngFor
- ngIf, Else and Then

### Inline

```
...
@Component({
  selector: 'app-root',
  template: `
  <h1>Hey</h1>`,
...

```

### Interpolation, ngFor and ngIf

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hey {{ myObject.location }}</h1>

  <ul>
    <li *ngFor = "let arr of myArr"> {{ arr }} </li>
  </ul>

  <ol>
    <li *ngIf="myArr"> Yeah I exist </li>
    <li *ngIf="!myArr"> Yeah I don't exist </li>
    <li *ngIf="myArr == 'something'"> It does not equal so won't show </li>
    <li *ngIf="!myArr; else otherTmpl"> It does not equal so won't show </li>

    <ng-template #otherTmpl> No, I do. </ng-template>

    <div *ngIf="myArr; then templ1 else templ2">Will not get shown here so don't insert anything </div>

    <ng-template #templ1> <p>Template 1</p> </ng-template>
    <ng-template #templ2> <p>Template 2</p> </ng-template>

  </ol>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components101'
  myObject = {
    gender: 'male',
    age: 22,
    location: 'Pune'
  }
  myArr = ['Hello','World','Wassup','?']
  ;
}

```

## Services

Most of the time in real world application we get data from servers. When we want to unit test a component we do not want to be dependent on a live HTTP endpoint, because it will make it harder to execute the tests.
So we create a fake http endpoint.

### Naming convention

courses.service.ts

```
// No decorator
export class CoursesService {
  getCourses() {
    return ["c1", "c2"];
  }
}
```

So the service provides data to component. We can decouple logic.

_Using service_

courses.component.ts

```
// ...
export class CoursesComponent {
  title = "List of courses";
  courses;

  constructor(service: CoursesService) { // angular will now create the service depending on constructor of service
    // let service = new CoursesService(); // this will tightly couple courses component to courses service
    this.courses = service.getCourses();
  }
}
// ...
```

### Dependency Injection

We need to instruct angular to create an instance of CoursesService and pass it to CoursesComponent. This concept is dependency injection.

app.module.ts

```
// ...
providers: [CoursesService]
// ...
```

#### Singleton: Imagine we have a lot of components and CoursesService provides data to all these components. In memory we will have single instance of CoursesService and angular will pass same instance to all the components.

### Generating Services using Angular CLI

```
ng g s service-name
```

#### Note: spec files are used for testing.

@Injectable is only used when you have dependencies in your constructor
E.g.

```
@Injectable()
export class EmailService {
  constructor(logService: logService) { }
}
```

## Property Binding

We bind a dom element like src with the property in our class..

courses.component.ts

```
// ...
template: `
<img [src]="imageUrl" />
`
// ...
```

Note: most of the time Dom property and html tag has one to one mapping. But in some cases the name different
e.g. colspan in html is attr.colspan for dom (to write in square bracket)

```
<table>
  <tr>
    <td [attr.colspan]="colSpanField"></td>
  </tr>
</table>
```

## Adding bootstrap

```
npm install bootstrap --save
```

--save adds it to package.json

Benefit of adding in package.json is that all the dependencies are listed. This will allow someone checking source folder to execute below command and download the dependencies:

```
npm install
```

This allows us to ignore node_modules folder for version control.

In styles.css

```
@import "~bootstrap/dist/css/bootstrap.css";
```

Now we can use bootstrap in templates.

## Class binding

If the field evaluates to be true then the class will be added.

courses.component.ts

```
// ...
template:  `
  <button class="btn btn-primary" [class.active]="isActive"> </button>
`
// ...
export class CoursesComponent {
  isActive = true;
}
```

## Style binding

[All style object properties](https://www.w3schools.com/jsref/dom_obj_style.asp)

```
<button [style.backgroundColor]="isActive > 'blue' : 'white'"> </button>
```

## Event binding

\$event is known to angular. It represents a standard dom event that is seen in JS.

```
// ...
<button (click)="onSave($event)">Save</button>
// ...

export class CoursesComponent {
  onSave($event) {
    console.log("Button was clicked", $event);
    }
}
```

_Note: To stop 'event bubbling', we add \$event.stopPropagation()_

## Event filtering and template variables

email is variable name. It is template variable.

```
// ...
<input #email (keyup.enter)="onKeyUp(email.value)" />
// ...
export class CoursesComponent {
  onKeyUp(email) {
    console.log(email);
  }
}
```

## Two way binding

ngModel is added to DOM object. It's a directive. Note the [()] for two way binding.

```
// ...
<input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
// ...
export class CoursesComponent {
  email = "me@example.com";
  onKeyUp() {
    console.log(this.email);
  }
}
```

app.module.ts

```
import { FormsModule } from '@angular/forms';
// ...
imports: [
  BrowserModule,
  FormsModule
]
// ...
```

## Pipes

Built-in:

- Uppercase
- Lowercase
- Decimal
- Currency
- Percent

```
// ...
{{ course.students | number }}
{{ course.rating | number: '1.2-2' }} // rounding 1 digit before decimal and round upto 2 after decimal
{{ course.price | currency: 'AUD' : true : '3.2-2' }} // currency can take multiple. True is for symbol
{{ course.releaseDate | date:'shortDate' }}
// ...
```

[All date formats](https://angular.io/api/common/DatePipe)

## Custom Pipes

summary.pipe.ts

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})

export class SumarryPipe implements PipeTransform {
  transform(value: string, args?: any) {
    if(!value) return null;

    return value.substr(0, 50) + '...';
  }
}
```

app.module.ts

```
delcarations: [ SummaryPipe ]
```

## Shadow DOM

Allows us to apply scoped styles to elements without bleeding out to outer world.

Only new browsers support this.

```
var el = document.querySelector('favorite')
var root = el.createShadowRoot(); // this will restrict styling in block of code
root.innerHTML = `
  <style> h1 { color: red; }</style>
  <h1> Hello </h1>
`
```
