# Java Spring Framework

- [Java Spring Framework](#java-spring-framework)
  - [Benefits](#benefits)
  - [Inversion of Control (IoC) and Dependency Injection](#inversion-of-control-ioc-and-dependency-injection)
  - [IoC in Spring Framework](#ioc-in-spring-framework)
  - [BeanFactory v/s ApplicationContext](#beanfactory-vs-applicationcontext)
  - [Spring Java-Based Configuration](#spring-java-based-configuration)
  - [Spring Annotation-based Configuration](#spring-annotation-based-configuration)
  - [Design Patterns in Spring Framework](#design-patterns-in-spring-framework)
  - [Q&A](#qa)
    - [What is Spring framework?](#what-is-spring-framework)
    - [What are the benefits of Spring framework in software development?](#what-are-the-benefits-of-spring-framework-in-software-development)
    - [What are the modules in Core Container of Spring framework?](#what-are-the-modules-in-core-container-of-spring-framework)
    - [What are the modules in Data Access/Integration layer of Spring framework?](#what-are-the-modules-in-data-accessintegration-layer-of-spring-framework)
    - [What are the modules in Web layer of Spring framework?](#what-are-the-modules-in-web-layer-of-spring-framework)
    - [What kind of testing can be done in Spring Test Module?](#what-kind-of-testing-can-be-done-in-spring-test-module)
    - [What is the use of BeanFactory in Spring framework?](#what-is-the-use-of-beanfactory-in-spring-framework)
    - [What are the benefits of ApplicationContext in Spring?](#what-are-the-benefits-of-applicationcontext-in-spring)
    - [What are the different roles in Dependency Injection (DI)?](#what-are-the-different-roles-in-dependency-injection-di)
    - [What are the different ways to provide configuration metadata to a Spring Container?](#what-are-the-different-ways-to-provide-configuration-metadata-to-a-spring-container)
    - [What is Autowiring in Spring?](#what-is-autowiring-in-spring)
    - [Is it allowed to inject null or empty String values in Spring?](#is-it-allowed-to-inject-null-or-empty-string-values-in-spring)
    - [What is a Java-based Configuration in Spring?](#what-is-a-java-based-configuration-in-spring)
    - [What is the purpose of @Configuration annotation?](#what-is-the-purpose-of-configuration-annotation)
    - [How will you switch on Annotation based wiring in Spring?](#how-will-you-switch-on-annotation-based-wiring-in-spring)
    - [What is @Required annotation?](#what-is-required-annotation)
    - [What is @Qualifier annotation in Spring?](#what-is-qualifier-annotation-in-spring)
    - [What types of Object Relational Mapping (ORM) are supported by Spring?](#what-types-of-object-relational-mapping-orm-are-supported-by-spring)
    - [What is Controller in Spring MVC framework?](#what-is-controller-in-spring-mvc-framework)
    - [What is @RequestMapping annotation in Spring?](#what-is-requestmapping-annotation-in-spring)
    - [In Spring framework, what is the difference between FileSystemResource and ClassPathResource?](#in-spring-framework-what-is-the-difference-between-filesystemresource-and-classpathresource)
    - [Name some popular Spring framework annotations that you use in your project?](#name-some-popular-spring-framework-annotations-that-you-use-in-your-project)
    - [How can you upload a file in Spring MVC Application?](#how-can-you-upload-a-file-in-spring-mvc-application)
    - [What are the different types of events provided by Spring framework?](#what-are-the-different-types-of-events-provided-by-spring-framework)
    - [What is the difference between DispatcherServlet and ContextLoaderListener in Spring?](#what-is-the-difference-between-dispatcherservlet-and-contextloaderlistener-in-spring)
    - [How will you handle exceptions in Spring MVC Framework?](#how-will-you-handle-exceptions-in-spring-mvc-framework)
    - [What is Spring Boot?](#what-is-spring-boot)
    - [What is Hibernate framework?](#what-is-hibernate-framework)
    - [What is an Object Relational Mapping (ORM)?](#what-is-an-object-relational-mapping-orm)
    - [What is the purpose of Configuration Interface in Hibernate?](#what-is-the-purpose-of-configuration-interface-in-hibernate)
    - [What is Object Relational Impedance Mismatch?](#what-is-object-relational-impedance-mismatch)
    - [Can you tell us about the core interfaces of Hibernate framework?](#can-you-tell-us-about-the-core-interfaces-of-hibernate-framework)
    - [How will you map the columns of a DB table to the properties of a Java class in Hibernate?](#how-will-you-map-the-columns-of-a-db-table-to-the-properties-of-a-java-class-in-hibernate)
    - [Why do we use POJO in Hibernate?](#why-do-we-use-pojo-in-hibernate)
    - [What is Hibernate Query Language (HQL)?](#what-is-hibernate-query-language-hql)
    - [What are the different types of collections supported by Hibernate?](#what-are-the-different-types-of-collections-supported-by-hibernate)
    - [What are the advantages of Hibernate framework over JDBC?](#what-are-the-advantages-of-hibernate-framework-over-jdbc)
    - [What is the Transient state of an object in Hibernate?](#what-is-the-transient-state-of-an-object-in-hibernate)
    - [What is the purpose of Callback interface in Hibernate?](#what-is-the-purpose-of-callback-interface-in-hibernate)
    - [What is Query Cache in Hibernate?](#what-is-query-cache-in-hibernate)
    - [In Hibernate, how can an object go in Detached state?](#in-hibernate-how-can-an-object-go-in-detached-state)
    - [How will you order the results returned by a Criteria in Hibernate?](#how-will-you-order-the-results-returned-by-a-criteria-in-hibernate)
    - [How can we auto-generate primary key in Hibernate?](#how-can-we-auto-generate-primary-key-in-hibernate)
    - [How will you re-attach an object in Detached state in Hibernate?](#how-will-you-re-attach-an-object-in-detached-state-in-hibernate)

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

## Q&A

### What is Spring framework?

Spring is development framework for Java programming. It is an open source development framework for Enterprise Java.

The core features of Spring Framework can be used in developing a Java Enterprise application.

It has many extensions and jars for developing web applications on top of Java EE platform.

With Spring we can develop large-scale complex Java applications very easily. It is also based on good design patterns like Dependency Injection, Aspect oriented programming for developing extensible feature rich software.

### What are the benefits of Spring framework in software development?

- Lightweight: It is easy to use and does not add a lot of overhead on software. It just has 2 MB in basic version.

- Container: creates and manages the life cycle of application objects like Plain old Java objects (POJO). It also stores the configuration files of application objects to be created.

- Dependency Injection (DI): Spring provided loose coupling is application by Dependency Injection. It uses Inversion of Control technique by which objects specify their dependencies to Spring container instead of creating new objects themselves.

- Aspect Oriented Programming (AOP): This helps in separating application business logic from system services that are common across all the business logic. E.g. Logging can be a cross cutting concern in an Application.

- Transaction Management: Spring Transaction Management can scale from one local transaction to global transactions in a cluster.

- MVC Framework and Exception Handling support for technologies like Hibernate, JDBC, etc.

### What are the modules in Core Container of Spring framework?

Modules in Core Container are:

- Core module
- Bean module
- Context module
- Spring Expression Language module

### What are the modules in Data Access/Integration layer of Spring framework?

- JDBC module: An abstraction layer to remove tedious JDBC coding.
- ORM module Integration layers for Object Relational Mapping
- OXM module: An abstraction layer to support Object XML mapping.
- Java Messaging Service (JMS) module: Module for producing and consuming messages.
- Transactions module: Transaction Management for POJO classes

### What are the modules in Web layer of Spring framework?

- Web module: This provides basic web-oriented integration features.
- Servlet module: Support for Servlet Listeners.
- WebSocket module: Support for Web Socket style messaging.
- Portlet module: MVC implementation for Portlet environment.

### What kind of testing can be done in Spring Test Module?

Spring Test Module provides support for Unit testing as well as Integration testing of Spring components. It allows using JUnit or TestNG testing frameworks. It also gives ability to mock objects to use the test code.

### What is the use of BeanFactory in Spring framework?

BeanFactory is the main class that helps in implementing Inversion of Control pattern in Spring. It is based on the factory design pattern. It separates the configuration and dependencies of an application from the rest of application code.

### What are the benefits of ApplicationContext in Spring?

- Bean factory methods: These are used to access application components
- Load File Resources: It helps in loading file resources in a generic fashion
- Publish Events: It enables publishing events to registered listeners
- Internationalization Support: Ability to resolve messages to support internationalization
- Parent Context: Ability to inherit from a parent context

### What are the different roles in Dependency Injection (DI)?

There are four roles in Dependency Injection:

1. Service object(s) to be used
2. Client object that depends on the service
3. Interface that defines how client uses services
4. Injector responsible for constructing services and injecting them into client

### What are the different ways to provide configuration metadata to a Spring Container?

Spring supports three ways to provide configuration metadata to Spring Container:

XML based configuration: We can specify configuration data in an XML file.

Annotation-based configuration: We can use Annotations to specify configuration. This was introduced in Spring 2.5.

Java-based configuration: This is introduced from Spring 3.0. We can embed annotations like @Bean, @Import, @Configuration in Java code to specify configuration metadata.

### What is Autowiring in Spring?

Autowiring is a feature of Spring in which container can automatically wire/connect the beans by reading the configuration file.

Developer has to just define “autowire” attribute in a bean.

Spring resolves the dependencies automatically by looking at this attribute of beans that are autowired.

### Is it allowed to inject null or empty String values in Spring?

Yes, Spring allows injecting null or empty String values.

### What is a Java-based Configuration in Spring?

You can use annotations like- @Configuration, @Bean, @Import and @DependsOn in Java classes for specifying the configuration.

### What is the purpose of @Configuration annotation?

This annotation is used in a class to indicate that this is class is the primary source of bean definitions. This class can also contain inter-bean dependencies that are annotated by @Bean annotation.

### How will you switch on Annotation based wiring in Spring?

By default, Annotation based configuration is switched off in Spring. To turn it is we can specify `<context:annotation-config/>` element in Spring config file.

Once it is turned on, we can use @Autowired annotation or @Required annotation in a Java class for wiring in Spring.

### What is @Required annotation?

We use @Required annotation to a property to check whether the property has been set or not.

Spring container throws BeanInitializationException if the @Required annotated property is not set.

### What is @Qualifier annotation in Spring?

We use @Qualifier annotation to mark a bean as ready for auto wiring. This annotation is used along with @Autowired annotation to specify the exact bean for auto wiring by Spring container.

### What types of Object Relational Mapping (ORM) are supported by Spring?

Spring supports following Object Relational Mapping (ORM) frameworks:

- Hibernate
- Java Persistence API (JPA)
- TopLink
- Java Data Objects (JDO)
- Apache Object Relational Bridge (ORB)

### What is Controller in Spring MVC framework?

It receives HttpServletRequest and HttpServletResponse in web app just like an HttpServlet, but it is able to participate in an MVC flow.

Spring recommends that the implementation of Controller interface should be a reusable, thread-safe class, capable of handling multiple HTTP requests throughout the lifecycle of an application.

Controller interprets user input and transforms it into a model. The model is represented to the user by a view.

The dispatcher in Spring scans for @Controller annotated classes for mapped methods and detects @RequestMapping.

### What is @RequestMapping annotation in Spring?

In Spring MVC, we use @RequestMapping annotation to map a web request to either a class or a handler method.

In @RequestMapping we can specify the path of URL as well as HTTP method like- GET, PUT, POST etc.

@RequestMapping also supports specifying HTTP Headers as attributes.

We can also map different media types produced by a controller in @RequestMapping. We use HTTP Header Accepts for this purpose.

### In Spring framework, what is the difference between FileSystemResource and ClassPathResource?

In Spring we can specify configuration by using a file or classpath.
In `FileSystemResource` we have to give absolute path / relative path of Spring Configuration file `spring-config.xml` file.
In `ClassPathResource` Spring looks for Spring Configuration file `spring-config.xml` in ClassPath. Therefore, developer has to include `spring-config.xml` in classpath.
`ClassPathResource` looks for configuration file in `CLASSPATH`, whereas `FileSystemResource` looks for configuration file in file system.

### Name some popular Spring framework annotations that you use in your project?

**@Controller**: This annotation is for creating controller classes in a Spring MVC project.

**@RequestMapping**: This annotation maps the URI to a controller handler method in Spring MVC.

**@ResponseBody**: For sending an Object as response we use this annotation.

**@PathVariable**: To map dynamic values from a URI to handler method arguments, we use this annotation.

**@Autowired**: This annotation indicates to Spring for auto-wiring dependencies in beans.

**@Service**: This annotation marks the service classes in Spring.

**@Scope**: We can define the scope of Spring bean by this annotation.

**@Configuration**: This an annotation for Java based Spring configuration.

**@Aspect, @Before, @After, @Around, @Joinpoint, @Pointcut**: These are the annotations in Spring for AspectJ AOP.

### How can you upload a file in Spring MVC Application?

In Spring MVC framework we can use MultipartResolver interface to upload a file. We need to make configuration changes to make it work. After uploading the file, we have to create Controller handler method to process the uploaded file in application.

### What are the different types of events provided by Spring framework?

**ContextRefreshedEvent**: Whenever ApplicationContext is initialized or refreshed, Spring publishes this event. We can also raise it by using `refresh()` method on ConfigurableApplicationContext interface.

**ContextStartedEvent**: When ApplicationContext is started using `start()` method on ConfigurableApplicationContext interface, ContextStartedEvent is published. We can poll database or restart any stopped application after receiving this event.

**ContextStoppedEvent**: Spring publishes this event when ApplicationContext is stopped using `stop()` method on ConfigurableApplicationContext interface. This is used for doing any cleanup work.

**ContextClosedEvent**: Once the ApplicationContext is closed using `close()` method, ContextClosedEvent is published. Once a context is closed, it is the last stage of its lifecycle. After this it cannot be refreshed or restarted.

**RequestHandledEvent**: This is a web specific event that informs to all beans that an HTTP request has been serviced.

### What is the difference between DispatcherServlet and ContextLoaderListener in Spring?

DispatcherServlet is the core of Spring MVC application. It loads Spring bean configuration file and initialize all the beans mentioned in config file.

In case we have enabled annotations in Spring config file, it also scans the packages and configures any bean annotated with @Component, @Controller, @Repository or @Service annotations.

ContextLoaderListener is a listener to start up and shut down Spring’s root WebApplicationContext. ContextLoaderListener links the lifecycle of ApplicationContext to the lifecycle of the ServletContext. It automates the creation of ApplicationContext. It can also be used to define shared beans used across different spring contexts.

### How will you handle exceptions in Spring MVC Framework?

**Controller Based**: A developer can define exception handler methods in a Controller class. To do so, they have to annotate the methods with @ExceptionHandler annotation.

**Global Exception Handler**: Spring provides @ControllerAdvice annotation for exception handling as cross-cutting concern. We can mark any class as global exception handler by using this annotation.

**HandlerExceptionResolver implementation**: Spring Framework provides HandlerExceptionResolver interface that can be implemented to create a global exception handler.

### What is Spring Boot?

Spring Boot is a ready made solution to create Spring applications with production grade features. It favors convention over configuration.

We can embed Tomcat or Jetty in in an application created with Spring Boot. Spring Boot automatically configures Spring in an application.

It does not require any code generation or xml configuration. It is an easy solution to create applications that can run stand-alone.

### What is Hibernate framework?

Hibernate is a popular Object Relational Mapping (ORM) framework of Java. It helps in mapping the Object Oriented Domain model to Relational Database tables.
Hibernate is a free software distributed under GNU license.
Hibernate also provides implementation of Java Persistence API (JPA).
In simple words, it is a framework to retrieve and store data from database tables to Java.

### What is an Object Relational Mapping (ORM)?

Object Relational Mapping (ORM) is a programming technique to map data from a relational database to Object oriented domain model. This is the core of Hibernate framework.

In case of Java, most of the software is based on OOPS design. But the data stored in Database is based on Relation Database Management System (RDBMS).

ORM helps in data retrieval in an Object Oriented way from an RDBMS. It reduces the effort of developers in writing queries to access and insert data.

### What is the purpose of Configuration Interface in Hibernate?

Configuration interface can be implemented in an application to specify the properties and mapping documents for creating a SessionFactory in Hibernate.

By default, a new instance of Configuration uses properties mentioned in hibernate.properties file.

In short, Configuration interface is used for configuring Hibernate framework in an application.

### What is Object Relational Impedance Mismatch?

Object Relational Impedance Mismatch (ORIM) is also known as paradigm mismatch. It means that Object model and Relational model do not work well with each other.
Relational model or a RDBMS represents data in tabular format like a spreadsheet. Object model or OOPS represents the data as an inter-connected graph of objects.
Mixing these two models leads to various problems. The common name for these issues is Object Relational Impedance Mismatch.

### Can you tell us about the core interfaces of Hibernate framework?

**Configuration**: Configuration interface can be implemented in an application to specify the properties and mapping documents for creating a SessionFactory in Hibernate. Hibernate application bootstraps by using this interface.

**SessionFactory**: In Hibernate, SessionFactory is used to create and manage Sessions. Generally, there is one SessionFactory created for one database. It is a thread-safe interface that works well in multithreaded applications.

**Session**: Session is a lightweight object that is used at runtime between a Java application and Hibernate. It contains methods to create, read and delete operations for entity classes. It is a basic class that abstracts the concept of persistence.

**Transaction**: This is an optional interface. It is a short lived object that is used for encapsulating the overall work based on unit of work design pattern. A Session can have multiple Transactions.

**Query**: This interface encapsulates the behavior of an object-oriented query in Hibernate. It can accept parameters and execute the queries to fetch results. Same query can be executed multiple times.

**Criteria**: This is a simplified API to retrieve objects by creating Criterion objects. It is very easy to use for creating Search like features.

### How will you map the columns of a DB table to the properties of a Java class in Hibernate?

XML: We can map the column of a table to the property of a class in XML file. It is generally with extension hbm.xml

Annotation: We can also use annotations @Entity and @Table to map a column to the property of a class.

### Why do we use POJO in Hibernate?

POJO stands for Plain Old Java Objects. A POJO is java bean with getter and setter methods for each property of the bean.

It is a simple class that encapsulates an object’s properties and provides access through setters and getters.

Some of the reasons for using POJO in Hibernate are:

- POJO emphasizes the fact that this class is a simple Java class, not a heavy class like EJB.
- POJO is a well-constructed class, so it works well with Hibernate proxies.
- POJO also comes with a default constructor that makes it easier to persist with a default constructor.

### What is Hibernate Query Language (HQL)?

Hibernate Query Language is also known as HQL. It is an Object Oriented language. But it is similar to SQL.

HQL works well with persistent objects and their properties. HQL does not work on database tables.

HQL queries are translated into native SQL queries specific to a database.

HQL supports direct running of native SQL queries also. But it creates an issue in Database portability.

### What are the different types of collections supported by Hibernate?

Indexed Collections: List and Maps
Sorted Collections: java.util.SortedMap and java.util.SortedSet

### What are the advantages of Hibernate framework over JDBC?

**Database Portability**: Hibernate can be used with multiple types of database with easy portability. In JDBC, developer has to write database specific native queries.

**Connection Pool**: Hibernate handles connection pooling very well. JDBC requires connection pooling to be defined by developer.

**Complexity**: Hibernate handles complex query scenarios very well with its internal API like Criteria.

### What is the Transient state of an object in Hibernate?

When an object is just instantiated using the new operator but is not associated with a Hibernate Session, then the object is in Transient
state.
In Transient state, object does not have a persistent representation in database. Also there is no identifier assigned to an object in Transient state.

### What is the purpose of Callback interface in Hibernate?

Callback interface in Hibernate is mainly used for receiving notifications of different events from an object.

Eg. We can use Callback to get the notification when an object is loaded into or removed from database.

### What is Query Cache in Hibernate?

Hibernate provides Query Cache to improve the performance of queries that run multiple times with same parameters.

At times Query Caching can reduce the performance of Transactional processing. By default Query Cache is disabled in Hibernate.

### In Hibernate, how can an object go in Detached state?

Once the session attached to an Object is closed, the object goes into Detached state. An Object in Detached state can be attached to another session at a later point of time.
This state is quite useful in concurrent applications that have long unit of work.

### How will you order the results returned by a Criteria in Hibernate?

Hibernate provides an Order criterion that can be used to order the results. This can be order objects based on their property in ascending or descending order.
Class is `org.hibernate.criterion.Order`.
Eg.

```java
List employees = session.createCriteria(Employee.class)
  .add( Restrictions.like("name", "F%")
  .addOrder( Order.asc("name") )
  .addOrder( Order.desc("age") )
  .setMaxResults(10)
  .list();
```

### How can we auto-generate primary key in Hibernate?

We can use the primary key generation strategy of type `GenerationType.AUTO` to auto-generate primary key while persisting an object in Hibernate.

```java
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private int id;
```

We can leave it null/0 while persisting and Hibernate automatically generates a primary key for us.
Sometimes, AUTO strategy refers to a SEQUENCE instead of an IDENTITY.

### How will you re-attach an object in Detached state in Hibernate?

We can call one of the methods `Session.update()`, `Session.saveOrUpdate()`, or `Session.merge()` to re-attach an object in detached state with another session in Hibernate.
