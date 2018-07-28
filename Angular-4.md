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

## Components

Where you'll spend most of your time. They are basic building blocks.

Technically they are classes with component decorator.

We can't communicate with the code defined in component class.

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
