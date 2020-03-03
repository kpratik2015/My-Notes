# Java Pointers

Randomly going over concepts of Java.

## Take Note of

- Heap is where all objects are kept
- Operator overloading not supported in java
- finalize is an empty method that is called by GC before freeing object from RAM
- == checks addresses. equals() should be used for checking content
- Strings (Wrapper classes) are immutable whereas String buffers are mutable
- shallow copy: A shallow copy of an object copies the ‘main’ object, but doesn’t copy the inner objects
- deep copy: A deep copy will copy all nested elements until there are only primitive types and Immutables left
- While interface's object is not created, it keeps reference to a class which has implements to the interface. This is why we can use new SomeInterface();
- The purpose of interface is to provide full abstraction, while the purpose of abstract class is to provide partial abstraction
- You can have constructor in abstract class whereas same is not possible in interface
- Varargs rule states that there can be only one variable arguement and it must be the last arguement. `static void display(String notVarArg, String... values)`
- Generics were introduced in Java 5 `Map<Integer,String> map=new HashMap<Integer,String>()` and gives: (1) type-safety, (2) type casting not required and (3) compile-time checking
- The AVL trees are more balanced compared to Red-Black Trees, but they may cause more rotations during insertion and deletion. So if your application involves many frequent insertions and deletions, then Red Black trees should be preferred. And if the insertions and deletions are less frequent and search is a more frequent operation, then AVL tree should be preferred over Red-Black Tree.

## Java 8 Additions/Changes

- We can add default methods to existing interfaces which are not required to be implemented by all the classes that implement the interface. Also, static methods can be declared which don't allow overriding
- We can have methods with body in interface but we still can't have constructor as we do in abstract classes
- @FunctionalInterface annotation for interfaces with exactly one abstract method. Major benefits of functional interface is the possibility to use lambda expressions to instantiate them

  ```java
  Runnable r1 = () -> {
    System.out.println("My Runnable");
  };
  ```

- Java Stream API `java.util.stream` added to perform filter/map/reduce like operations with the collection.

  ```java
  List<Integer> myList = new ArrayList<>();
  for(int i=0; i<100; i++) myList.add(i);
  //sequential stream
  Stream<Integer> sequentialStream = myList.stream();
  //parallel stream
  Stream<Integer> parallelStream = myList.parallelStream();
  //using lambda with Stream API, filter example
  Stream<Integer> highNums = parallelStream.filter(p -> p > 90);
  //using lambda in forEach
  highNums.forEach(p -> System.out.println("High Nums parallel="+p));
  ```

  - Java 8 Stream internal iteration principle helps in achieving lazy-seeking in some of the stream operations. For example filtering, mapping, or duplicate removal can be implemented lazily, allowing higher performance and scope for optimization.
  - Once a Stream is consumed, it can’t be used later on.

- Java Time API `java.time`

  - All the classes in the new Date Time API are immutable and good for multithreaded environments

- Collection API improvements

  - `removeIf(Predicate filter)`, `spliterator()`
  - Map `replaceAll()`, `compute()`, `merge()` methods

- Concurrency API improvements

  - ConcurrentHashMap methods
  - `CompletableFuture` that may be explicitly completed (setting its value and status)
  - `Executors` `newWorkStealingPool()`

- Java IO improvements

## Early and Late Binding

1. Early binding -> compile time; Late Binding -> run time.
2. Method calls:

- Early binding: normal and overloaded methods
- Late binding: reflection and method overriding (run time polymorphism)

3. Binding of private, static and final methods happen at compile time as they cannot be overridden.
4. Early binding gives faster execution whereas late binding gives more flexibility.

```java
public class App {

	static class BindingA { // static -> nested class
		int x = 10;
		void prnt() {
			System.out.println("BindingA");
		}
	}

	static class BindingB extends BindingA {
		int x = 20;
		void prnt() {
			System.out.println("BindingB");
		}
	}

	public static void main(String[] args) {
		App.BindingA a = new App.BindingB();
		System.out.println(a.x); // early binding -> prints 10
		a.prnt(); // late binding -> prints BindingB
	}

}

```

## Map

**HashMap** is implemented as a hash table, and there is no ordering on keys or values.
**TreeMap** is implemented based on red-black tree structure, and it is ordered by the key.
**LinkedHashMap** preserves the insertion order
**Hashtable** is synchronized in contrast to HashMap.

_Note:_

- Since **TreeMaps** are sorted by keys, the object for key has to be able to compare with each other, that's why it has to implement Comparable interface
- The HashMap class is roughly equivalent to Hashtable, except that it is unsynchronized and permits nulls
- HashTable should not be used anymore as it contains obsolete code and instead ConcurrentHashMap should be used

### HashMap v/s WeakHashMap

- HashMap dominates over GC. That is, when a key is an object and it does not have any reference (null) then also it is not available for Garbage Collection.

- GC dominates over GC. In WeakHashmap, when a key is discarded then its entry is automatically removed from the map via GC.

  ```java
  WeakHashMap m = new WeakHashMap();
  Demo d = new Demo();
  // puts an entry into WeakHashMap
  m.put(d," Hi ");
  System.out.println(m); // {demo = Hi}
  d = null;
  // garbage collector is called
  System.gc();
  // thread sleeps for 4 sec
  Thread.sleep(4000); .
  System.out.println(m); // { }
  ```

- HashMap implements Cloneable interface and thus it has clone() method. Same is not true for WeakHashMap.

- WeakHashMap usecase - It is good to implement canonical maps. Lets say you want to associate some extra information to an object that you have a strong reference to. You put an entry in a WeakHashMap with the object as the key, and the extra information as the map value.

### LinkedHashMap

- LinkedHashMap has more memory footprint due to maintaining doubly LinkedList to keep track of order of keys.
- Offers ordering with default set as insertion. It can be created with another ordering called access order.
- Only access order is affected by `get(key)`, `put(key, value)` or `putAll()`. Most recent would go to end of doubly linked list.

### ConcurrentMap

It can handle concurrent access and has useful methods like `putIfAbsent`, `remove` and `replace` (only if currently mapped to given value)

### EnumMap

Allows setting value to Enums and provides useful methods. [Ref](https://www.geeksforgeeks.org/enummap-class-java-example/)

## References/Useful Links

- [Java Design Patterns](https://java-design-patterns.com/)
- [Java Feature Additions](https://www.javatpoint.com/New-features-in-java)
- [Java 8 Features](https://www.journaldev.com/2389/java-8-features-with-examples)
- [Java 8 Stream](https://www.journaldev.com/2774/java-8-stream)
