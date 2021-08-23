# Design Patterns with Java

## Why learn patterns?

- Design patterns are like good red whine. As we study more, we discern subtleties.
- Provide view into brains of OO experts
- Help us understand existing designs
- Allows us to knit a program better

## What is Design Pattern?

In S.E., it's:

- general, reusable solution
- to a commonly occuring problem
- within a given context in software design

It's not a specific solution, but will start the design discussion.

If we can't draw a diagram out of our implementation it's not a pattern.

### Types of Design Pattern

- Creational (not as important in Java)
  - Abstract instantiation process
  - e.g Singleton, Builder
- Behavioral
  - Encapsulate algorithms and behavior, complex control flow i.e. try to reduce if else or branching
  - e.g. Strategy, Command, Visitor
- Structural
  - Compose groups of objects into larger structures
  - e.g. Composite, Decorator, Proxy

## Builder Pattern

Representation -> implementation details. Same construction process i.e. algo can create different representation.

Java lacks default and named parameters. Since we don't, we need effective java builders but it has nothing got to do with this pattern.

This pattern represents a strategy for creating things.

Use when:

- assemble complex objects from parts
- vary parts without changing assembly algorithm

It aims to get rid of telescoping constructors. Getter and Setters gives us non-final fields. Especially useful with many parameters

Following are not GoF Builders. They're 'Effective Java' Builders:

- StringBuilder
- Locale.Builder
- new Calendar.BUilder()
- Stream.builder().add(...).build()
- DateTimeFormatterBuilder
- DataSouce.createConnectionBuilder()
- ModuleDescriptor.newModule("stats.core")...build()

```java
public class Server {
  private final int port;
  private final String hostname;
  private Server(int port, String hostname) {
    this.port = port;
    this.hostname = hostname;
  }
  public static class Builder {
    private int port = 80;
    private String hostname = "localhost";
    public Builder port(int port) { this.port = port; return this; }
    public Builder hostname(String hostname) {
      this.hostname = hostname; return this; }
    public Server build() { return new Server(port, hostname); }
  }
}
Server server = new Server.Builder().port(8080).build();
```
