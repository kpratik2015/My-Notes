# Design Patterns

## Object Oriented Review

**Class** - A class is a template for creating objects that provides properties for state and methods for behavior.

**Abstract Class** - An abstract class includes one or more methods that must be implemented by concrete subclasses. It has an abstract method and cannot be instantiated directly. So you must subclass it and then instantiate that class. It's similar to interface. _Class Name/Method Name is in italics_

**Interface** - It contains no implementation. They allow classes to formally declare the behvaior they are going to provide. Note that interfaces don't specify properties, only methods. So they specify how classes that implement that interface are going to behave. Interfaces define the methods a class must have in order to be a particular type.

**Composition** (HAS A) - We can also associate classes through composition. E.g. Animal HAS-A Owner. **Aggregation** is similar in which the owner can exist without the animal. For composition, suppose there are body parts as referenced classes and body as referencee - then if body goes away, the parts go away.

Abstract v/s Interface - abstract is traditional inheritance where you're extending a class and you must implement the methods that are abstract in super class. And you can only extend one class in a language like Java.
You cannot create instance of interfaces. But for abstract class you can create via its subclasses.

## SimUDuck

Initial Design:

```
_Duck_ = {
  quack(),
  swim(),
  _display()_
}

MallardDuck = {
  display()
}

RedheadDuck = {
  display()
}

// Note: Underscore wrapped names means interface/abstract i.e. not concrete implementation
```

New Requirement: Make ducks fly. Add `fly()` in _Duck_ ? Then RubberDucks will be able to fly.

New Requirement: Decoy duck that doesn't quack.

Disadvantage of continuing to override methods from super class that don't work for the subclasses:

- Code is duplicated across sublcasses.
- Runtime behavior changes are difficult. Like a baby duck is able to fly after a certain age.
- Hard to gain knowledge of all duck behaviors. Need to look at all duck implementations.
- Changes can unintentionally affect other ducks.

Solution: Use an interface

Flyable and Quackable interfaces as they are optional.

Problem: Duplication and Complication. Those subclasses that implement flyable interface will have to right same code for fly. We gained flexibility but we lost code reuse.

**What to Do?**

Not all subclasses should have flying or quacking behaviour that's the same as superclass, so inheritance isn't the answer.
And having interface solution destroys code reuse. Either way we have a maintenance nightmare.

Someone has gone down this road and solved this problem for you. They've even documented the solution and that's a design pattern.

## Design Principles

- A design principle is a general guideline that helps us avoid bad OOP designs.
- Typically, design principles address some aspect of keeping your designs flexible, resilient, and/or reusable.
- There are many principles, some deemed more important than others by various OOP practitioners.

**OO Basics**

- Abstraction
- Encapsulation
- Polymorphism
- Inheritance

**OO Principles**

- Encapsulate what varies - SimUDuck
- Favor composition over inheritance - SimUDuck. Delegating behaviors.
- Program to interfaces, not implementations - keeping code general and keeping references based on abstraction. Not a lot of reference to concrete classes.
- Strive for loosely coupled designs between objects that interact - not allowing classes to get dependent on each other
- Classes should be open for extension but closed for modification
- Depend on abstractions. Do not depend on concrete classes. - dependency inversion principle. High level components should not depend on low level components or vice-a-versa. Create an abstraction layer in between them.
- Talk only to your friends - visibility/points of interaction.
- Don't call us, we'll call you - hollywood principle. Keeping objects from getting too interdependent.
- A class should have only one reason to change - single responsibility principle. Cohesion. Every time you give a class a responsibility then in future it becomes an area of potential change.

**Identify the aspects of your application that vary and separate them from what stays the same**. Patterns are inspired by one or more of these principles.

Separating what changes: Flying and Quacking can be extracted in their own interfaces.

```
_FlyBehavior_ = {
  fly()
}

_QuackBehavior_ = {
  quack()
}
```

Implement some concrete bhevaiors for the fly and quack behavior interfaces. E.g. FlyWithWings, FlyNoWay, Quack, Squeak, MuteQuack.

**HAS-A is better than IS-A** - Favor composition over inheritance. With this when we put 2 classes together with composition, instead of inheriting the behavior, objects can then begin to delegate their behaviors to composed objects.

Benefits so far:

- All duck behaviors are in one place i.e. no code duplication
- Any duck can be assigned any of the methods of flying i.e. flexibility
- Easy to add new behaviors
- Easy to add new ducks
- Can change behavior at any time

### Meet the Strategy Pattern

It defines a family of algorithms encapsulating each one and makes them interchangeable. Strategy lets the algorithm vary independently from the clients that use it. Strategy and behaviors are interchangeably used.

Strategy lets the algorithm vary independently from the clients that use it.

```java
public abstract class Duck {
  FlyBehavior flyBehavior;
  QuackBehavior quackBehavior;
  abstract void display();

  public Duck() { }
  public void setFlyBehavior(FlyBehavior fb) {
    flyBehavior = fb;
  }
  public void setQuackBehavior(QuackBehavior qb) {
    quackBehavior = qb;
  }
  public void performFly() {
    flyBehavior.fly(); // call fly behavior composed with the duck. This is called as delegation
  }
  public void performQuack() {
    quackBehavior.quack();
  }
  public void swim() {
    // all quacks float
  }
}

// Fly Behaviors

public interface FlyBehavior {
  public void fly();
}

public class FlyWithWings implements FlyBehavior { // Concrete class
  public void fly() {
    // ..
  }
}

public class FlyNoWay implements FlyBehavior { // Concrete class
  public void fly() {
    // .. Can't fly
  }
}
```

## Big Picture

Christopher Alexander (He's an Architect - not computer): Each pattern describes a problem which occurs over and over again in our environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, without ever doing it the same way twice.

Eventually Gang of Four conceptualized these patterns to software in their first book - Elements of Reusable Object-Oriented Software

### Pattern Categories (Based on purpose)

- Creational: Most used. Object instantiation. Decouple clients from objects that need to instantiate.
- Structural: Compose classes and objects into larger structures. Strategy falls here.
- Behavioral: How objects and classes interact and distribute responsibilities.

Client: The thing that is using the part of the pattern which is the main thing of pattern. Clients interface with the strategy in a certain Context.

Context: A thing through which concrete implementations interface. Abstract superclass or interface.

## Adapter Pattern

Your Existing System (Client) --> Adapter --> Vendor Class

**Intent** - Convert the interface of a class into another interface clients (whoever is using the interface) expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

**Client** -- request() --> **Adapter** -- translateRequest() --> **Adaptee** (interface)

## Facade Pattern (Close cousin of Adapter Pattern)

Provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level itnerface that makes the subsystem easier to use.

Client --> Facade -- calls to --> Complex susbsystem

So for example a customer would be able to call one method that stiches several method calls for a common behavior. Client calls a method on facade and then facade decides which methods to call on which classes.

The similarity with adapter is that you have an interface sitting between client and something else. Adapter sits in between to offer an interface with a method client expects for a system that does not have that. In both cases, delegation is present.

## SOLID Principles

- *S*ingle Responsibility Principle: have classes focused on one thing only.
- *O*pen/Closed Principle: minimize changes to existing code but allow extensions.
- *L*iskov Substitution Principle: should be able to replace a super typed class with any of its sub types and the program will still be correct. So if you subclass a class, don't make it a special case - if you have to do that then there's something wrong. So like if a rubber duck can't call fly method from duck then its breaking the principle. So we essentially have a no-op in place for rubber duck.
- *I*nterface Segregation Principle: a class should not be forced to depend on methods it does not use. So its better to have a class implement several small interface than a big one.
- *D*ependency Inversion Principle: depend on abstractions and not concrete classes.

## Decorating Objects

```
_Beverage_ = {
  description,
  getDescription(),
  _cost()_
}

HouseBlend = {
  cost()
}
```

Above violates: Open and Closed principle, favor composition over inheritance and loosely coupled.

What about this approach?

```
_Beverage_ = {
  description,
  milk,
  soy,
  mocha,
  whip,

  getDescription(),
  cost(),
  hasMilk(),
  setMilk(),
  hasSoy(),
  setSoy(),
  hasMocha(),
  setMocha(),
  hasWhip(),
  setWhip()
  // ..
}

HouseBlend = {
  cost() // overriding cost in Beverage
}
```

Above implementation could cause problems like:

- Price changes will force us to alter existing code
- New condiments will require new methods and alter the cost method in the superclass
- New beverages like iced tea will be forced to inherit methods that don't make sense
- What if a customer wants a double mocha?

**Decorator Pattern**

**Intent** - Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

Add decorator for adding responsibility to individual objects.

```
_Beverage_ = {
  description,
  getDescription(),
  _cost()_
}

DarkRoast = { cost() } // concrete class that implements Beverage but does not use decorator.

_CondimentDecorator_ = { // implements Beverage
  Beverage beverage, // composition piece i.e. composed with beverage
  _getDescription()_
}

Milk = { // concrete class that uses Decorator
  cost(),
  getDescription()
}
```

**Streams** in Java uses Decorator Pattern. LineNumberInputStream(BufferedInputStream(FileInputStream)) visually.

## Surrogate Objects/Proxy Pattern

**Intent** - Provide a surrogate or placeholder for another object to control access to it.

```
_Subject_ = {
  _request()_
}

RealSubject = { // implements Subject
  request()
}

Proxy = { // has-a real subject
  request()
}
```

E.g. Using proxy to load images.

```
_Icon_ = {
  _getIconWidth()_,
  _getIconHeight()_,
  _paintIcon()_
}

ImageIcon = {
  getIconWidth(),
  getIconHeight(),
  paintIcon()
}

ImageProxy = { // has-a ImageIcon
  getIconWidth(),
  getIconHeight(),
  paintIcon()
}
```

**Types of proxies**

- A virtual proxy controls access to a resource that is expensive to create.
- Remote proxy controls access to a remote object.
- A protection proxy controls access to a resource based on access rights.

Relates to:

- Decorator pattern: Uses inheritance and has composition
- Adapter pattern: Sits in between real thing and client
- Facade pattern

Design Patterns often have similarities. A design pattern is a general solution to a common problem in a context. Each pattern has a different intent. And each design pattern uses the same set of basic OO techniques (and guiding principles) to solve problems.

## Observer Pattern/Staying loosely coupled

We've an object with an important value and many objects that need to know the important value.

Hollywood Principle - Don't call us. We'll call you.

Using the observer pattern:

- You subscribe to a news publisher.
- Whenever there's a new edition of the news (or a new blog post), you get it.
- If you don't want to get the paper (or the posts) anymore, you unsubscribe.
- Other subscribers continue to get the news

**Intent** - Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

Most used in event handling

## Iterator Pattern/Encapsulating Iteration

Suppose 2 dinners implemented their own menu and one used `MenuItem[] menuItem` i.e. an Array and other used `ArrayList<MenuItem> menuItems` i.e. a dynamic array. Both have different way of iterating over them and getting size. 2 types of aggregate data structure. Different menus can have different data structures. The waitress who uses these menu will get complex over time.

Problems:

- Duplicate code i.e. a loop for each menu
- Waitress has to know how each menu type is implemented
- We're coding to concrete implementations, if we ever want to replace the data structure we have a lot of coding to do (we're not closed for modification)
- Waitress has dual responsibilities.

We want to encapsulate what varies - here the iteration is varying.

**Intent** - Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

```java
Iterator iterator = breakfastMenu.createIterator();
while (iterator.hasNext()) {
  MenuItem menuItem = iterator.next();
}
```

## Composite Pattern/Treating objects uniformly

**Intent** - Composite objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

Similar to:

- Decorator: We're using IS-A relation. We're using composition to group things.

A good example is Document Object Model (DOM) in Web.

## Encapsulation Invocation/Command

**Intent** - Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

A replacement for callbacks.

Scenario: A customer gives waitress an order. The waitress takes the order, places it on the order counter, and says "Order Up". The Short Order Cook prepares the order.

i/p: orderUp()
o/p: makeBurger(), makeShake()

So waitress has an orderUp method and that's all she knows. The orderUp has everything that is needed for order to turn up. During the day she will get orders through takeOrder() and it will be parameterized by different kind of orders.

The Short order cook has all the knowledge to make things. It implements all the makeBurger and such methods.

Are waitress and short order cook decoupled ? Yes. They're connected by order but responsibilities are different. The cook/waitress can change as long as there is a common order interface.

Customer -> Client
Invoker -> Waitress (createCommand(), setCommand())
Receiver -> Cook (action1(), action2() ...)
Command -> Order

```java
public class Diner {
  public static void main(String[] args) {
    Cook cook = new Cook();
    Waitress waitress = new Waitress();
    Customer customer = new Customer(waitress);
    customer.createOrder(new BurgerAndFriesOrder(cook)); // here the customer is saying we want x cook to create this order. Not exactly fitting in diner logic
    customer.hungry();
  }
}

public interface Order { // Command interface
  public void orderUp();
}

public class BurderAndFriesOrder implements Order {
  Cook cook;
  public BurgerAndFriesOrder(Cook cook) {
    this.cook = cook;
  }
  public void orderUp() {
    cook.makeBurger();
    cook.makeFries();
  }
}

public class Customer { // Client
  Waitress waitress;
  Order order; // Keeping track of order for a customer
  public Customer(Waitress waitress) {
    this.waitress = waitress;
  }
  public void createOrder(Order order) {
    this.order = order;
  }
  public void hungry() {
    waitress.takeOrder(order);
  }
}

public class Waitress {
  Order order;
  public Waitress() {

  }
  public void takeOrder(Order order) {
    this.order = order;
    order.orderUp(); // Waitress doesn't have to know anything about order. Just calls the method on it. Or the cook or how to cook the item
  }
}

public class Cook {
  public Cook() {}
  public void makeBurger() { //.. }
  public void makeFries() { //.. }
}
```

## Encapsulating Algorithms/Template Pattern

Consider:

```java
public class Tea {
  void prepareRecipe() {
    boilWater();
    steepTeaBag();
    // ..
  }
  void boilWater() { //.. }
  void steepTeaBag() { //.. }
}

public class Coffee {
  void prepareRecipe() {
    boilWater();
    brewCoffeeGrinds();
    // ..
  }
  void boilWater() { //.. }
  void brewCoffeeGrinds() { //.. }
}
```

Both require boilWater and few more same methods.

One Solution:

```
_CaffeineBeverage_ = {
  _prepareRecipe()_,
  boilWater()
}

Coffee = {
  prepareRecipe(),
  brewCoffeeGrinds()
}

Tea = {
  prepareRecipe(),
  steepTeaBag()
}
```

There's not much difference between steepTeaBag and brewCoffeeGrinds. If we need to change prepareRecipe algorithm then we have to modify at two places in case there's another coffee product.

```
void prepareRecipe() {
  boilWater();
  brew(); // generalize
  // ..
}
```

```java
public abstract class CaffeineBeverage {
  final void prepareRecipe() { // final so subclasses can't override it
    boilWater();
    brew();
    // ..
  }
  abstract void brew();
}
```

**Intent** - Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm, without changing the algorithm's structure.

We're using the inheritance structure to get the difference in behaviors. That's why it's classified as Class Behavioral.

Hollywood Principle is used here in a class way.

**AbstractList** uses this pattern. You're responsible for implementing `get(int)` and `size()` methods which AbstractList calls.

## Prototypical Creation/Prototype Pattern

Rather than creating an object from scratch, we're gonna copy. This allows us to clone an object and make some customization. We do it when an object is expensive to create.

**Intent** - Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.

What's good ?

- Separates the client from the details of object creation and representation.
- Helps when the cost of creating an object is complex or expensive. Hides complexity of object creation.
- Can allow you to minimize the number of classes and reduce need for subclassing. So we kind of just parameterize the object.
- Clients can create new objects without needing to know the concrete type. As we'll see a prototype interface.

```
Client = { // has a Prototype
  Operation() // p = prototype.clone()
}

_Prototype_ = {
  _clone()_
}

ConcretePrototype = {
  clone() // return copy of this
}
```

Note: In java the classes which we want to clone must implement the cloneable interface. Cloning is different in different languages.

The copy will have to be a deep copy.

## Encapsulating Object Creation/Factory Pattern

New Conundrum

```
_Pizza_ = {
  prepare(),
  bake(),
  cut(),
  box()
}

CheesePizza = { //.. }
VeggiePizza = { //.. }
```

```java
public class SimplePizzaFactory {
  public Pizza createPizza(String type) {
    Pizza pizza = null;

    if(type.equals("cheese")) {
      pizza = new CheesePizza();
    } else if (type.equals("veggie")) {
      pizza = new VeggiePizza();
    }
    return pizza;
  }
}

public class PizzaStore {
  SimplePizzaFactory factory;
  public PizzaStore(SimplePizzaFactory factory) {
    this.factory = factory;
  }
  public Pizza orderPizza(String type) {
    Pizza pizza;
    pizza = factory.createPizza(type);
    // ..
  }
}
```

Above is the Simple Factory "Pattern". A common way to deal with creating objects.

The factory could be singleton.

What if we want to franchise? The store need to serve different types of pizzas to keep customers happy. E.g. ChicagoPizza which is pretty thick.

**Abstract Factory Pattern** - Provide an interface for creating families of related or dependent objects without specifying the concrete classes.

```
_AbstractFactory_ = {
  _CreateProductA_(),
  _CreateProductB_()
}

ConcreteFactory1 = { // implements AbstractFactory
  CreateProductA(),
  CreateProductB()
} // has a ConcreteProductA which implements AbstractProductA

ConcreteFactory2 = { // implements AbstractFactory
  CreateProductA(),
  CreateProductB()
}
```

## Building Objects/Builder Pattern

One way to think about it is that it's different from factory is that... It focuses on encapsulating the complexity of building the object itself.

**Intent** - Separate the construction of a complex object from its representation so that the same construction process can create different representation.

Suppose you had a construction process for building a house. There a different kinds of houses. Brick and stone, wood houses, etc. Construction process is fairly similar.

Original motivation was with converting Rich Documents to PDF, text, MS Word, etc. files.

```
_Builder_ = {
  _buildPart()_
}

ConcreteBuilder = { // implements Builder
  buildPart(),
  build()
}

Director = { // has a builder. Good at building parts.
  construct()
}

Product = { // has a ConcreteBuilder }
```

We start with the product i.e. the House in this scenario. It has a name, type, roof, walls and windows. Walls and windows are stored in ArrayList and we have methods to add components which return `this`.

We'll have an abstract `HouseBuilder` class that enumerates the different type of houses. It will have abstract methods for adding walls, windows and roof.

Uses following priciples: program to interface, encapsulate what varies, loose coupling and open-closed.

StringBuilder comes handy when you are parsing something and want to build a string little by little. But there is no abstract API so it does not conform to Builder Pattern.

**Comparing Builder to Decorator and Factory**

- Builder: Separate the construction of a complex object from its representation so that the same construction process can create different representations. (Creational). How to put chunks together. Variations in building the object itself. Common SuperType.
- Factory Method: Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses. (Creational). What type of object. Encapsulating the variation of types which we're creating. Common SuperType.
- Decorator: Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality (Structural). The basic object is already built.

## Managing lots of objects/Flyweight Pattern

It's kind of an optimization technique to manage a large of similar objects. It allows us to share commonality between a large of similar objects.

Scenario: Building a landscape with different types of trees. The tree is expensive to create.

**Intent** - Use sharing to support large numbers of fine-grained objects efficiently.

2 Pieces: State dependant piece (extrinsic part) and State independent piece (intrinsic part). Each tree will be placed at different locations so that's the extrinsic part. The trees themselves, branches, leaves, color, etc. is intrinsic part which can be shared.

Here we're creating one of each type whereas Prototype allows us to create multiple of each type by copying them.

```java
public class TreeFactory {
  Tree d = null;
  public TreeFactory() {
    this.d = new DeciduousTree();
  }
  public Tree getTree(String type) throws Exception {
    if(type.equals("deciduous")) { // more else if for different trees and initialized in constructor
      return this.d;
    } else {
      throw new Exception("Invalid kind of tree");
    }
  }
}

public interface Tree {
  public void display(int x, int y);
  public default boolean isWithinRange(LocalDate aDate) {
    Month month = aDate.getMonth();
    return (month.getValue() > 2) && (month.getValue() < 11);
  }
  public class DeciduousTree implements Tree {
    // complex trunk, branch, leaf graphic data
    public void display(int x, int y) {
      if(!this.isWithinRange(LocalDate.now())) {
        // tree currently has no leaves
      }
    }
  }
}
```

Summary:

- Useful to reduce memory usage by sharing common state between many objects
- Used to support large number of similar objects
- Separates state into extrinsic and intrinsic state stored in a flyweight
- Intrinsic state is immutable
- More complex design, only use when you really need to optimize your design

## The State of Things/State Pattern

Many of the patterns are similar in their class diagrams but differ in intent.

Typical implementation includes variables representating states and if else/procedural logic.

For a new requirement, a new state has to be inserted which makes a lot of code rework. Drawing a state diagram looking at the code is very hard.

**Intent** - Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.

Consider a Gum machine as an object that is composed of machine states like: NoQuarter, HasQuarter, Sold and SoldOut

```java
public class GumMachine {
  State soldOutState;
  State noQuarterState;
  State hasQuarterState;
  State soldState;

  State state;
  int count = 0;

  public GumMachine(int numberOfGums) {
    // passing GumMachine to all
    soldOutState = new SoldOutState(this);
    noQuarterState = new NoQuarterState(this);
    hasQuarterState = new HasQuarterState(this);
    soldState = new SoldState(this);

    this.count = numberOfGums;
    if(numberOfGums > 0) {
      state = noQuarterState;
    } else {
      state = soldOutState;
    }
  }
}

public class HasQuarterState implements State {
  GumMachine gumMachine;

  public HasQuarterState(GumMachine gumMachine) {
    this.gumMachine = gumMachine;
  }
  // All functions denote what happens on action from this state.
  public void insertQuarter() { // .. }
  public void ejectQuarter() { //..
    gumMachine.setState(gumMachine.getNoQuarterState());
  }
  public void turnCrank() { //..
    gumMachine.setState(gumMachine.getSoldState());
  }
  public void dispense() { //.. }
}
```

It's **very similar to Strategy Pattern**. They differ in intent.

## Compound Pattern

Combines 2 or more pattern into a solution that solves a recurring or general problem.

**MVC Pattern** - Model View Controller

View - UI.

Model - Managing Data related code

Controller - Manages impact of user action on application.

Sometimes we can have multiple controllers and multiple views.

The 3 patterns that make up MVC are:

- Composite (View): Used within the view to manage the components of view.
- Strategy (Controller): Organize the relation between view and controller.
- Observer (Model): Organize the relation between model and its observers. The observers are controller and view.

Anytime the data in Model changes, all the observers are notified. The observer patterns allow observers to come and go easily.

When a user interacts with UI, it may trigger changes in Model. Controller figures out what to do with the action information. If update needs to occur for Model then controller makes it happen. With strategy pattern we allow controller to map to different UI and that means the underlying database could also change.

Composite pattern is used in the UI framework when built from ground up. Like DOM. Making possible similar actions on a wide variety of UI elements.

Design patterns are covering for things that are missing in Object Oriented Languages.
