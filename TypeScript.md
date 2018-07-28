# TypeScript (for Angular)

## Benefits of TypeScript

Strong typing i.e. type of a variable specification is optional but better to do

Object-oriented features

Compile-time errors i.e. many errors can be caught in development itself

Great tooling 

## Setup 

```
npm install -g typescript

tsc --version
```

## First program

Create main.ts

You can put javascript code inside and it will work.
E.g.

```
function log(message) { console.log(message); }

var message = 'Hello World';

log(message)

```

If we put above code in main.ts, we need to transpile (compile) the code

```
tsc main.ts
```

The transpilation in angular happens under the hood 

Now a main.js will be created.

You can execute the code by using terminal command:

```
node main.js
```

