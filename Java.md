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

## Effective Java

1. Consider static factory methods instead of constructors

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

2. Consider a builder when faced with many constructor parameters

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

3. Enforce the singleton property with a private constructor or an enum type

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

4. Enforce noninstantiability with a private constructor

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

5. Prefer dependency injection to hardwiring resources

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

6. Avoid creating unnecessary objects

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

7. Eliminate obsolete object references

The fix for this sort of problem is simple: null out references once they become obsolete.
_Nulling out object references should be the exception rather than the norm._

Common sources of memory leaks are: caches, listeners and other callbacks.

Such memory leaks can be identified by _heap profiler_

8. Avoid finalizers and cleaners

**Use of implements AutoCloseable or [try-with-resources/try-finally](https://www.baeldung.com/java-try-with-resources)**

As of Java 9, finalizers have been deprecated, but they are still being used by the Java libraries. The Java 9 replacement for finalizers is cleaners. Cleaners are less dangerous than finalizers, but still unpredictable, slow, and generally unnecessary.

_Never do anything time-critical in a finalizer or cleaner_
_Never depend on a finalizer or cleaner to update persistent state. E.g. clearing lock on DB_
_To protect nonfinal classes from finalizer attacks, write a final finalize method that does nothing_

FileInputStream, FileOutputStream, ThreadPoolExecutor, and java.sql.Connection, have finalizers that serve as safety nets -- free the resource if user forgets to

9. Prefer try-with-resources to try-finally

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

10. Consider implementing Comparable

If you are writing a value class with an obvious natural ordering, such as alphabetical order, numerical order, or chronological order, you should implement the Comparable interface.

```java
/**
Compares this object with the specified object for order. Returns a negative integer, zero, or a positive integer as this object is less than, equal to, or greater than the specified object.
*/
public interface Comparable<T> {
  int compareTo(T t);
}
```

### Keywords

- Covariant Return Typing - A subclass method is declared to return a subtype of the return type declared in the superclass.

- Adapter: An adapter is an object that delegates to a backing object, providing an alternative interface. Because an adapter has no state beyond that of its backing object, there’s no need to create more than one instance of a given adapter to a given object.

- Obsolete reference: An obsolete reference is simply a reference that will never be dereferenced again.

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
