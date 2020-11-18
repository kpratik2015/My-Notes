# Composition

## Composition over Inheritance

[Ref](https://www.youtube.com/watch?v=wfMtDGfHWpA)

Inheritance is when you design your types around what they are. While composition is when you design your types around **what they do**.

Inheritance limitation via example:

```
Robot
  .drive()  <-- RMD
    MurderRobot
      .kill() <-- RMD
    CleaningRobot
      .clean()
Animal
  .poop()  x <-- RMD
    Dog
      .bark() <-- RMD
    Cat
      .meow()
```

Now after having this structure, the manager says we need a Robot Murdering Dog (RMD) which lacks a digestive system. We can't fit it into this inheritance heirarchy.

We got into a Gorilla Banana problem. Where you request a banana but you got a gorilla holding the banana and the entire jungle with it.

Composition to rescue:

```
dog = pooper + barker
cat = pooper + meower
cleaningRobot = driver + cleaner
murderRobot = driver + killer
murderRobotDog = driver + killer + barker
```

Implementing it with JS:

```js
const barker = (start) => ({
  bark: () => console.log("Woof, I am " + state.name),
});

const driver = (state) => ({
  drive: () => (state.position = state.position + state.speed),
});

barker({ name: "karo" }).bark();
// Woof, I am karo
```

They're factory functions. They accept state as function parameter. This is so that they can share the same state.

```js
const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0,
  };
  return Object.assign({}, barker(state), driver(state), killer(state));
};

murderRobotDog("sniffles").bark();
// 'Woof, I am sniffles'
```

When to use composition and when to use inheritance? Favor composition.

Lot of people suggest if something is an **IS-A** relationship then use inheritance. If something has an **HAS-A** relationship then use composition e.g. Car has an engine.

But it's pretty ambiguous. Like Car has an engine but it is a vehicle.

Problem with inheritance is that it insists you to go predicting the future. It encourages you to build a taxonomy of objects very early on in the project. But you'll likely make lot of design mistakes while doing that.

It means that code reuse should be achieved by assembling smaller units of functionality into new objects instead of inheriting from classes and creating object taxonomies.

In other words, use **can-do**, **has-a**, or **uses-a** relationships instead of **is-a** relationships.

## Factory Functions

In JS you don't have to do classes. In Java or C# you have to use objects i.e. way of instantiating classes. Factory function simply allow you to create object and return it.

```js
// example
const dog = () => {
  const sound = 'woof';
  return {
    talk: () => console.log(sound);
  }
}
const sniffles = dog()
sniffles.talk()
// no reference lost i.e. with 'this'
// $('button.myButton').click(sniffles.talk) <= works
```
