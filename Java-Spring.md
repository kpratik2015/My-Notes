# Java Spring Framework

- [Java Spring Framework](#java-spring-framework)
  - [Benefits](#benefits)
  - [Inversion of Control (IoC) and Dependency Injection](#inversion-of-control-ioc-and-dependency-injection)
  - [IoC in Spring Framework](#ioc-in-spring-framework)
  - [BeanFactory v/s ApplicationContext](#beanfactory-vs-applicationcontext)
  - [Spring Java-Based Configuration](#spring-java-based-configuration)
  - [Spring Annotation-based Configuration](#spring-annotation-based-configuration)
  - [Design Patterns in Spring Framework](#design-patterns-in-spring-framework)

The Spring framework is a Java platform that provides comprehensive infrastructure support for developing Java applications. Spring handles the infrastructure part so you can focus on your application part.

## Benefits

- With the **Dependency Injection(DI)** approach, dependencies are explicit and evident in constructor or JavaBean properties.
- Spring is organized in a modular fashion.
- By using JavaBean-style POJOs, it becomes easier to use dependency injection for injecting test data and test.
- Spring’s web framework is a well-designed web MVC framework, which provides a great alternative to web frameworks such as Struts
- Spring provides a consistent transaction management interface

## Inversion of Control (IoC) and Dependency Injection

In software engineering, **inversion of control (IoC)** is a programming technique in which object coupling is bound at run time by an assembler object and is typically not known at compile time using static analysis.
With inversion of control, the flow depends on the object graph that is instantiated by the assembler and is made possible by object interactions being defined through abstractions. The binding process is achieved through “dependency injection”.

**Dependency injection** is a pattern used to create instances of objects that other objects rely on without knowing at compile time which class will be used to provide that functionality.

## IoC in Spring Framework

The `org.springframework.beans` and `org.springframework.context` packages provide the basis for the Spring Framework’s IoC container. The `BeanFactory` interface provides an advanced configuration mechanism capable of managing objects of any nature. The `ApplicationContext` interface builds on top of the `BeanFactory`

## BeanFactory v/s ApplicationContext

A BeanFactory is like a factory class that contains a collection of beans. The BeanFactory holds Bean Definitions of multiple beans within itself and then instantiates the bean whenever asked for by clients. BeanFactory also takes part in the life cycle of a bean, making calls to custom initialization and destruction methods.

On the surface, an application context is same as a bean factory. Both load bean definitions, wire beans together, and dispense beans upon request. But it also provides:

- A means for resolving text messages, including support for internationalization.
- A generic way to load file resources.
- Events to beans that are registered as listeners.

## Spring Java-Based Configuration

The central artifacts in Spring’s new Java-configuration support are `@Configuration` annotated classes and `@Bean` annotated methods.

## Spring Annotation-based Configuration

Annotation injection is performed before XML injection, thus the latter configuration will override the former for properties wired through both approaches.

@Required : The @Required annotation applies to bean property setter methods.
@Autowired : The @Autowired annotation can apply to bean property setter methods, non-setter methods, constructor and properties.
@Qualifier : The @Qualifier annotation along with @Autowired can be used to remove the confusion by specifiying which exact bean will be wired.

## Design Patterns in Spring Framework

- **Proxy** – used heavily in AOP, and remoting.
- **Singleton** – beans defined in spring config files are singletons by default.
- **Template method** – used extensively to deal with boilerplate repeated code e.g. RestTemplate, JmsTemplate, JpaTemplate.
- **Front Controller** – Spring provides DispatcherServlet to ensure an incoming request gets dispatched to your controllers.
- **View Helper** – Spring has a number of custom JSP tags, and velocity macros, to assist in separating code from presentation in views.
- **Dependency injection** – Center to the whole BeanFactory / ApplicationContext concepts.
- **Factory pattern** – BeanFactory for creating instance of an object.
