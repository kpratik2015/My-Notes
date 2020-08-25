# Misc

HTTP Methods {
GET
POST
PUT
HEAD
DELETE
PATCH
OPTIONS
}
Microservices {
Microservices design patterns are software design patterns that generates reusable autonomous services.
Command Query Responsibility Segregation - command action Query data
}
DataOps {
Build
Operate
Evangelize
}

# Java 5/6/7 Features - https://www.javatpoint.com/New-features-in-java

- For-each loop (Java 5)
- Varargs (Java 5)
- Static Import (Java 5)
- Autoboxing and Unboxing (Java 5)
- Enum (Java 5)
- Covariant Return Type (Java 5)
- Annotation (Java 5)
- Generics (Java 5)
- Instrumentation (premain method) (Java 6)
- String in switch statement (Java 7)
- Binary Literals (Java 7)
- The try-with-resources (Java 7)
- Caching Multiple Exceptions by single catch (Java 7)
- Underscores in Numeric Literals (Java 7)

# Java 8 Features - https://www.journaldev.com/2389/java-8-features-with-examples

- forEach() method in Iterable interface
- default and static methods in Interfaces
- Functional Interfaces and Lambda Expressions
- Java Stream API for Bulk Data Operations on Collections
- Java Time API
- Collection API improvements
- Concurrency API improvements
- Java IO improvements
- Miscellaneous Core API improvements

# Java 9 Features - https://www.journaldev.com/13121/java-9-features-with-examples

- Java 9 REPL (JShell)
- Factory Methods for Immutable List, Set, Map and Map.Entry
- Private methods in Interfaces
- Java 9 Module System
- Process API Improvements
- Try With Resources Improvement
- CompletableFuture API Improvements
- Reactive Streams
- Diamond Operator for Anonymous Inner Class
- Optional Class Improvements
- Stream API Improvements
- Enhanced @Deprecated annotation
- HTTP 2 Client
- Multi-Resolution Image API
- Miscellaneous Java 9 Features

# Java 10 Features - https://www.journaldev.com/20395/java-10-features

- Time-Based Release Versioning (JEP 322)
- Local-Variable Type Inference (JEP 286)
- Experimental Java-Based JIT Compiler (JEP 317)
- Application Class-Data Sharing (JEP 310)
- Parallel Full GC for G1 (JEP 307)
- Garbage-Collector Interface (JEP 304)
- Additional Unicode Language-Tag Extensions (JEP 314)
- Root Certificates (JEP 319)
- Thread-Local Handshakes (JEP 312)
- Heap Allocation on Alternative Memory Devices (JEP 316)
- Remove the Native-Header Generation Tool – javah (JEP 313)
- Consolidate the JDK Forest into a Single Repository (JEP 296)
- API Changes

# Java 11 Features - https://www.journaldev.com/24601/java-11-features

- Running Java File with single command
- Java String Methods
- Local-Variable Syntax for Lambda Parameters
- Nested Based Access Control
- JEP 309: Dynamic Class-File Constants
- JEP 318: Epsilon: A No-Op Garbage Collector
- JEP 320: Remove the Java EE and CORBA Modules
- JEP 328: Flight Recorder
- JEP 321: HTTP Client
- Reading/Writing Strings to and from the Files
- JEP 329: ChaCha20 and Poly1305 Cryptographic Algorithms
- JEP 315: Improve Aarch64 Intrinsics
- JEP 333: ZGC: A Scalable Low-Latency Garbage Collector (Experimental)
- JEP 335: Deprecate the Nashorn JavaScript Engine

# Java 12 Features - https://www.journaldev.com/28666/java-12-features

- JEP 189 – Shenandoah: A Low-Pause-Time Garbage Collector (Experimental)
- JEP 346 – Promptly Return Unused Committed Memory from G1
- JEP 344 : Abortable Mixed Collections for G1
- JEP 230 and 344
- JEP 341 Default CDS Archives- Language Changes And Features
- Switch Expressions (Preview)
- File.mismatch method
- Compact Number Formatting
- Teeing Collectors
- Java Strings New Methods
- JEP 334: JVM Constants API
- JEP 305: Pattern Matching for instanceof (Preview)

# Java 13 Features - https://www.journaldev.com/33204/java-13-features

- Text Blocks – JEP 355
- New Methods in String Class for Text Blocks
- Switch Expressions Enhancements – JEP 354
- Reimplement the Legacy Socket API – JEP 353
- Dynamic CDS Archive – JEP 350
- ZGC: Uncommit Unused Memory – JEP 351
- FileSystems.newFileSystem() Method
- DOM and SAX Factories with Namespace Support
  Type inference
  Unicode vs Ascii { - Character : Reader/Writer - Byte : IO Stream
  }
  32 bit vs 64 bit machines {
  32-bit system you can theoretically allocate up to 4GB of memory per process
  64-bit system you can theoretically allocate up to 17.2 BILLION GB of memory per process
  }
  Object Oriented Principles {
  Abstraction (Interface) is the process of exposing the essential details of an entity, while ignoring the irrelevant details, to reduce the complexity for the users.
  Encapsulation (private) is the process of bundling data and operations on the data together in an entity.
  Inheritance is used to derive a new type from an existing type, thereby establishing a parent-child relationship.
  Polymorphism lets an entity take on different meanings in different contexts. - IS A : Inheritance - HAS A : Composition - Association (No Ownership) > Aggregation (Less ownership but still both can exist) > Composition (Ownership and both needs to be deleted in case) - Overloading - static binding (private, static, final) - Overriding - dynamic binding
  Coupling and Cohesion : Loose Coupling and High Cohesive
  }

Java Virtual Machine {
JVM > JRE > Serial, Parallel, CMS, G1, Epsilon, ZGC, Shenandoah
Stack based
Barriers
Network byte order: big-endian
}
Java Memory Model {
Heap {
Generations { - Young (MinorGC): Eden, Survior Space (s0,s1) - Old (MajorGC): Tenured - Mark and Sweep, Compaction and Contiguos
}
Permanant Generation - Method Area
Constant Pool
}
Stack {

    }

}
Java Class Loader {
Features - Hierarchical, Delegation, Uniqueness, Visibility - bootstrap - extended - system -> user defined
Loading -> Linking ( Verifying -> Preparing -> Resolving ) -> Initializing
}
Java {
Exception { - Throwable - Throw/Throws - Exception - RuntimeException
}
Jdbc { - JDBC Drivers {
Type 1: JDBC-ODBC bridge JDBC driver
Type 2: Java + Native code JDBC driver
Type 3: All Java + Middleware translation JDBC driver
Type 4: All Java JDBC driver
} - Result Set {
Type - ResultSet.TYPE_FORWARD_ONLY, ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.TYPE_SCROLL_SENSITIVE
Concurrency - ResultSet.CONCUR_READ_ONLY, ResultSet.CONCUR_UPDATABLE
Holdability - ResultSet.CLOSE_CURSORS_OVER_COMMIT, ResultSet.HOLD_CURSORS_OVER_COMMIT
} - Isolation Levels { - Dirty Read: Non commited Read - Non Repeatable read: Row data difference - Phantom Read: Number of rows differ
Read Uncommitted
Read Committed - Avoid dirty read
Repeatable Read – Avoid ( dirty read + non-repeatable read )
Serializable – Avoid ( dirty read + non-repeatable read + Phantom read )
}
}
DataTypes {
primitive/non-primitive or reference
boolean - 1 bit unsigned
char - 16 bit (2^15-1) unsigned
byte - 8 bit (2^7-1) signed
short - 16 bit (2^15-1) signed
int - 32 bit (2^31-1) signed
long - 64 bit (2^63-1) signed
float - 32 bit (2^31-1) signed
double - 64 bit (2^63-1) signed
Wrapper classes - Boolean, Byte, Short, Character, Integer, Long, Float and Double
Auto Boxing - Primitive to wrapper classes
Narrowing or Explicit Conversion
Widening or Automatic Type Conversion
}
Annotations {
Repetable
Retention - document, compile, runtime
Target - Type, Methods
Inherited
Documented
}
Reflection {
Noclassdeffound
Exception in case jar not found during dynamic class loading
Error in case static classloading
}
Generics {
Upper bounded wildcards
Lower bounded wildcards
}
Concurrency {
Thread Cache {

- Cached everything for each thread stack
  }
  Concurrency Models { - Shared state concurrency model - Shared nothing or separate state - Parallel Workers - Assembly Line { Actors vs. Channels } - Functional Parallelism - Same-threading - Notes {
  idempotency in threads/tasks/processes - no side effect
  Deterministic vs Nondeterministic running algorithms - same or different output sequence
  Persistent data structures - CopyonWrite and then merge
  }
  }
  Thread { - Critical section <-> Race conditions - Deadlock - Nested Monitor Lockout - Starvation: fairness using fairlock
  }
  Thread States {
  NEW - A thread that has not yet started is in this state.
  RUNNABLE - A thread executing in the Java virtual machine is in this state.
  BLOCKED - A thread that is blocked waiting for a monitor lock is in this state.
  WAITING - A thread that is waiting indefinitely for another thread to perform a particular action is in this state.
  TIMED_WAITING - A thread that is waiting for another thread to perform an action for up to a specified waiting time is in this state.
  TERMINATED - A thread that has exited is in this state.
  }
  Thread Signaling { - wait(), notify() and notifyAll() - Missed Signals - Spurious Wakeups : spin lock - Slipped Conditions
  }
  Thread Synchronizers { - Phaser - reusable - arriveAndAwaitAdvance in phases - lock - Semaphore - barriers - reusable - CyclicBarrier - latches
  }
  ThreadLocal and InheritableThreadLocal
  Semaphore - Number of threads and fairness flag , binary semaphore
  Exchanger - Object exchanger among threads
  Lock { - reentrant Lock - readwrite lock - lock/release
  }
  Barrier - Reusable - all threads meeting at same point - CyclicBarrier - await
  Latch - Countdownloatch - await/countDown
  Executor {
  ExecutorService - SingleThreadExecutor/FixedThreadPool/ScheduledThreadPool
  Execute
  Submit return Future
  FutureTask implements Future
  }
  }
  Collections {
  Serializable,Externalizable,Cloneable,Collection,Comparable(compareTo),
  Comparator(compare O1vsO2),Spliterator,Skip List,Iterable,Iterator(ListIterator),Array,Dictionary  
   List {
  RandomAccess {
  Vector : The Vector class implements a growable array of objects. synchronized {
  Stack : The Stack class represents a last-in-first-out (LIFO) stack of objects.
  }
  ArrayList : Resizable-array implementation of the List interface. {
  CopyOnWriteArrayList : A thread-safe variant of ArrayList in which all mutative operations
  (add, set, and so on) are implemented by making a fresh copy of the underlying array.
  }
  }
  LinkedList : Doubly-linked list implementation of the List and Deque interfaces.
  }
  Map {
  EnumMap : A specialized Map implementation for use with enum type keys.
  HashMap : Hash table based implementation of the Map interface. {
  LinkedHashMap : Hash table and linked list implementation of the Map interface, with predictable iteration order.
  ConcurrentMap {
  ConcurrentHashMap : A hash table supporting full concurrency of retrievals and high expected concurrency for updates.
  ConcurrentNavigableMap (<- NavigableMap){
  ConcurrentSkipListMap : A scalable concurrent ConcurrentNavigableMap implementation.
  }
  }
  }
  WeakHashMap : Hash table based implementation of the Map interface, with weak keys.
  IdentityHashMap : This class implements the Map interface with a hash table, using reference-equality in place of object-equality when comparing keys (and values).
  Hashtable : This class implements a hash table, which maps keys to values. synchronized.( -> Dictionary ) {
  Properties : The Properties class represents a persistent set of properties.
  }
  SortedMap {
  NavigableMap {
  TreeMap : A Red-Black tree based NavigableMap implementation.
  }
  }
  }
  Set {
  EnumSet : A specialized set implementation for use with enum types.
  HashSet {
  LinkedHashSet : Hash table and linked list implementation of the Set interface, with predictable iteration order.
  }
  CopyOnWriteArraySet : A Set that uses an internal CopyOnWriteArrayList for all of its operations.
  SortedSet {
  NavigableSet {
  TreeSet : A NavigableSet implementation based on a TreeMap.
  ConcurrentSkipListSet : A scalable concurrent NavigableSet implementation based on a ConcurrentSkipListMap.
  }
  }
  }
  Queue ( <- LinkedList ) {
  ConcurrentLinkedQueue : An unbounded thread-safe queue based on linked nodes.
  PriorityQueue : An unbounded priority queue based on a priority heap.
  BlockingQueue {
  ArrayBlockingQueue : A bounded blocking queue backed by an array.
  DelayQueue : An unbounded blocking queue of Delayed elements, in which an element can only be taken when its delay has expired. (Delayed)
  PriorityBlockingQueue : An unbounded blocking queue that uses the same ordering rules as class PriorityQueue and supplies blocking retrieval operations.
  SynchronousQueue : A blocking queue in which each insert operation must wait for a corresponding remove operation by another thread, and vice versa.
  LinkedBlockingQueue : An optionally-bounded blocking queue based on linked nodes.
  TransferQueue {
  LinkedTransferQueue : An unbounded TransferQueue based on linked nodes.
  }
  }
  Deque ( <- LinkedList ) {
  ArrayDeque : Resizable-array implementation of the Deque interface.
  ConcurrentLinkedDeque : An unbounded concurrent deque based on linked nodes.
  BlockingDeque {
  LinkedBlockingDeque : An optionally-bounded blocking deque based on linked nodes.
  }
    
   }
  Queue -> add, remove, poll(get+remove), element(throws Exception), peek -> add, poll, peek
  Deque -> addFirst/addLast, pollFirst/pollLast, peekFirst/peekLast
  }
  }
  IO {
  }
  NIO {
  flip
  }
  Serialisation {

      }
      Security {

      }
      Enum {
      }

  }
  Data Structure and Alogorithms {
  https://www.educba.com/data-structure-java-interview-questions/
  Array - Random data access, homogeneous data in contiguous memory locations
  Linklist - Squential data access, scattered, Simple, Doubly, Circular, Circular-doubly
  Tree {
  https://www.educba.com/types-of-trees-in-data-structure/
  Binary Tree
  Binary Search Tree - Sorted Order Elements
  Red-Black Tree {
  A red-black tree is a binary search tree which has the following red-black properties:
  Every node is either red or black.
  Every leaf (NULL) is black.
  If a node is red, then both its children are black.
  Every simple path from a node to a descendant leaf contains the same number of black nodes.
  }
  }
  Quque
  Stack
  Linear Search
  Binary Search - Elements should be sorted
  Bubble Sort
  Quick Sort - Dual Pivot
  Merge Sort
  Insertion Sort  
  }

Design Principles {
S - Single Responsibility - One class should have one and only one responsibility
O - Open Closed - Open for extension, but closed for modification
L - Liskov’s Substitution - superclass and subclass interchangable
I - Interface Segregation - Clients should not be forced to implement unnecessary methods which they will not use
D - Dependency Inversion - Depend on abstractions, not on concretions
}

Java best Practices { - Package by feature, not layer, Avoid ripple efect
}

Java Design Patterns {
Creational Design Patterns { - Builder - Fluent like StringBuilder - Prototype - Deep or shallo cloning - Factory - SessionFactory - Abstract Factory - Spring's FactoryBean - Singleton - Per classloader one instance, No clone, eager or lazy, doubly check, Enum
}
Structural Design Patterns { - Adapter convert the interface of a class into another interface clients expect.
It lets classes work together that couldn’t otherwise because of incompatible interfaces. - Bridge design pattern is used to decouple a class into two parts – abstraction and it's implementation – so that both can evolve in future without affecting each other. It increases the loose coupling between class abstraction and it's implementation. - Composite - Parent child relationship - Decorator design pattern is used to add additional features or behaviors to a particular instance of a class, while
not modifying the other instances of same class. - Facade - Service Composition - Flyweight - Object caching list String Pool - Proxy design pattern - [ Cglib vs Javassist vs Jdkproxy ]
}
Behavioral Design Patterns { - Chain of responsibility design pattern gives more than one object an opportunity to handle a request by linking
receiving objects together in form of a chain. - Command - Runnable - Interpreter pattern specifies how to evaluate sentences in a language, programatically.
It helps in building a grammar for a simple language, so that sentences in the language can be interpreted. - Iterator - ListIterator - Mediator pattern defines an object that encapsulates how a set of objects interact.
Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets us vary
their interaction independently. - Memento pattern - UnDo - Observer pattern defines a one-to-many dependency between objects so that when one object changes state,
all its dependents are notified and updated automatically. It is also referred to as the publish-subscribe pattern. - State pattern allows an object to alter its behavior when its internal state changes.
The object will appear to change its class. There shall be a separate concrete class per possible state of an object. - Strategy pattern is used where we choose a specific implementation of algorithm or task in run time – out of
multiple other implementations for same task. - Template method - JDBCTemplate
can provide a default implementation as well (based on requirements). - Visitor pattern is used when we want a hierarchy of objects to modify their behavior but without modifying their source code.
}
}
J2ee Design Patterns { - MVC Pattern - Business Delegate Pattern is used to decouple the presentation layer from the business layer to
minimize the number of requests between the client (presentation) and the business tiers. - Composite Entity Pattern represents a graph of objects, which when updated, triggers an update for all the
dependent entities in the graph.

- Data Access Object pattern, most often shortened to DAO is a pattern in which objects are dedicated to the
  communication with the Data Layer. - Front Controller is the first controller it reaches. Based on the request, it decides
  which controller is the most adequate to handle it, after which it passes the request to the chosen controller. - Intercepting Filter Pattern is used before the request is even passed to the adequate controllers for processing.
  These filters can exist in the form of a Filter Chain and include multiple filters, or simply exist as one Filter. - Service Locator pattern is used to decouple the Service Consumers and the concrete classes like DAO implementations. - Transfer objects with lots of fields and parameters in one go. The Transfer Object pattern employs new objects,
  used only for transfer purposes, usually passed to the DAO.
  }
  AOP {
  Joinpoint: Actual methods
  Pointcut: Expression
  Advice: Before, Arround(ProceedingJoinPoint), After, Onreturning, OnException
  }
  Oracle {
  Types of Tables in Database {
  https://www.databasejournal.com/features/oracle/article.php/3616476/Types-of-Tables-in-Oracle.htm
  Stage tables - inboud data
  Operational tables
  Functional tables - master
  Disposition tables - outbound data
  Archive tables
  Log/Audit
  }
  Partitioning {

      }
      Statement Types {
          DDL - Data Definition Language
          DML - Data Manipulation Language
          DCL - Data Control Language
          TCL - Transaction Control {
              COMMIT	Saves all the pending transaction
              ROLLBACK	Discard all the pending transaction
              SAVEPOINT	Creates a point in the transaction till which rollback can be done later
              ROLLBACK TO	Discard all the pending transaction till the specified <save point>
              PRAGMA AUTONOMOUS_TRANSACTION
          }
      }
      Table {
          Heap-organized table - default table
          Index-organized table
          Object table
          Hash clustered table
          Nested table
          Index cluster table
          Global temporary table
          Private temporary table
          External table
          Partitioned table
      }
      Identity Column : AUTO_INCREMENT {
          GENERATED ALWAYS
          GENERATED BY DEFAULT
          GENERATED BY DEFAULT ON NULL
      }
      PRAGMA {
          - Refers to a compiler directive or "hint"
          - PRAGMA AUTONOMOUS_TRANSACTION: This pragma can perform an autonomous transaction within a PL/SQL block between a BEGIN and
                END statement without affecting the entire transaction.
          - PRAGMA SERIALLY_REUSABLE: This directive tels Oracle that the package state is needed only for the duration of one lcall to the server. After the call is made the package may be unloaded to reclaim memory.
          - PRAGMA EXCEPTION_INIT: This directive binds a user defined exception to a particular error number.
          - PRAGMA INLINE:  This directive specifies that a subprogram call either is or is not to be inlined.
                Inlining replaces a subprogram call with a copy of the called subprogram.
      }
      SQL Loader {
          deliminited or fixed width data files
          Data Load - insert(erro for non empy table), append, truncate
          Input - parameter, data, control
          Output - Log, Discard, Bad, dataintable
      }
      SQL Plus {
          Spooling and Reporting(deliminited, html)
          http://www.sql-plus.com/sql-plus-set-commands.php
      }
      Analytical functions - RANK
      Types of Indexes -
      Query Hints
      EXP/IMP vs expdp/impdm
      synonym - dblink
      Querying data {
          SELECT
      }
      Sorting data {
          ORDER BY
      }
      Filtering data {
          DISTINCT
          WHERE
          AND
          OR
          FETCH – OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY
          IN/NOT IN
          BETWEEN
          LIKE/NOT LIKE
          IS NULL and IS NOT NULL
      }
      Joining tables {
          EQUI JOIN*
          INNER JOIN – show you how to query rows from a table that have matching rows from another table.
          LEFT JOIN – introduce you to the left-join concept and learn how to use it to select rows from the left table that have or don’t have the matching rows in the right table.
          RIGHT JOIN – explain the right-join concept and show you how to apply it to query rows from the right table that have or don’t have the matching rows in the left table.
          FULL OUTER JOIN – describe how to use the full outer join or full join to query data from two tables.
          CROSS JOIN – cover how to make a Cartesian product from multiple tables.
          Self-join – show you how to join a table to itself to query hierarchical data or compare rows within the same table.
          NATURAL JOIN*
      }
      Subquery {
          Subquery/Inner
          Correlated Subquery - inner query that depends on the values returned by the outer query.
          EXISTS and NOT EXISTS – check for the existence of rows returned by a subquery.
          ANY, SOME, and ALL – compare a value to a list or subquery. Note that SOME and ANY are the same so they are interchangeable.
      }
      Set Operators {
          UNION/UNION ALL
          INTERSECT
          MINUS or EXCEPT
      }
      Grouping data {
          GROUP BY
          HAVING
      }
      More Groupings {
          Grouping sets – introduce you to the grouping set concepts and show you how to generate multiple grouping sets in a query.
          CUBE – learn how to use CUBE to generate subtotals for all possible combinations of a specified group of dimensions. subtotal.
          ROLLUP – describe how to calculate multiple levels of subtotals across a specified group of dimensions. generate total.
          PIVOT – show you how to transpose rows to columns to make the crosstab reports.
          UNPIVOT – a guide to rotating columns into rows.
      }
      Modifying data {
          INSERT
          INSERT INTO SELECT
          INSERT ALL
          UPDATE - Update can be done using updatable view
          DELETE
          MERGE – walk you through the steps of performing a mixture of insertion, update, and deletion using a single statement.
      }
      Data definition {
          CREATE TABLE
          Identity Column
          ALTER TABLE ADD column/MODIFY column/Drop column(s)
          DROP TABLE (Cascading)
          TRUNCATE TABLE
          RENAME
          Virtual Columns - Runtime evaluate column data and No Updates
      }
      Oracle data types {
          NUMBER – introduces you to the numeric data type and show you how to use it to define numeric columns for a table.
          FLOAT – demystify float data type in Oracle by practical examples.
          CHAR – learn about fixed-length character string.
          NCHAR –  show you how to store fixed-length Unicode character data and explain the differences between CHAR and NCHAR data types
          VARCHAR2 – introduce you to the variable-length character and show you how to define variable-length character columns in a table.
          NVARCHAR2 – learn how to store variable-length Unicode characters in the database.
          DATE – discuss the date and time data type and show you how to handle date-time data effectively.
          TIMESTAMP – introduce you how to store date and time with the fractional seconds precision.
          INTERVAL– focus on the interval data types to store periods of time.
          TIMESTAMP WITH TIME ZONE – learn how to store datetime with timezone data.
      }
      Constraints {
          Primary key/Composite Primary Key
          Foreign key
          NOT NULL Constraint
          UNIQUE Constraint
          CHECK Constraint
      }
      Temporary Tables {
          Global temporary table – ON COMMIT [DELETE ROWS | PRESERVE ROWS] per Transaction per Session data
          Private temporary table – ON COMMIT [DROP DEFINITION | PRESERVE DEFINITION] per Transaction using EXECUTE IMMEDIATE
      }

  }
  PL-SQL {
  Exceptions {
  Types of Exceptions - https://plsql-tutorial.com/plsql-exception-handling.htm {
  Named System Exceptions
  Unnamed System Exceptions
  User-defined Exceptions
  }
  }
  Collections {
  Associative array (or index-by table)
  Nested table
  Variable-size array (varray)
  }
  Cursors {

      }

  }
  Codd's 12 Rules {
  Rule 1: Information Rule
  The data stored in a database, may it be user data or metadata, must be a value of some table cell.
  Everything in a database must be stored in a table format.
  Rule 2: Guaranteed Access Rule
  Every single data element (value) is guaranteed to be accessible logically with a combination of table-name,
  primary-key (row value), and attribute-name (column value). No other means, such as pointers, can be used to access data.
  Rule 3: Systematic Treatment of NULL Values
  The NULL values in a database must be given a systematic and uniform treatment.
  This is a very important rule because a NULL can be interpreted as one the following − data is missing, data is not known, or data is not applicable.
  Rule 4: Active Online Catalog
  The structure description of the entire database must be stored in an online catalog, known as data dictionary, which can be accessed by authorized users. Users can use the same query language to access the catalog which they use to access the database itself.
  Rule 5: Comprehensive Data Sub-Language Rule
  A database can only be accessed using a language having linear syntax that supports data definition, data manipulation, and transaction management operations. This language can be used directly or by means of some application. If the database allows access to data without any help of this language, then it is considered as a violation.
  Rule 6: View Updating Rule
  All the views of a database, which can theoretically be updated, must also be updatable by the system.
  Rule 7: High-Level Insert, Update, and Delete Rule
  A database must support high-level insertion, updation, and deletion. This must not be limited to a single row,
  that is, it must also support union, intersection and minus operations to yield sets of data records.
  Rule 8: Physical Data Independence
  The data stored in a database must be independent of the applications that access the database.
  Any change in the physical structure of a database must not have any impact on how the data is being accessed by external applications.
  Rule 9: Logical Data Independence
  The logical data in a database must be independent of its user’s view (application). Any change in logical data must not affect the applications using it. For example, if two tables are merged or one is split into two different tables, there should be no impact or change on the user application. This is one of the most difficult rule to apply.
  Rule 10: Integrity Independence
  A database must be independent of the application that uses it. All its integrity constraints can be independently modified without the need of any change in the application. This rule makes a database independent of the front-end application and its interface.
  Rule 11: Distribution Independence
  The end-user must not be able to see that the data is distributed over various locations. Users should always get the
  impression that the data is located at one site only. This rule has been regarded as the foundation of distributed database systems.
  Rule 12: Non-Subversion Rule
  If a system has an interface that provides access to low-level records, then the interface must not be able to subvert
  the system and bypass security and integrity constraints.
  }
  Reactive Manifesto {
  Responsive: The system responds in a timely manner if at all possible.
  Resilient: The system stays responsive in the face of failure.
  Elastic: The system stays responsive under varying workload.
  Message-Driven: Reactive Systems rely on asynchronous message-passing to establish a boundary
  between components that ensures loose coupling, isolation, location transparency, and
  provides the means to delegate errors as messages.
  }
  Twelve Factor App {
  Codebase - One codebase tracked in revision control, many deploys
  Dependencies - Explicitly declare and isolate dependencies
  Config - Store config in the environment
  Backing services - Treat backing services as attached resources
  Build, release, run - Strictly separate build and run stages
  Processes - Execute the app as one or more stateless processes
  Port binding - Export services via port binding
  I. Concurrency - Scale out via the process model
  Disposability - Maximize robustness with fast startup and graceful shutdown
  Dev/prod parity - Keep development, staging, and production as similar as possible
  Logs - Treat logs as event streams
  Admin processes - Run admin/management tasks as one-off processes
  }
  Agile Manifesto {
  Individuals and interactions over processes and tools
  Working software over comprehensive documentation
  Customer collaboration over contract negotiation
  Responding to change over following a plan
  }
  Agile Principles {
  Satisfy the Customer
  Welcome Change
  Deliver Frequently
  Work Together
  Build Projects
  Face-To-Face Time
  Measure of Progress
  Sustainable Development
  Continuous Attention
  Keep It Simple
  Organized Teams
  Reflect for Effectiveness
  }
  Scrum {
  Product Owner
  Scrum Master
  Sprint
  Artifacts:
  Epic {
  Story {
  Task {
  Subtask
  }
  }
  }
  }
  }
  Lean Methods {
  Eliminate Wastes: To maximize value, We must minimize Waste. For software systems, Waste can take the form of partially done work, delays, hand-offs, unnecessary features etc. Therefore to increase the value we are getting from projects, we must develop ways to identify and then remove waste.
  Empower the team: Rather than taking a micromanagement approach, we should respect team members superior knowledge of the technical steps required on the project and let them make local decisions to be productive and successful.
  Deliver Fast: We can maximize the project Return on investment (ROI) by quickly delivering valuable software and
  iterating through designs. We find the best solution through the Rapid Evolution of options.
  Optimize the Whole: We aim to see the system as more than the sum of its parts. We go beyond the pieces of the project and look for how it aligns with the organization. As part of optimizing the whole, we also focus on forming better inter-group relations.
  Build quality in: Lean development doesn’t try to “test-in” quality at the end; instead, we build quality into the product and continually assure quality throughout the development process, using techniques like refactoring, continuous integration and unit testing.
  Defer Decisions: We balance early planning with making decisions and committing to things as late as possible.
  For example, this may mean re-prioritizing the backlog right up until it is time to plan an iteration, or avoiding being tide to an early technology-bounded solution.
  Amplify Learning: This concept involves facilitating communication early and often, getting feedback as soon as possible, and building on what we learn. Software projects are business and technology learning experiences, so we should start soon and keep learning.
  }
  Software Engineering Excellence { - Design, architecture, coding, testing, release engineering, requirements, environment and usability ensures software engineering excellence. - Delivery Maturity Model { -
  }
  }
  Devops {
  primary Roles { - Development - Operations - QA
  }
  Impacts { - Culture - Collaboration - Automation - Measurement
  }
  Benefits { - Increased Responsiveness - Rapid Delivery - Responsive Scalability - Increased Reliability - Improved Security
  }
  Goals { - Establishing interoperability between development and operations team - Aligning software goals across development and operations team - Increasing the frequency of software releases - Increasing the speed and quality of software releases - Improving software quality in response to feedback - Decreasing lead times
  }
  Life Cycle Stages { - Plan - Create - Verify - Package - Release - Configure - Monitor - Feedback
  }
  Key Practices { - Configuration Integration - Continuous Delivery - Continuous Deployment - Continuous Monitoring - Infrastructure as Code - Configuration as Code - Policy as Code
  }
  Metrics { - Cycle time: Total time elapsed from the start of work items to their completion. - Lead time: Lead time measures the total time elapsed from the creation of work items to their completion. - Deployment Frequency - Deployment time - Support Tickets - Availability - Error rate { - Bugs - Production Issues
  } - Automated Test pass percentage - Defect escape rate - Service level agreements - Failed deployments - Application usage - Application performance - Mean Time to Detect (MTTD): Period between the start to identify the issue. - Mean Time to Resolve (MTTR): Mean time to resolution. - Mean Time to Failure (MTTF): Time starts when a serious defect in a system occurs and it ends when the system completely fails. - Mean time between failures (MTBF): Ability of a system or component to perform its required functions under stated conditions for a set amount of time.
  }
  Tools { - Planning tool - Version control tool - Deployment tool - Source code management repository - Configuration management database - Configuration approval tool - Issue tracking system - Build server - Artifact repository - Deployment tool - Operations tool - Release management tool - Policy system - Monitoring agents - Feedback tool - CI Server - Deployment server - Packaging tool - Reporting tool - Communication and collaboration tool
  }
  Maturity Assessment { - Culture and business strategy - Collaboration and communication - Automation - Governance and Processes
  }
  Challenges { - Conflicting culture - Firmly isolated Dev and Ops - Establishing united metrics - Overlooking security and governance - Requirements - Too much focus on tools - Legacy infrastructure limitations - Undesirable DevOps department - Unacceptable rate of adoption
  }
  CI/CD Delivery Pipeline { - Develop - Build - Integrate - Test - Release - Deploy - Operate
  }
  Continuous Integration Principles { - Submit/Build/Test - Central code repository - Submit code frequently - Create more builds - Automate build creation - Automate deployment - Test in staging - Test before submit - Do not submit on broken code - Performs proper testing - Share test results
  }
  Continuous Integration Best Practices { - Build binaries only once - Same deployment tool and method across - Environments - Deployment smoke test - Cancel deployment on build failures
  }
  Continuous Delivery { - Repeatable reliable processes - Automate everything - Version control and Source control everything - Prioritize challenging tasks - Built in quality - Done means released - Shared responsibility of release processes - continuous improvement
  }
  Continuous Deployment { - Automated release verification - Dependency management - Infrastructure resource staging - Infrastructure resource compliance verification
  }
  Continuous Monitoring Mechanisms { - Performance monitor - Compliance monitor - Functional/Operational monitor - SLA monitor - Audit monitor - Code quality monitor - Availability monitor - continuous testing monitor
  }
  Configuration as Code (CaC) { - Automate standardization for continuous software releases - Software configurations and automated testing - Programmatic versioning - Traceable changes - Deploying configurations across environments - Configuration status awareness via collaboration and notification
  }
  Infrastructure as Code (IaC) { - Rapidly deploy infrastructure resources - Automate deployment and recovery - Deploy consistently - Re-deploy instead of repair - Rollback quickly - Automate testing and verification - Validate before deployment - Integrate monitoring and testing
  }
  Infrastructure resource provisioning and development lifecycle stages { - Provisioning resources - Configuration and customisation - Monitoring - Security and compliance - Governance - System is made available - Optimisation and tuning de-provisioning
  }
  Policy as Code (PaC) { - Business - Security - Compliance - Governance - Regulatory - Operational - Performance  
   }
  Maturity Assessment { - Culture and business strategy - Collaboration and communication - Automation - Governance and processes
  }
  Cloud Computing { - CI with cloud computing - CD with cloud computing - Continuous deployment with cloud computing - IaC, CaC and PaC with cloud computing
  }
  Microservices and Containers { - CI with microservices and containers - CD with microservices and containers - Continuous deployment with microservices and containers - IaC, Cac and PaC microservices and containers
  }
  }

Project Management { - Initiation { - Develop project charter { - Sponsor - Inputs - Tools and techniques - Output { - Charter { - Project purpose { - High level scope
} - Success Criteria - Milestone schedule - Key stakeholders - Exit Criteria - Assigned project manager { - Roles and responsibilities
} - Sponsor details - Apporving authorities
}
} - Changes must be approved by sponsors - Grants authority to project manager
} - Identify stakeholders
} - Planning {} - Execution {} - Monitoring and Control { - Monitor and Control work - Integrated change control - Scope validation - Scope control - Schedule control - Cost control - Quality control - Resource control - Monitor communications - Monitor risks - Production control - Monitor stakeholder engagement
}
}
Apache Storm:

- ZK -> Nimbus -> Supervisor -> Worker (Task)
- Topology { spout(nextTuple) emmit -> stream(tuple) -> bolt ack} group by tuple fields
  GIT {
  https://nvie.com/posts/a-successful-git-branching-model/
  master (tag)
  develop
  release
  feature
  hotfix
  }
  ITIL - https://www.tutorialandexample.com/itil-tutorial/
  IT governance is playing an increasingly important role in achieving business results.
- Service Strategy
- Service Design
- Service Transition
- Service Operation
- Continual Service Management.
