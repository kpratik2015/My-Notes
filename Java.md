# Java Pointers

Randomly going over concepts of Java.

- [Java Pointers](#java-pointers)
  - [Take Note of](#take-note-of)
  - [Things to Remember & Gotchas](#things-to-remember--gotchas)
  - [Effective Java](#effective-java)
    - [1. Consider static factory methods instead of constructors](#1-consider-static-factory-methods-instead-of-constructors)
    - [2. Consider a builder when faced with many constructor parameters](#2-consider-a-builder-when-faced-with-many-constructor-parameters)
    - [3. Enforce the singleton property with a private constructor or an enum type](#3-enforce-the-singleton-property-with-a-private-constructor-or-an-enum-type)
    - [4. Enforce noninstantiability with a private constructor](#4-enforce-noninstantiability-with-a-private-constructor)
    - [5. Prefer dependency injection to hardwiring resources](#5-prefer-dependency-injection-to-hardwiring-resources)
    - [6. Avoid creating unnecessary objects](#6-avoid-creating-unnecessary-objects)
    - [7. Eliminate obsolete object references](#7-eliminate-obsolete-object-references)
    - [8. Avoid finalizers and cleaners](#8-avoid-finalizers-and-cleaners)
    - [9. Prefer try-with-resources to try-finally](#9-prefer-try-with-resources-to-try-finally)
    - [10. Consider implementing Comparable](#10-consider-implementing-comparable)
    - [11. Minimize mutability](#11-minimize-mutability)
    - [12. Favor composition over inheritance](#12-favor-composition-over-inheritance)
    - [13. Design and document for inheritance or else prohibit it](#13-design-and-document-for-inheritance-or-else-prohibit-it)
    - [14. Prefer interfaces to abstract classes](#14-prefer-interfaces-to-abstract-classes)
    - [15. Favor static member classes over nonstatic](#15-favor-static-member-classes-over-nonstatic)
    - [16. Prefer lists to arrays](#16-prefer-lists-to-arrays)
    - [17. Favor generic types & methods](#17-favor-generic-types--methods)
    - [18. Use bounded wildcards to increase API flexibility](#18-use-bounded-wildcards-to-increase-api-flexibility)
    - [19. Combine generics and varargs judiciously](#19-combine-generics-and-varargs-judiciously)
    - [20. Use enums instead of int constants](#20-use-enums-instead-of-int-constants)
    - [21. Use marker interfaces to define types](#21-use-marker-interfaces-to-define-types)
    - [22. Prefer lambdas to anonymous classes](#22-prefer-lambdas-to-anonymous-classes)
    - [23. Prefer method references to lambdas](#23-prefer-method-references-to-lambdas)
    - [24. Use streams judiciously](#24-use-streams-judiciously)
    - [25. Prefer side-effect-free functions in streams](#25-prefer-side-effect-free-functions-in-streams)
    - [26. Prefer Collection to Stream as a return type](#26-prefer-collection-to-stream-as-a-return-type)
    - [27. Use caution when making streams parallel](#27-use-caution-when-making-streams-parallel)
    - [28. Make defensive copies when needed](#28-make-defensive-copies-when-needed)
    - [29. Use overloading judiciously](#29-use-overloading-judiciously)
    - [30. Return optionals judiciously](#30-return-optionals-judiciously)
    - [31. Minimize the scope of local variables](#31-minimize-the-scope-of-local-variables)
    - [32. Know and use the libraries](#32-know-and-use-the-libraries)
    - [33. Avoid float and double if exact answers are required](#33-avoid-float-and-double-if-exact-answers-are-required)
    - [34. Prefer primitive types to boxed primitives](#34-prefer-primitive-types-to-boxed-primitives)
    - [35. Avoid strings where other types are more appropriate](#35-avoid-strings-where-other-types-are-more-appropriate)
    - [36. Beware the performance of string concatenation](#36-beware-the-performance-of-string-concatenation)
    - [37. Refer to objects by their interfaces](#37-refer-to-objects-by-their-interfaces)
    - [38. Use native methods judiciously](#38-use-native-methods-judiciously)
    - [39. Adhere to generally accepted naming conventions](#39-adhere-to-generally-accepted-naming-conventions)
    - [40. Synchronize access to shared mutable data](#40-synchronize-access-to-shared-mutable-data)
    - [41. Avoid excessive synchronization](#41-avoid-excessive-synchronization)
    - [42. Prefer executors, tasks, and streams to threads](#42-prefer-executors-tasks-and-streams-to-threads)
    - [43. Prefer concurrency utilities to wait and notify](#43-prefer-concurrency-utilities-to-wait-and-notify)
    - [44. Use lazy initialization judiciously](#44-use-lazy-initialization-judiciously)
    - [45. Don’t depend on the thread scheduler](#45-dont-depend-on-the-thread-scheduler)
    - [Keywords](#keywords)
  - [Java 8 Additions/Changes](#java-8-additionschanges)
  - [Early and Late Binding](#early-and-late-binding)
  - [Map](#map)
    - [HashMap v/s WeakHashMap](#hashmap-vs-weakhashmap)
    - [LinkedHashMap](#linkedhashmap)
    - [ConcurrentMap](#concurrentmap)
    - [EnumMap](#enummap)
  - [References/Useful Links](#referencesuseful-links)

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

- In most Windows installations, the default charset is CP1252; but on Linux installations, the default charset will be UTF-8. Always specify charset `final byte[] bytes = someString.getBytes(StandardCharsets.UTF_8);`

- Use of compare()

  ```java
  final double d1 = Double.NaN;
  final double d2 = Double.NaN;
  System.out.println(d1 == d2); // false
  System.out.println(Double.compare(d1, d2) == 0); // true
  ```

- The JIT is the JVM’s mechanism by which it can optimize code at runtime.

- `IntStream.range(0, 10).forEach(System.out::println);` inferred type of the method reference `System.out::println` is IntConsumer. `System.out` is a `PrintStream` and it has method named `println` which takes an int as argument.

- Stream extends BaseStream, and BaseStream extends AutoCloseable.

  ```java
  try (
      final Stream<String> stream = Files.lines(path);
  ) {
      stream.forEach(System.out::println);
  }
  ```

- For two objects if `o1.equals(o2)` is true then `o1.hashCode() == o2.hashCode()` must also be true

- Creation of `enum` is guaranteed to be threadsafe. However, the methods on an `enum` type are not necessarily threadsafe

- When to use volatile variables? => When a member variable is accessed by multiple threads and want the value of a volatile field to be visible to all readers (other threads in particular) after a write operation completes on it. _The volatile keyword basically says to the JVM “Warning, this variable may be modified in another Thread”._

* A good usecase of calling `System.gc()` would be at the time of profiling to search for possible memory leaks.

* The **marker interface** in Java is an interface with no field or methods. It indicates something to compiler or JVM. E.g. Serialiazble, Clonable and Remote interface. **Annotations** are better as it adds metadata without creating separate type of it.

* In below case a NullPointerException is not thrown because an instance is not required for invoking a static member or method.

  ```java
  Test t = null;
  t.someMethod();
  public static void someMethod() {
    // ...
  }
  ```

* Understanding JVM: In below case 2nd true is returned because JVM tries to save memory when the integer falls within a range (from -128 to 127) so no new reference is created.

  ```java
  Integer a = 1000, b = 1000;
  System.out.println(a == b); // false
  Integer c = 100, d = 100;
  System.out.println(c == d); // true
  ```

* `ArrayList` is preferred when there are more search operations as O(1) and it uses array internally. `LinkedList` is preferred when there are more insert or deletions as it uses doubly linked list. `Vector` is synchronized, so it offers thread-safe implementation.

* `ListIterator` can traverse `Lists` and not a `Set` whereas `Iterator` can. `ListIterator` can traverse in both direction and provides index at any point.

* Strings are immutable and stored in String pool. Any sensitive data stored can remain in memory until GC and if someone has access to memory dump then it can be exploited. So it's better to use mutable object like a character array which can be set to blank once done.

* `AtomicInteger` allows performing atomic operations and provides useful methods like `addAndGet()` and `incrementAndGet()`. It can be used as an atomic counter which is being used by multiple threads or in compare-and-swap operations for non-blocking algorithms.

- `sleep()` is most commonly used for polling, or to check for certain results, at a regular interval. `wait()` is generally used in multithreaded applications, in conjunction with `notify()` / `notifyAll()`, to achieve synchronization and avoid race conditions

- The _Java Classloader_ is the part of the Java runtime environment that loads classes on demand (lazy loading) into the JVM (Java Virtual Machine)

- Avoid calling abstract methods in your abstract classes’ constructors, as it restricts how those abstract methods can be implemented.

- We can use `? extends Type` to create a _covariant_ parameter. Similarly, `? super Type` lets a method parameter be _contravariant_

  ```java
  public double sum(List<? extends Number> numbers) { ... }
  List<Long> longs = Arrays.asList(42L, 128L, -10L);
  public void forEachNumber(Callback<? super Number> callback) { ... }
  forEachNumber(new Callback<Object>() { ... }); // works
  forEachNumber(new Callback<Long>() { ... }); // fails
  ```

- `TreeSet` is a good choice when order matters and when reads are balanced against the increased cost of writes. It also allows us to pass in our own `Comparator`

  ```java
  SortedSet<Event> events = new TreeSet<>(
                (left, right) -> Long.compare(left.timestamp, right.timestamp));
  ```

- Generally, the safety and flexibility of enums means they should be used in place of integer constants, and switch statements can be eliminated with liberal use of abstract methods.

  ```java
  public enum ContactMethod {
    PHONE("telephone.png") {
        @Override public void initiate(User user) {
            Telephone.dial(user.getPhoneNumber());
        }
    }, //...;
    ContactMethod(String icon) {
        this.icon = icon;
    }

    private final String icon;

    public abstract void initiate(User user);

    public String getIcon() {
        return icon;
    }
  }
  ContactMethod method = user.getPrimaryContactMethod();
  displayIcon(method.getIcon());
  method.initiate(user);
  ```

- Reflection allows programmatic access to information about a Java program’s types. Use-cases include: Annotation-based serialization libraries, MVC frameworks, DI frameworks and Object-relational mappers such as Hibernate to map DB columns to fields.

- A **static initializer** gives you the opportunity to run code during the initial loading of a class and it guarantees that this code will only run once and will finish running before your class can be accessed in any way.

  ```java
  public static final Map<String, Boolean> FEATURE_FLAGS;
  static {
      Map<String, Boolean> flags = new HashMap<>();
      flags.put("frustrate-users", false);
      flags.put("reticulate-splines", true);
      flags.put(...);
      FEATURE_FLAGS = Collections.unmodifiableMap(flags);
  }
  ```

- _Nested classes can be static or non-static (also called an inner class). How do you decide which to use? Does it matter?_

  - The key difference between is that inner classes have full access to the fields and methods of the enclosing class. This can be convenient for event handlers, but comes at a cost: every instance of an inner class retains and requires a reference to its enclosing class.

  - With this cost in mind, there are many situations where we should prefer static nested classes. When instances of the nested class will outlive instances of the enclosing class or or if reflection on those nested classes is involved, the nested class should be static to prevent memory leaks.

- **package-private** — The member is accessible from any class in the package where it is declared. Technically known as default access, this is the access level you get if no access modifier is specified (except for interface members, which are public by default).

- If a method overrides a superclass method, it cannot have a more restrictive access level in the subclass than in the superclass. This is necessary to ensure that an instance of the subclass is usable anywhere that an instance of the superclass is usable (the Liskov substitution principle)

- A nonzero-length array is always mutable, so it is wrong for a class to have a public static final array field, or an accessor that returns such a field.

  ```java
  // Potential security hole!
  public static final Thing[] VALUES = { ... };

  // Solutions
  private static final Thing[] PRIVATE_VALUES = { ... };
  public static final List<Thing> VALUES = Collections.unmodifiableList(Arrays.asList(PRIVATE_VALUES));

  // OR
  private static final Thing[] PRIVATE_VALUES = { ... };
  public static final Thing[] values() {
    return PRIVATE_VALUES.clone();
  }
  ```

- A way for having a constant utility class

  ```java
  // Constant utility class
  public class PhysicalConstants {
    private PhysicalConstants() { } // Prevents instantiation
    public static final double AVOGADROS_NUMBER = 6.022_140_857e23;
    public static final double BOLTZMANN_CONST = 1.380_648_52e-23;
    public static final double ELECTRON_MASS = 9.109_383_56e-31;
  }
  ```

- When you encounter an existing class with a tag field, consider refactoring it into a hierarchy.

- While you can pass a List<String> to a parameter of type List, you can’t pass it to a parameter of type List<Object>. There are subtyping rules for generics, and List<String> is a subtype of the raw type List, but not of the parameterized type List<Object>. As a consequence, you lose type safety if you use a raw type such as List, but not if you use a parameterized type such as List<Object>

- Safer alternative to raw types is _unbounded wildcard types_. For example, the unbounded wildcard type for the generic type Set<E> is Set<?> (read “set of some type”).

  ```java
  // Legitimate use of raw type - instanceof operator
  if (o instanceof Set) { // Raw type
    Set<?> s = (Set<?>) o; // Wildcard type
    // ...
  }
  ```

- All zero-length arrays are immutable

- If you believe a condition is likely to allow for recovery, use a checked exception; if not, use a runtime exception.

- Commonly used exceptions include IllegalArgumentException, IllegalStateException, NullPointerException, IndexOutOfBoundsException, ConcurrentModificationException and UnsupportedOperationException

- In Java 7, there is multi-catch: `try {...} catch(ExecutionException | InterruptedException ex) {...}`

- For interval timing, always use `System.nanoTime` rather than `System.currentTimeMillis`. System.nanoTime is both more accurate and more precise and is unaffected by adjustments to the system’s real-time clock.

<!-- END OF TAKE NOTE OF -->

## Things to Remember & Gotchas

- If JVM or thread exists then `finally` block may not execute.
- Java is pass by value.
- A `java.util.Date` represents date and time of day, a `java.sql.Date` only represents a date.
- **Marker interfaces** - provides run time type information of objects. It provides a means to associate metadata with a class where the language does not have explicit support for such metadata. A major problem with marker interfaces is that an interface defines a contract for implementing classes, and that contract is inherited by all subclasses. This means that you cannot “un-implement” a marker.
- `main()` method is public so that it can be accessible everywhere and to every object which may desire to use it for launching the application. _Why void?_ Then there is no use of returning any value to JVM, who actually invokes this method.
- `String` is not reserved keyword. strings are immutable to increases performance and reduce security risk. String class provides simple regex usage -> `new String("abc").matches("<regex>")`
- `char` arrays are mutable, their content can be overwritten after use. Good usecase for password.
- In below code snippet, 2 objects will be created. 1st object in string pool by statement 1, 2nd statement will point to first object and 3rd will create new string object in heap memory

```java
String s1 = "a";
String s2 = "a";
String s3 = new String("a");
```

- Hash code for null is always 0.
- In HashMap, if two unequal objects have same hash code value, they'll be stored in chain like LinkedList as inner class `Entry` has a next property
- Abstract class are slightly faster than interface because interface involves a search before calling any overridden method in Java.
- `hashCode()` method is used to get a unique integer for given object. This integer is used for determining the bucket location, when this object needs to be stored in some _HashTable_ like data structure. By default, Object’s `hashCode()` method returns an integer representation of memory address where object is stored.
- `equals()` method, as name suggest, is used to simply verify the equality of two objects. Default implementation simply check the object references of two objects to verify their equality.
- Whenever `a.equals(b)` then `a.hashCode()` must be same as `b.hashCode()`.
- **Abstraction** captures only those details about an object that are relevant to the current perspective.
- Wrapping data and methods within classes in combination with implementation hiding (through access control) is often called encapsulation. The result is a data type with characteristics and behaviors. **Encapsulation** essentially has both i.e. information hiding and implementation hiding. _“Whatever changes, encapsulate it“_
- `StringBuffer` can save memory as it's dynamically - growable array inside JVM, which means that any change operation can occur on the existing memory location, with new memory allocated only as-needed.
- In java, a deadlock is a situation where minimum two threads are holding lock on some different resource, and both are waiting for other resource to complete its task. And, none is able to leave the lock on resource it is holding.
- “The transient keyword in Java is used to indicate that a field should not be serialized.” According to language specification: Variables may be marked transient to indicate that they are not part of the persistent state of an object.
- `volatile` modifier tells the JVM that a thread accessing the variable must always reconcile its own private copy of the variable with the master copy in memory. You mark the variable holding shared data as volatile when you are not using locking to access that variable and you want changes made by one thread to be visible in another, or you want to create a “happens-after” relation to ensure that computation is not re-ordered, again, to ensure changes become visible at the appropriate time.
- We can use Iterator to traverse a Set or a List or a Map. But ListIterator can only be used to traverse a List only
- By default, java cloning is shallow copy or ‘field by field copy’ i.e. as the Object class does not have idea about the structure of class on which clone() method will be invoked.
  - If the class has only primitive data type members then a completely new copy of the object will be created and the reference to the new object copy will be returned.
  - If the class contains members of any class type then only the object references to those members are copied and hence the member references in both the original object as well as the cloned object refer to the same object.
- Deep cloning requires:
  - No need to separately copy primitives
  - All the member classes in original class should support cloning and in clone method of original class in context should call super.clone() on all member classes.
  - If any member class does not support cloning then in clone method, one must create a new instance of that member class and copy all its attributes one by one to new member class object.
- You can use `synchronized` keyword in your class on defined methods or blocks.
  - **Object level locking** is mechanism when you want to synchronize a non-static method or non-static code block such that only one thread will be able to execute the code block on given instance of the class.
  - **Class level locking** prevents multiple threads to enter in synchronized block in any of all available instances on runtime.
- `sleep()` is a method which is used to hold the process for few seconds or the time you wanted but in case of `wait()` method thread goes in waiting state and it won’t come back automatically until we call the `notify()` or `notifyAll()`. The major difference is that `wait()` releases the lock or monitor while `sleep()` doesn’t releases any lock or monitor while waiting. `wait()` is used for inter-thread communication while `sleep()` is used to introduce pause on execution, generally.
- **Polymorphism** is the ability by which, we can create functions or reference variables which behaves differently in different programmatic context.
- With **ThreadPoolExecutor**, you only have to implement the `Runnable` objects and send them to the executor. It is responsible for their execution, instantiation, and running with necessary threads.

## Effective Java

### 1. Consider static factory methods instead of constructors

```java
public static Boolean valueOf(boolean b) {
  return b ? Boolean.TRUE : Boolean.FALSE;
}
```

**Advantages**

- They have names
- No requirement of creating new object
- Return type can be any subtype
- Class of returned object can vary as per input parameters to function call
- Class of returned object need not exist when class containing the method is written e.g. JDBC

_Common Names for static factory methods: from, of, vlaueOf, getInstance, newInstance, getType, newType, and type_

### 2. Consider a builder when faced with many constructor parameters

Javabeans pattern of setters in parameterless constructor has serious disadvantages.
The builder is typically a static member class of the class it builds.

```java
// Shorter version with calories optional. This pattern ensures thread safety

public class NutritionFacts {
  private final int servingSize;
  private final int calories;

  public static class Builder { // static
    // Required params
    private final int servingSize;
    // Optional - initialized to default values
    private int calories = 0;
    public Builder(int servingSize) { // constructor with required param
      this.servingSize = servingSize;
    }
    public Builder calories(int val) { calories = val; return this; }

    public NutritionFacts build() { return new NutritionFacts(this); }
  }

  private NutritionFacts(Builder builder) {
    servingSize = builder.servingSize;
    calories = builder.calories;
  }
}

// Resulting call
NutritionFacts cocaCola = new NutritionFacts.Builder(240).calories(100).build();
```

### 3. Enforce the singleton property with a private constructor or an enum type

- Private Constructor approach

```java
// Singleton with static factory
public class Elvis {
  private static final Elvis INSTANCE = new Elvis();
  private Elvis() { ... }
  public static Elvis getInstance() { return INSTANCE; }
  public void leaveTheBuilding() { ... }
}
```

- Enum approach - concise, serializable free and good protection against reflection

```java
// Enum singleton - the preferred approach
public enum Elvis {
  INSTANCE;
  public void leaveTheBuilding() { ... }
}
```

### 4. Enforce noninstantiability with a private constructor

Attempting to enforce noninstantiability by making a class abstract does not work. The class can be subclassed and the subclass instantiated.

```java
// Noninstantiable utility class
public class UtilityClass {
  // Suppress default constructor for noninstantiability
  private UtilityClass() {
  throw new AssertionError();
}
... // Remainder omitted
}
```

### 5. Prefer dependency injection to hardwiring resources

Do not use a singleton or static utility class to implement a class that depends on one or more underlying resources whose behavior affects that of the class, and do not have the class create these resources directly

```java
// Dependency injection provides flexibility and testability
public class SpellChecker {
  private final Lexicon dictionary;
  public SpellChecker(Lexicon dictionary) {
    this.dictionary = Objects.requireNonNull(dictionary);
  }
  public boolean isValid(String word) { ... }
  public List<String> suggestions(String typo) { ... }
}
```

### 6. Avoid creating unnecessary objects

For e.g., the factory method Boolean.valueOf(String) is preferable to the constructor Boolean(String), which was deprecated in Java 9. Since the constructor must create a new object each time it's called.

```java
// Reusing expensive object for improved performance
public class RomanNumerals {
  private static final Pattern ROMAN = Pattern.compile(
  "^(?=.)M*(C[MD]|D?C{0,3})"
  + "(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$");
  static boolean isRomanNumeral(String s) {
    return ROMAN.matcher(s).matches();
  }
}
```

**Prefer primitives to boxed primitives, and watch out for unintentional autoboxing. E.g. long over Long**

### 7. Eliminate obsolete object references

The fix for this sort of problem is simple: null out references once they become obsolete.
_Nulling out object references should be the exception rather than the norm._

Common sources of memory leaks are: caches, listeners and other callbacks.

Such memory leaks can be identified by _heap profiler_

### 8. Avoid finalizers and cleaners

**Use of implements AutoCloseable or [try-with-resources/try-finally](https://www.baeldung.com/java-try-with-resources)**

As of Java 9, finalizers have been deprecated, but they are still being used by the Java libraries. The Java 9 replacement for finalizers is cleaners. Cleaners are less dangerous than finalizers, but still unpredictable, slow, and generally unnecessary.

_Never do anything time-critical in a finalizer or cleaner_
_Never depend on a finalizer or cleaner to update persistent state. E.g. clearing lock on DB_
_To protect nonfinal classes from finalizer attacks, write a final finalize method that does nothing_

FileInputStream, FileOutputStream, ThreadPoolExecutor, and java.sql.Connection, have finalizers that serve as safety nets -- free the resource if user forgets to

### 9. Prefer try-with-resources to try-finally

```java
// try-with-resources on multiple resources - short and sweet
static void copy(String src, String dst) throws IOException {
  try ( InputStream in = new FileInputStream(src);
        OutputStream out = new FileOutputStream(dst)) {
    byte[] buf = new byte[BUFFER_SIZE];
    int n;
    while ((n = in.read(buf)) >= 0)
    out.write(buf, 0, n);
  }
}
```

### 10. Consider implementing Comparable

If you are writing a value class with an obvious natural ordering, such as alphabetical order, numerical order, or chronological order, you should implement the Comparable interface.

```java
/**
Compares this object with the specified object for order. Returns a negative integer, zero, or a positive integer as this object is less than, equal to, or greater than the specified object.
*/
public interface Comparable<T> {
  int compareTo(T t);
}
```

### 11. Minimize mutability

The Java platform libraries contain many immutable classes, including `String`, the boxed primitive classes, and `BigInteger` and `BigDecimal`.

To make a class immutable, follow these five rules:

- Don’t provide methods that modify the object’s state (known as mutators)
- Ensure that the class can’t be extended - Instead of making an immutable class final, you can make all of its constructors private or package-private and add public static factories in place of the public constructors.
- Make all fields final
- Make all fields private
- Ensure exclusive access to any mutable components

In an immutable class, methods return new instances and the method names are prepositions (such as plus) rather than verbs (such as add).

An immutable object can be in exactly one state, the state in which it was
created.

Immutable objects are inherently thread-safe; they require no synchronization. Immutable objects can be shared freely.

Opting for static factories in place of public constructors when designing a new class gives you the flexibility to add caching later, without modifying clients.

You need not and should not provide a clone method or copy constructor on an immutable class.

Immutable objects provide failure atomicity for free. Their state never changes, so there is no possibility of a temporary inconsistency.

One caveat should be added concerning serializability. If you choose to have your immutable class implement Serializable and it contains one or more fields that refer to mutable objects, you must provide an explicit readObject or readResolve method, or use the ObjectOutputStream.writeUnshared and ObjectInputStream.readUnshared methods, even if the default serialized form
is acceptable.

To summarize, resist the urge to write a setter for every getter. **Classes should be immutable unless there’s a very good reason to make them mutable.**

**The major disadvantage of immutable classes is that they require a separate object for each distinct value.**

### 12. Favor composition over inheritance

Unlike method invocation, inheritance violates encapsulation.

Hashset's `addAll()` internally calls `add()`. This “self-use” is an implementation detail, not guaranteed to hold in all implementations of the Java platform and subject to change from release to release.

If the superclass acquires a new method in a subsequent release and
you have the bad luck to have given the subclass a method with the same signature and a different return type, your subclass will no longer compile.

Instead of extending an existing class, give your new class a private field that references an instance of the existing class. This design is called composition because the existing class becomes a component of the new one.

Note that the implementation is broken into two pieces, the class itself and a reusable forwarding class, which contains all of the forwarding methods and nothing else:

```java
// Wrapper class - uses composition in place of inheritance
public class InstrumentedSet<E> extends ForwardingSet<E> {
  private int addCount = 0;
  public InstrumentedSet(Set<E> s) { super(s); }
  @Override
  public boolean add(E e) { addCount++; return super.add(e); }
  @Override
  public boolean addAll(Collection<? extends E> c) { addCount += c.size(); return super.addAll(c); }
  public int getAddCount() { return addCount; }
}
// Reusable forwarding class
public class ForwardingSet<E> implements Set<E> {
  private final Set<E> s;
  public ForwardingSet(Set<E> s) { this.s = s; }

  public void clear() { s.clear(); }

  public boolean contains(Object o) { return s.contains(o); }

  public boolean isEmpty() { return s.isEmpty(); }

  public int size() { return s.size(); }

  public Iterator<E> iterator() { return s.iterator(); }

  public boolean add(E e) { return s.add(e); }

  public boolean remove(Object o) { return s.remove(o); }

  public boolean containsAll(Collection<?> c) { return s.containsAll(c); }

  public boolean addAll(Collection<? extends E> c) { return s.addAll(c); }

  public boolean removeAll(Collection<?> c) { return s.removeAll(c); }

  public boolean retainAll(Collection<?> c) { return s.retainAll(c); }

  public Object[] toArray() { return s.toArray(); }

  public <T> T[] toArray(T[] a) { return s.toArray(a); }

  @Override
  public boolean equals(Object o) { return s.equals(o); }

  @Override
  public int hashCode() { return s.hashCode(); }

  @Override
  public String toString() { return s.toString(); }
}
```

The InstrumentedSet class is known as a wrapper class because each InstrumentedSet instance contains (“wraps”) another Set instance. This is also known as the Decorator pattern because the InstrumentedSet class “decorates” a set by adding instrumentation.

Inheritance propagates any flaws in the superclass’s API, while composition lets you design a new API that hides these flaws.

### 13. Design and document for inheritance or else prohibit it

A method that invokes overridable methods contains a description of these invocations at the end of its documentation comment. The description is in a special section of the specification, labeled “Implementation Requirements,” which is generated by the Javadoc tag @implSpec.

Constructors must not invoke overridable methods, directly or indirectly. The Cloneable and Serializable interfaces present special difficulties. It is generally not a good idea for a class designed for inheritance to implement either of these interfaces because they place a substantial burden on programmers who extend the class.

### 14. Prefer interfaces to abstract classes

If you want to have two classes extend the same abstract class, you have to place it high up in the type hierarchy where it is an ancestor of both classes.

Although many interfaces specify the behavior of Object methods such as equals and hashCode, you are not permitted to provide default methods for them. Also, interfaces are not permitted to contain instance fields or nonpublic static members (with the exception of private static methods). Finally, you can’t add default methods to an interface that you don’t control.

_Skeletal Implementation:_ As a simple example, consider the Map.Entry interface. The obvious primitives are getKey, getValue, and (optionally) setValue. Since you are not allowed to provide default implementations for the Object methods, all implementations are placed in the skeletal implementation class:

```java
// Skeletal implementation class
public abstract class AbstractMapEntry<K,V> implements Map.Entry<K,V> {
  // Entries in a modifiable map must override this method
  @Override public V setValue(V value) {
    throw new UnsupportedOperationException();
  }
  // Implements the general contract of Map.Entry.equals
  @Override public boolean equals(Object o) { ... }
  // Implements the general contract of Map.Entry.hashCode
  @Override public int hashCode() { ... }
  @Override public String toString() { ... }
}
```

Good documentation is absolutely essential in a skeletal implementation.

### 15. Favor static member classes over nonstatic

There are four kinds of nested classes: _static member classes, nonstatic member classes, anonymous classes, and local classes_. All but the first kind are known as inner classes.

A **static member class** is the simplest kind of nested class. It is best thought of as an ordinary class that happens to be declared inside another class and has access to all of the enclosing class’s members, even those declared private. If it is declared private, it is accessible only within the enclosing class, and so forth. One common use of a static member class is as a public helper class, useful only in conjunction with its outer class.

Each instance of a nonstatic member class is implicitly associated with an enclosing instance of its containing class. Within instance methods of a nonstatic member class, you can invoke methods on the enclosing instance or obtain a reference to the enclosing instance using the qualified this construct. One common use of a nonstatic member class is to define an Adapter that allows an instance of the outer class to be viewed as an instance of some unrelated class.

```java
// Typical use of a nonstatic member class
public class MySet<E> extends AbstractSet<E> {
  ... // Bulk of the class omitted
  @Override public Iterator<E> iterator() {
    return new MyIterator();
  }
  private class MyIterator implements Iterator<E> {
  ...
  }
}
```

**If you declare a member class that does not require access to an enclosing instance, always put the static modifier in its declaration** A common use of private static member classes is to represent components of the object represented by their enclosing class.

As you would expect, an _anonymous class_ has no name. It is not a member of
its enclosing class. You can’t instantiate them except at the point they’re declared. You can’t perform instanceof tests or do anything else that requires you to name the class. You can’t declare an anonymous class to implement multiple interfaces or to extend a class and implement an interface at the same time. Clients of an anonymous class can’t invoke any members except those it inherits from its supertype.
_lambdas_ are now preferred over annonymous classes.

Local classes are the least frequently used of the four kinds of nested classes. A local class can be declared practically anywhere a local variable can be declared and obeys the same scoping rules.

### 16. Prefer lists to arrays

First, arrays are covariant. This scary-sounding word means simply that if Sub is a subtype of Super, then the array type Sub[] is a subtype of the array type Super[]. Generics, by contrast, are invariant: for any two distinct types Type1 and Type2, List<Type1> is neither a subtype nor a supertype of List<Type2>.

Types such as E, List<E>, and List<String> are technically known as nonreifiable types. Intuitively speaking, a non-reifiable type is one whose runtime representation contains less information than its compile-time representation. Because of erasure, the only parameterized types that are reifiable are unbounded wildcard types such as List<?> and Map<?,?>

```java
// List-based Chooser - typesafe
public class Chooser<T> {
  private final List<T> choiceList;
  public Chooser(Collection<T> choices) {
    choiceList = new ArrayList<>(choices);
  }
  public T choose() {
    Random rnd = ThreadLocalRandom.current();
    return choiceList.get(rnd.nextInt(choiceList.size()));
  }
}
```

### 17. Favor generic types & methods

We can generify a class if it wasn't parameterized to begin with.

```java
public class X<E> { ... }   // public class X { ... }
private E[] elements;       // private Object[] elements;
(E[]) new Object[CAPACITY]; // new Object[CAPACITY]

// Generic method syntax below
// Generic method
public static <E> Set<E> union(Set<E> s1, Set<E> s2) {
  Set<E> result = new HashSet<>(s1);
  result.addAll(s2);
  return result;
}
```

Because generics are implemented by erasure, you can use a single object for all required type parameterizations, but you need to write a static factory method to repeatedly dole out the object for each requested type parameterization. This pattern, called the _generic singleton factory_.

```java
// Generic singleton factory pattern
private static UnaryOperator<Object> IDENTITY_FN = (t) -> t;

@SuppressWarnings("unchecked")
public static <T> UnaryOperator<T> identityFunction() {
  return (UnaryOperator<T>) IDENTITY_FN;
}

// Practical Usage
String[] strings = { "jute", "hemp", "nylon" };
UnaryOperator<String> sameString = identityFunction();
for (String s : strings)
  System.out.println(sameString.apply(s));
```

### 18. Use bounded wildcards to increase API flexibility

Solve such errors: `Iterable<Integer> cannot be converted to Iterable<Number>` or `Collection<Object> is not a subtype of Collection<Number>`

```java
// Wildcard type for a parameter that serves as an E producer
public void pushAll(Iterable<? extends E> src) { // Iterable of some substype of E
  for (E e : src)
    push(e);
}
// Wildcard type for parameter that serves as an E consumer
public void popAll(Collection<? super E> dst) {
  while (!isEmpty())
    dst.add(pop());
}
```

**PECS stands for producer-extends, consumer-super**

For error like incompatible types: Object cannot be converted to CAP#1

```java
public static void swap(List<?> list, int i, int j) {
  swapHelper(list, i, j);
}

// Private helper method for wildcard capture
private static <E> void swapHelper(List<E> list, int i, int j) {
  list.set(i, list.set(j, list.get(i)));
}
```

### 19. Combine generics and varargs judiciously

When you invoke a varargs method, an array is created to hold the varargs parameters

```java
// Safe method with a generic varargs parameter
@SafeVarargs
static <T> List<T> flatten(List<? extends T>... lists) {
  List<T> result = new ArrayList<>();
  for (List<? extends T> list : lists)
    result.addAll(list);
  return result;
}

// List as a typesafe alternative to a generic varargs parameter
// The main Advantage of this approach is that the compiler can prove that the method is typesafe.
// The main disadvantage is that the client code is a bit more verbose and may be a bit slower
static <T> List<T> flatten(List<List<? extends T>> lists) {
  List<T> result = new ArrayList<>();
  for (List<? extends T> list : lists)
    result.addAll(list);
  return result;
}
```

**Use @SafeVarargs on every method with a varargs parameter of a generic or parameterized type**

As a reminder, a generic varargs methods is safe if:

- it doesn’t store anything in the varargs parameter array, and
- it doesn’t make the array (or a clone) visible to untrusted code

### 20. Use enums instead of int constants

The basic idea behind Java’s enum types is simple: they are classes that export one instance for each enumeration constant via a public static final field. enum types let you add arbitrary methods and fields and implement arbitrary interfaces.

Enums are by their nature immutable, so all fields should be final. Fields can be public, but it is better to make them private and provide public accessors.

```java
// Enum type with constant-specific method implementations
// If you add a new constant to the second version of Operation, it is unlikely that you’ll forget to provide an apply method
public enum Operation {
  PLUS {public double apply(double x, double y){return x + y;}},
  MINUS {public double apply(double x, double y){return x - y;}},
  TIMES {public double apply(double x, double y){return x * y;}},
  DIVIDE{public double apply(double x, double y){return x / y;}};
  public abstract double apply(double x, double y);
}
```

Enum types have an automatically generated valueOf(String) method that translates a constant’s name into the constant itself

All enums have an `ordinal()` method, which returns the numerical position of each enum constant in its type. Never derive a value associated with an enum from its ordinal; store it in an instance field instead:

```java
public enum Ensemble {
  SOLO(1), DUET(2);
  private final int numberOfMusicians;
  Ensemble(int size) { this.numberOfMusicians = size; }
  public int numberOfMusicians() { return numberOfMusicians; }
}
```

_Use EnumMap instead of ordinal indexing_
_it is generally good practice to accept the interface type rather than the implementation type_

### 21. Use marker interfaces to define types

Marker interfaces have two advantages over marker annotations. First and foremost, marker interfaces define a type that is implemented by instances of the marked class; marker annotations do not. The existence of a marker interface type allows you to catch errors at compile time that you couldn’t catch until runtime if you used a marker annotation. Another advantage of marker interfaces over marker annotations is that they can be targeted more precisely.

### 22. Prefer lambdas to anonymous classes

In Java 8, the language formalized the notion that interfaces with a single abstract method are special and deserve special treatment. These interfaces are now known as functional interfaces, and the language allows you to create instances of these interfaces using lambda expressions, or lambdas for short.

```java
// Lambda expression as function object (replaces anonymous class)
Collections.sort(words, (s1, s2) -> Integer.compare(s1.length(), s2.length()));

// can be made shorter if a comparator construction method is used in place of a lambda
Collections.sort(words, comparingInt(String::length));
```

A lambda cannot obtain a reference to itself. In a lambda, the this keyword refers to the enclosing instance, which is typically what you want. In an anonymous class, the this keyword refers to the anonymous class instance. If you need access to the function object from within its body, then you must use an anonymous class.

### 23. Prefer method references to lambdas

Here is a code snippet from a program that maintains a map from arbitrary keys to Integer values

_when lambda can be preferred:_

```java
service.execute(GoshThisClassNameIsHumongous::action);
// The lambda equivalent looks like this:
service.execute(() -> action());
```

| **Method Ref Type** | **Example**            | **Lambda Equivalent**                              |
| ------------------- | ---------------------- | -------------------------------------------------- |
| Static              | Integer::parseInt      | str -> Integer.parseInt(str)                       |
| Bound               | Instant.now()::isAfter | Instant then = Instant.now(); t -> then.isAfter(t) |
| Unbound             | String::toLowerCase    | str -> str.toLowerCase()                           |
| Class Constructor   | TreeMap<K,V>::new      | () -> new TreeMap<K,V>                             |
| Array Constructor   | int[]::new             | len -> new int[len]                                |

**Always annotate your functional interfaces with the @FunctionalInterface annotation**

### 24. Use streams judiciously

This API provides two key abstractions: the stream, which represents a finite or infinite sequence of data elements, and the stream pipeline, which represents a multistage computation on these elements.

Stream pipelines are evaluated lazily: evaluation doesn’t start until the terminal operation is invoked, and data elements that aren’t required in order to complete the terminal operation are never computed.

The streams API is **fluent**: it is designed to allow all of the calls that comprise a pipeline to be chained into a single expression. In fact, multiple pipelines can be chained together into a single expression.

```java
// Tasteful use of streams enhances clarity and conciseness
public class Anagrams {
  public static void main(String[] args) throws IOException {
    Path dictionary = Paths.get(args[0]);
    int minGroupSize = Integer.parseInt(args[1]);
    try (Stream<String> words = Files.lines(dictionary)) {
      words.collect(groupingBy(word -> alphabetize(word)))
      .values().stream()
      .filter(group -> group.size() >= minGroupSize)
      .forEach(group -> System.out.println(group.size() + ": " + group));
    }
  }
  private static String alphabetize(String s) {
    char[] a = s.toCharArray();
    Arrays.sort(a);
    return new String(a);
  }
}
```

Refrain from using streams to process char values. For e.g. `"Hello world!".chars().forEach(System.out::print);` prints `721011081081113211911111410810033` since int overloading of print is invoked.

• From a code block, you can read or modify any local variable in scope; from a lambda, you can only read final or effectively final variables [JLS 4.12.4], and you can’t modify any local variables.
• From a code block, you can return from the enclosing method, break or continue an enclosing loop, or throw any checked exception that this method is declared to throw; from a lambda you can do none of these things.

### 25. Prefer side-effect-free functions in streams

The most important part of the streams paradigm is to structure your computation as a sequence of transformations where the result of each stage is as close as possible to a pure function of the result of the previous stage.

```java
// Proper use of streams to initialize a frequency table
Map<String, Long> freq;
try (Stream<String> words = new Scanner(file).tokens()) {
  freq = words.collect(groupingBy(String::toLowerCase, counting()));
}

// Improper use--Don't do this!
Map<String, Long> freq = new HashMap<>();
try (Stream<String> words = new Scanner(file).tokens()) {
  words.forEach(word -> {
    freq.merge(word.toLowerCase(), 1L, Long::sum);
  });
}
```

The `forEach` operation is among the least powerful of the terminal operations and the least stream-friendly. **The forEach operation should be used only to report the result of a stream computation, not to perform the computation.**

The improved code uses a collector, which is a new concept that you have to learn in order to use streams. The Collectors API is intimidating: it has thirty-nine methods, some of which have as many as five type parameters. In this context, reduction means combining the elements of a stream into a single object. The object produced by a collector is typically a collection (which accounts for the name collector). There are three such collectors: toList(), toSet(), and toCollection(collectionFactory).

**The most important collector factories are toList, toSet, toMap, groupingBy, and joining.**

### 26. Prefer Collection to Stream as a return type

If an API returns only a stream and some users want to iterate over the returned sequence with a for-each loop, those users will be justifiably upset.

```java
// Adapter from Stream<E> to Iterable<E>
public static <E> Iterable<E> iterableOf(Stream<E> stream) {
  return stream::iterator;
}

// With this adapter, you can iterate over any stream with a for-each statement

for (ProcessHandle p : iterableOf(ProcessHandle.allProcesses())) {
  // Process the process
}
```

_Do not store a large sequence in memory just to return it as a collection_

The power set of {a, b, c} is {{}, {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, {a, b, c}}. If a set has n elements, its power set has 2n. Therefore, you shouldn’t even consider storing the power set in a standard collection implementation. It is, however, easy to implement a custom collection for the job with the help of AbstractList.
The trick is to use the index of each element in the power set as a bit vector, where the nth bit in the index indicates the presence or absence of the nth element from the source set. In essence, there is a natural mapping between the binary numbers from 0 to 2n − 1 and the power set of an n-element set.
It is, however, straightforward to implement a stream of all the sublists of an
input list, though it does require a minor insight. Let’s call a sublist that contains the first element of a list a prefix of the list. For example, the prefixes of (a, b, c) are (a), (a, b), and (a, b, c). Similarly, let’s call a sublist that contains the last element a suffix, so the suffixes of (a, b, c) are (a, b, c), (b, c), and (c). The insight is that the sublists of a list are simply the suffixes of the prefixes (or identically, the prefixes of the suffixes) and the empty list.

```java
// for loop version
for (int start = 0; start < src.size(); start++)
  for (int end = start + 1; end <= src.size(); end++)
    System.out.println(src.subList(start, end));

// equivalent stream
// Returns a stream of all the sublists of its input list
public static <E> Stream<List<E>> of(List<E> list) {
  return IntStream.range(0, list.size())
    .mapToObj(start ->
      IntStream.rangeClosed(start + 1, list.size())
        .mapToObj(end -> list.subList(start, end)))
    .flatMap(x -> x);
}
```

### 27. Use caution when making streams parallel

**As a rule, performance gains from parallelism are best on streams over ArrayList, HashMap, HashSet, and ConcurrentHashMap instances; arrays; int ranges; and long ranges**

Locality-of-reference turns out to be critically important for parallelizing bulk operations: without it, threads spend much of their time idle, waiting for data to be transferred from memory into the processor’s cache.

If a significant amount of work is done in the terminal operation compared to the overall work of the pipeline and that operation is inherently sequential, then parallelizing the pipeline will have limited effectiveness. The best terminal operations for parallelism are reductions, where all of the elements emerging from the pipeline are combined using one of Stream’s reduce methods, or prepackaged reductions such as `min`, `max`, `count`, and `sum`. The shortcircuiting operations `anyMatch`, `allMatch`, and `noneMatch` are also amenable to parallelism. The operations performed by Stream’s `collect` method, which are known as _mutable reductions_, are not good candidates for parallelism because the overhead of combining collections is costly.

If you _write your own_ Stream, Iterable, or Collection implementation and you want decent parallel performance, you must _override_ the `spliterator` method and test the parallel performance of the resulting streams extensively.

Replace the `forEach` terminal operation with `forEachOrdered`, which is guaranteed to traverse parallel streams in encounter order.

If you are going to parallelize a stream of random numbers, start with a SplittableRandom instance rather than a ThreadLocalRandom (or the essentially obsolete Random)

### 28. Make defensive copies when needed

```java
// Broken "immutable" time period class
public final class Period {
  private final Date start;
  private final Date end;
  // ...
}
// Attack the internals of a Period instance
Date start = new Date(); // Date is mutable
Date end = new Date();
Period p = new Period(start, end);
end.setYear(78); // Modifies internals of p!
```

As of Java 8, the obvious way to fix this problem is to use Instant (or Local-
DateTime or ZonedDateTime) in place of a Date because Instant (and the other
java.time classes) are immutable.

To protect the internals of a Period instance from this sort of attack, it is essential to make a defensive copy of each mutable parameter to the constructor and to use the copies as components of the Period instance in place of the originals

```java
// Repaired constructor - makes defensive copies of parameters
public Period(Date start, Date end) {
  this.start = new Date(start.getTime());
  this.end = new Date(end.getTime());
  if (this.start.compareTo(this.end) > 0)
    throw new IllegalArgumentException(
      this.start + " after " + this.end);
}
```

_Note that defensive copies are made before checking the validity of the parameters, and the validity check is performed on the copies rather than on the originals_

_Do not use the clone method to make a defensive copy of a parameter whose type is subclassable by untrusted parties_

### 29. Use overloading judiciously

```java
// Broken! - What does this program print?
public class CollectionClassifier {
  public static String classify(Set<?> s) {
    return "Set";
  }
  public static String classify(List<?> lst) {
    return "List";
  }
  public static String classify(Collection<?> c) {
    return "Unknown Collection";
  }
  public static void main(String[] args) {
    Collection<?>[] collections = {
      new HashSet<String>(),
      new ArrayList<BigInteger>(),
      new HashMap<String, String>().values()
      };
    for (Collection<?> c : collections)
      System.out.println(classify(c)); // compile-time type of the parameter is the same: Collection<?>
  }
}
```

You might expect this program to print Set, followed by List and Unknown Collection, but it doesn’t. It prints Unknown Collection three times. Why does this happen? Because the classify method is overloaded, and the choice of which overloading to invoke is made at compile time.

**A safe, conservative policy is never to export two overloadings with the same number of parameters.**

### 30. Return optionals judiciously

An Optional-returning method is more flexible and easier to use than one that throws an exception, and it is less error-prone than one that returns null

```java
// Returns maximum value in collection as an Optional<E>
public static <E extends Comparable<E>> Optional<E> max(Collection<E> c) {
  if (c.isEmpty())
    return Optional.empty();
  E result = null;
  for (E e : c)
    if (result == null || e.compareTo(result) > 0)
      result = Objects.requireNonNull(e);
  return Optional.of(result);
}

// Optional advantage on client
// Using an optional to provide a chosen default value
String lastWordInLexicon = max(words).orElse("No words...");
// Using an optional to throw a chosen exception
Toy myToy = max(toys).orElseThrow(TemperTantrumException::new);
```

_Never return a null value from an Optional-returning method. Optionals are similar in spirit to checked exceptions. You should never return an optional of a boxed primitive type. For performance-critical methods, it may be better to return a null or throw an exception_

### 31. Minimize the scope of local variables

The most powerful technique for minimizing the scope of a local variable is to declare it where it is first used.

_prefer for loops to while loops_

```java
// Idiom for iterating when you need the iterator
for (Iterator<Element> i = c.iterator(); i.hasNext(); ) {
  Element e = i.next();
  ... // Do something with e and i
}
// Here is another loop idiom that minimizes the scope of local variables:
for (int i = 0, n = expensiveComputation(); i < n; i++) {
  ... // Do something with i;
}
```

Where you can’t use for-each:

- Destructive filtering - traversing a collection requires explicit iterator so that you can call its remove method
- Transforming
- Parallel iteration - If you need to traverse multiple collections in parallel, then you need explicit control over the iterator or index variable so that all iterators or index variables can be advanced in lockstep

Not only does the for-each loop let you iterate over collections and arrays, it lets you iterate over any object that implements the Iterable interface, which consists of a single method: `Iterator<E> iterator()`

### 32. Know and use the libraries

The random number generator of choice is now ThreadLocalRandom. For fork join pools and parallel streams, use SplittableRandom.

Numerous features are added to the libraries in every major release, and it pays to keep abreast of these additions. Each time there is a major release of the Java platform, a web page is published describing its new features. These pages are well worth reading [Java8-feat, Java9-feat].

### 33. Avoid float and double if exact answers are required

**The float and double types are particularly ill-suited for monetary calculations**

```java
// Broken - uses floating point for monetary calculation!
public static void main(String[] args) {
  double funds = 1.00;
  int itemsBought = 0;
  for (double price = 0.10; funds >= price; price += 0.10) {
    funds -= price;
    itemsBought++;
  }
  System.out.println(itemsBought + " items bought."); // 3 pieces
  System.out.println("Change: $" + funds); // $0.3999999999999999 left
}
// The right way to solve this problem is to use BigDecimal, int, or long for monetary calculations
// Note that BigDecimal’s String constructor is used rather than its double constructor. This is required in order to avoid introducing inaccurate values into the computation

public static void main(String[] args) {
  final BigDecimal TEN_CENTS = new BigDecimal(".10");
  int itemsBought = 0;
  BigDecimal funds = new BigDecimal("1.00");
  for (BigDecimal price = TEN_CENTS; funds.compareTo(price) >= 0; price = price.add(TEN_CENTS)) {
    funds = funds.subtract(price);
    itemsBought++;
  }
  System.out.println(itemsBought + " items bought."); // 4 pieces
  System.out.println("Money left over: $" + funds); // 0.00$ left over
}
```

Using BigDecimal has the added advantage that it gives you full control over rounding, letting you select from eight rounding modes whenever an operation that entails rounding is performed.

### 34. Prefer primitive types to boxed primitives

First, primitives have only their values, whereas boxed primitives have identities distinct from their values.

```java
/*
Consider the below program. It throws a NullPointerException
when evaluating the expression i == 42.
The problem is that i is an Integer, not an int, and
like all nonconstant object reference fields, its
initial value is null.
*/
public class Unbelievable {
  static Integer i;
  public static void main(String[] args) {
    if (i == 42)
      System.out.println("Unbelievable");
  }
}

// Hideously slow program! Because sum is repeatedly boxed and unboxed
public static void main(String[] args) {
  Long sum = 0L;
  for (long i = 0; i < Integer.MAX_VALUE; i++) {
    sum += i;
  }
  System.out.println(sum);
}
```

_when you mix primitives and boxed primitives in an operation, the boxed primitive is auto-unboxed_

When to use boxed primitives?

- keys and values in collections
- as type parameters in parameterized types and methods e.g. ThreadLocal<Integer>
- reflective method invocations

### 35. Avoid strings where other types are more appropriate

Strings are poor substitutes for enum types. Strings are poor substitutes for aggregate types. Strings are poor substitutes for capabilities.

```java
// Inappropriate use of string as aggregate type
String compoundKey = className + "#" + i.next();
```

### 36. Beware the performance of string concatenation

Using the string concatenation operator repeatedly to concatenate n strings requires time quadratic in n. This is an unfortunate consequence of the fact that strings are immutable. When two strings are concatenated, the contents of both are copied.

To achieve acceptable performance, use a StringBuilder in place of a String.

### 37. Refer to objects by their interfaces

If appropriate interface types exist, then parameters, return values, variables, and fields should all be declared using interface types.

```java
// Good - uses interface as type
Set<Son> sonSet = new LinkedHashSet<>();
// Bad - uses class as type!
LinkedHashSet<Son> sonSet = new LinkedHashSet<>();
```

### 38. Use native methods judiciously

It is rarely advisable to use native methods for improved performance. The use of native methods has serious disadvantages. Because native languages are not safe, applications using native methods are no longer immune to memory corruption errors.

### 39. Adhere to generally accepted naming conventions

The Java platform has a well-established set of naming conventions, many of which are contained in The Java Language Specification.

- Package and module names should be hierarchical with the components separated by periods.
- Components should consist of lowercase alphabetic characters and, rarely, digits. Components should be short, generally eight or fewer characters.
- Class and interface names, including enum and annotation type names, should consist of one or more words, with the first letter of each word capitalized, for example, List or FutureTask.
- Local variable names have similar typographical naming conventions to member names, except that abbreviations are permitted, as are individual characters and short sequences of characters whose meaning depends on the context in which they occur, for example, i, denom, houseNum.
- Type parameter names usually consist of a single letter. Most commonly it is one of these five: T for an arbitrary type, E for the element type of a collection, K and V for the key and value types of a map, and X for an exception. The return type of a function is usually R. A sequence of arbitrary types can be T, U, V or T1, T2, T3.
- Interfaces are named like classes, for example, Collection or Comparator, or with an adjective ending in able or ible, for example, Runnable, Iterable, or Accessible.

### 40. Synchronize access to shared mutable data

Synchronization is required for reliable communication between threads as well as for mutual exclusion. Do not use Thread.stop.

A recommended way to stop one thread from another is to have the first thread poll a boolean field that is initially false but can be set to true by the second thread to indicate that the first thread is to stop itself.

```java
// Synchronization is not guaranteed to work unless both read and write operations are synchronized
// Properly synchronized cooperative thread termination
public class StopThread {
  private static boolean stopRequested;
  private static synchronized void requestStop() {
    stopRequested = true;
  }
  private static synchronized boolean stopRequested() {
    return stopRequested;
  }
  public static void main(String[] args) throws InterruptedException {
    Thread backgroundThread = new Thread(() -> {
      int i = 0;
      while (!stopRequested())
        i++;
    });
    backgroundThread.start();
    TimeUnit.SECONDS.sleep(1);
    requestStop();
  }
}

// A better optimized version which avoids synchronization on each iteration of loop
// Cooperative thread termination with a volatile field
public class StopThread {
  private static volatile boolean stopRequested;
  public static void main(String[] args) throws InterruptedException {
    Thread backgroundThread = new Thread(() -> {
      int i = 0;
      while (!stopRequested)
        i++;
    });
    backgroundThread.start();
    TimeUnit.SECONDS.sleep(1);
    stopRequested = true;
  }
}
```

Use the class AtomicLong, which is part of java.util.concurrent.atomic. This package provides primitives for lock-free, thread-safe programming on single variables.

### 41. Avoid excessive synchronization

To avoid liveness and safety failures, never cede control to the client within a synchronized method or block. In other words, inside a synchronized region, do not invoke a method that is designed to be overridden, or one provided by a client in the form of a function object.

The libraries provide a concurrent collection known as CopyOnWriteArrayList that is tailor-made for this purpose. This List implementation is a variant of ArrayList in which all modification operations are implemented by making a fresh copy of the entire underlying array. Because the internal array is never modified, iteration requires no locking and is very fast.

```java
// Thread-safe observable set with CopyOnWriteArrayList
private final List<SetObserver<E>> observers = new CopyOnWriteArrayList<>();
public void addObserver(SetObserver<E> observer) {
  observers.add(observer);
}
public boolean removeObserver(SetObserver<E> observer) {
  return observers.remove(observer);
}
private void notifyElementAdded(E element) {
  for (SetObserver<E> observer : observers)
    observer.added(this, element);
}
```

As a rule, you should do as little work as possible inside synchronized regions.

In a multicore world, the real cost of excessive synchronization is not the CPU time spent getting locks; it is _contention_: the lost opportunities for parallelism and the delays imposed by the need to ensure that every core has a consistent view of memory. Another hidden cost of oversynchronization is that it can limit the VM’s ability to optimize code execution.

If you are writing a mutable class, you have two options: you can omit all synchronization and allow the client to synchronize externally if concurrent use is desired, or you can synchronize internally, making the class thread-safe. You should choose the latter option only if you can achieve significantly higher concurrency with internal synchronization than you could by having the client lock the entire object externally. The collections in java.util (with the exception of the obsolete Vector and Hashtable) take the former approach, while those in java.util.concurrent take the latter.

If you do synchronize your class internally, you can use various techniques to achieve high concurrency, such as lock splitting, lock striping, and nonblocking concurrency control.

### 42. Prefer executors, tasks, and streams to threads

You can do many more things with an executor service. For example, you can wait for a particular task to complete (with the get method), you can wait for any or all of a collection of tasks to complete (using the invokeAny or invokeAll methods), you can wait for the executor service to terminate (using the awaitTermination method), you can retrieve the results of tasks one by one as they complete (using an ExecutorCompletionService), you can schedule tasks to run at a particular time or to run periodically (using a ScheduledThreadPoolExecutor), and so on.

For a small program, or a lightly loaded server, Executors.newCachedThreadPool is generally a good choice. In this tasks are immediately handed off to a thread for execution and if no threads are avaiable then new one is created. Therefore, in a heavily loaded production server, you are much better off using Executors.newFixedThreadPool, which gives you a pool with a fixed number of threads, or using the ThreadPoolExecutor class directly, for maximum control.

In the executor framework, the unit of work and the execution mechanism are separate. The key abstraction is the unit of work, which is the task. There are two kinds of tasks: _Runnable_ and its close cousin, _Callable_ (which is like Runnable, except that it returns a value and can throw arbitrary exceptions). The general mechanism for executing tasks is the _executor service_.

Parallel streams are written atop fork join pools and allow you to take advantage of their performance benefits (ForkJoinPool not only process tasks but “steal” tasks from one another to ensure that all threads remain busy) with little effort, assuming they are appropriate for the task at hand.

### 43. Prefer concurrency utilities to wait and notify

Given the difficulty of using wait and notify correctly, you should use the higher-level concurrency utilities instead.

The concurrent collections are high-performance concurrent implementations of standard collection interfaces such as List, Queue, and Map. To provide high concurrency, these implementations manage their own synchronization internally.

ConcurrentHashMap is optimized for retrieval operations, such as get. Use ConcurrentHashMap in preference to Collections.synchronizedMap.

As you’d expect, most ExecutorService implementations, including ThreadPoolExecutor, use a BlockingQueue. BlockingQueue extends Queue and adds several methods, including take, which removes and returns the head element from the queue, waiting if the queue is empty.

_Synchronizers_ are objects that enable threads to wait for one another, allowing them to coordinate their activities. The most commonly used synchronizers are CountDownLatch and Semaphore. Less commonly used are CyclicBarrier and Exchanger. The most powerful synchronizer is Phaser.

It is sometimes said that you should always use notifyAll.

### 44. Use lazy initialization judiciously

Lazy initialization is the act of delaying the initialization of a field until its value is needed. This technique is applicable to both static and instance fields.

```java
// Normal initialization of an instance field
private final FieldType field = computeFieldValue();
// If you use lazy initialization to break an initialization circularity, use a synchronized accessor because it is the simplest, clearest alternative:

// Lazy initialization of instance field - synchronized accessor
private FieldType field;
private synchronized FieldType getField() {
  if (field == null)
    field = computeFieldValue();
  return field;
}
```

If you need to use lazy initialization for performance on a static field, use the lazy initialization holder class idiom.

```java
// Lazy initialization holder class idiom for static fields
private static class FieldHolder {
  static final FieldType field = computeFieldValue();
}
private static FieldType getField() { return FieldHolder.field; }
// When getField is invoked for the first time, it reads FieldHolder.field for the first time, causing the initialization of the FieldHolder class.
```

If you need to use lazy initialization for performance on an instance field, use the double-check idiom. This idiom avoids the cost of locking when accessing the field after initialization.

```java
// Double-check idiom for lazy initialization of instance fields
private volatile FieldType field;
private FieldType getField() {
  FieldType result = field;
  if (result == null) { // First check (no locking)
    synchronized(this) {
      if (field == null) // Second check (with locking)
        field = result = computeFieldValue();
    }
  }
  return result;
}
```

While you can apply the double-check idiom to static fields as well, there is no reason to do so: the lazy initialization holder class idiom is a better choice.

### 45. Don’t depend on the thread scheduler

Any program that relies on the thread scheduler for correctness or performance is likely to be nonportable. The best way to write a robust, responsive, portable program is to ensure that the average number of runnable threads is not significantly greater than the number of processors. Note that the number of runnable threads isn’t the same as the total number of threads, which can be much higher.

In terms of the Executor Framework, this means sizing thread pools appropriately and keeping tasks short, but not too short, or dispatching overhead will harm performance.

When faced with a program that barely works because some threads aren’t getting enough CPU time relative to others, resist the temptation to “fix” the program by putting in calls to Thread.yield.

Thread priorities are among the least portable features of Java.

### Keywords

- Covariant Return Typing - A subclass method is declared to return a subtype of the return type declared in the superclass.

- Adapter: An adapter is an object that delegates to a backing object, providing an alternative interface. Because an adapter has no state beyond that of its backing object, there’s no need to create more than one instance of a given adapter to a given object.

- Obsolete reference: An obsolete reference is simply a reference that will never be dereferenced again.

- Fluent: designed to allow all of the calls that comprise a pipeline to be chained into a single expression

- Open call: An alien method invoked outside of a synchronized region is known as an open call.

- Spurious wakeup: The waiting thread could (rarely) wake up in the absence of a notify. This is known as a spurious wakeup.

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

- Method references were introduced. A complex lambda can also be pushed into a static or instance method and then used via a method reference instead.

  ```java
  onShutdown(new Runnable() {
      @Override
      public void run() {
          service.stop();
      }
  });

  // with lambdas
  onShutdown(() -> service.stop());

  // with method references
  onShutdown(service::stop);
  ```

- `computeIfAbsent()` added in Java 8, looks up a key in the map: If the key is present, the method simply returns the value associated with it. If not, the method computes a value by applying the given function object to the key, associates this value with the key, and returns the computed value.

- In Java 8, streams were added to the platform, substantially complicating the task of choosing the appropriate return type for a sequence-returning method

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
