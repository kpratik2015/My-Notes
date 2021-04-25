# Functional Programming

## Thinking in a functional style

Imperative style of programming focus on the how. It gets verbose and tiring over time. It's easier to get familiar but hard to maintain. It often involves mutability. It's hard to reason and hard to parallelize as well.

Declarative is where we tell what to do and not how to do it. The details are one level below following the Single Level of Abstraction Principle (SLAP). It's often less verbose and avoid explicit mutability.
This also includes Higher-order Functions.

Higher-order Functions:

- We can pass functions to functions
- We can create functions in functions
- We can return functions from functions
- Functions are treated like data, code as data.

In OOPs, we create objects which represent abstractions that solve a problem. We can decompose the problem into multiple functions and not just objects.

```java
Thread th = new Thread(new Runnable() { // funny because really they wanted to pass function instead of object
  public void run() {
    System.out.println("In another thread")
  }
})
th.start();
```

The new idiology of Java is we can mix and match object and functions. Functions are first class citizens.

```java
Thread th = new Thread(() -> System.out.println("In another thread"));// We're passing anonnymous function to the Thread constructor
th.start();
// We can say Thread constructor is a higher-order function
```

Many languages treat functions as functional value but in Java it treats as functional interface.
Java 8 introduced invoke dynamic which refers to function at runtime rather than an object.

Lambda expressions are anonymous functions.

```java
// Using declarative and functional style
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
numbers.stream().filter(e -> e % 2 == 0).mapToInt(e -> e * 2).sum();
```

Cohesive, no explicit mutation and follows the SLAP. The code begins to read like the problem statement. Each line does one thing only (cohesion). We can think about this as a series of transformation or flow of data.
Patterns: Functional pipeline pattern (pipeline of functions) or Cascade method pattern.

Lambda functions have a parameter list, an arrow and a body like (parameters) -> body.

In functional style, we look for functions that take functions and we build our solution by using these functions.

```java
List<String> names = Arrays.asList("Dory", "Gill", "Bruce")
// Find if there are names of length 5
// Think of the problem as a series of transformation and higher level of functions.
System.out.println(names.stream().anyMatch(name -> name.length() == 5));
// anyMatch will break out of the loop as soon as the given predicate is satisfied.
```

Write a function that takes in a function as parameter. In Java use `import java.util.function.*;` and `andThen` method.

More Java functions that help in this style of coding:

- IntStream.range()
- .noneMatch()
- .filter()
- .map()
- .reduce()
- .collect()

You don't need to create functions for predicates like number, boolean. e.g. `num > 1`

```java
public static Function<Integer, Integer> ourAndThen(Function<Integer, Integer> func1, Function<Integer, Integer> func2) {
  return input -> func2.apply(func1.apply(input)); // Combine 2 functions and return a function
}
```

In functional programming, there are few tools of trade/constructs:

- map
- filter
- reduce / accumulator / fold
- collect

**Filter** takes a predict. What's a predicate? Predicate is `Predicate<T>` which is really a `Function<T, Boolean>`. So it really is a function that returns a boolean.
Filter allows to pass through only the values that satisfy the predicate.
So where you would use IF in imperative style, you can use FILTER in functional style.

```
List                              v/s               Stream
Bucket of data                                 Pipeline of functions
```

Data flows thru pipeline of functions

**Stream** combines the functions to form a collection of functions. Internally called fusion.

Stream does not call each function on each data, instead it calls a collection of functions, on data, but only on demand.

**Map** function is a transformer.

**Reduce** on one hand converts the input collection into a single value, but in more general terms, reduce transforms from a stream to a concrete type. It does not have to return a single value. An operation is applied on each value in the collection.

**Collect** in Java is a reduce as well. It's thread safe.

```java
// Don't do this:
List<Integer> evenOnly = new ArrayList<>();
numbers.stream().filter(e -> e%2 == 0).forEach(e -> evenOnly.add(e)); // Code has side-effect.
// Mutation of shared variable is bad.
// We'll not be able to parallelize this code.
```

```java
List<Integer> evenOnly = numbers.stream().filter(e -> e%2 == 0).reduce(new ArrayList<>(), (list, e) -> { list.add(e); return list; }, // Local mutation.
(list1, list2) -> { list1.addAll(list2); return list1; });
System.out.println(evenOnly);
// Above code does the right thing but hard to maintain and understand. Error prone.
// Thankfully its been wrapped in toList function of Collectors.
numbers.stream().filter(e->e%2==0).collect(toList()) // preserves order in case input is list. or toUnmodifiableList()
```

In the parallel execution, the given input is split into parts, reduce works on the parts and then the results are combined together.
The value given to reduce is not an initial value, it is an identity value. 0 is identity for + on it, 1 is identity for \* on int. That is, it preserves the identity of input.

**Functional Composition**

Polymorphism is to OOP as lazy evaluation is to FP. Not all languages provide lazy evaluation. Lazy evaluation and parallel computing have direct impact on performance. If we need perf., don't ask for faster bicycler - instead ask for a rocket.

The chained functions are internally fused to make up a single function call on all values and only gets called until the terminal operation wants more.
Functions like findFirst, forEach, reduce are called terminal operations.
The intermediate operations do not run until a terminal operation kicks in.

Thus, the functional code does the same amount of work as the imperative code.

```java
numbers.stream().filter(ClassName::someFunc1).filter(ClassName::someFunc2)
.map(ClassName::someFunc3)
//.findFirst() // terminal operation commented
System.out.println("DONE"); // Directly prints this. The pipeline is not executed.
```

Lazy evaluation is not used in parallel. As lazy means do minimum amount of work. In parallel, more computations are done and you get result faster.

**Lambdas v/s Closures**

Lambdas do not carry state.

Closure is where we use variable outside the scope of lambda.

```java
int factor = 2;
numbers.stream()
.map(e -> e * factor) // closure
numbers.stream()
.map(e -> e * 2) // lambda
```

Lambdas and closures have to be pure function. That is, no side-effect. A pure function does not mutate any shared state. A pure function does not depend on any state that may change.

```java
// Don't do this:
List<Integer> numbers = Arrays.asList(1,2,3);
int[] factor = new int[] {2};
Stream<Integer> stream = numbers.stream()
.map(e -> e * factor[0]);

factor[0] = 0; // bad idea

stream.forEach(System.out::println); // 0, 0, 0

// If lambdas are not pure, we can't have correct results when using lazy evaluation or parallel execution.
```

FP emphasizes immutability because lazy and parallel fall apart in the presence of impurity.

FP and exceptions are mutually exclusion. You wanna treat error as data and then pass it down the chain. Look at reactive api.

**map v/s flatMap**

Map is useful when we have a one-to-one function. Take an input and return an output.

For one-to-many function. E.g. for a person their e-mail addresses. In this map will take a collection and return a collection of collection.
[[0,2], [1,3]] --> [0,2,1,3] via flatMap. It is actually mapFlatten i.e. map and then flatten.
