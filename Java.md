## Intro

A long strange trip to java by Patrick Naughton

## Java Flavors

- JSE (Standard)
-- JDK 7/8
- JEE (Enterprise) : for server side development (common server: tomcat)
-- JEE 6/7
- JME (Micro) : for mobile
-- JME 8

_JVM will interpret byte code and create executable_
_Input to JIT is bytecode and it converts to native code_


## Basics

Keep Ctrl pressed in eclipse to get hyperlinks for each syntax.
If you ctrl + click on println you'll see it is synchronized for multi threadding. One thread at a time will execute it.

### OOP

- Abstraction (class, interface, enum, annotations): prototype realization of a real world problem
- Encapsulation (class): wrapping (capsule) of functions and variables together, basically a unit.

### Using reflection api we can access private variables. So hiding is not actually possible. 

- Inheritance (is-a relationship) _Note: has-a is association i.e. one to one, etc._
- Polymorphism _Note: overriding gives new behaviour._

Right-Click and in Source select Generate constructor using fields. 

Single rooted hierarchy is in java wherein object is parent of all classes.

super() in constructor is an implicit call i.e. even if you don't write it it's ok.

#### Immutable : Can't change after creation. Like no setters, only getters.

Syntax for writing as per [documentation](https://docs.oracle.com/javase/7/docs/api/):

static String	copyValueOf(char[] data) so code it as String.copyValueof( ... )

char	charAt(int index) so code it as variablename.charAt( ... )

