# Angular 4 from Scratch

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

## AngularJS vs Angular 2 vs  Angular 4

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

### Singleton: Imagine we have a lot of components and CoursesService provides data to all these components. In memory we will have single instance of CoursesService and angular will pass same instance to all the components.

