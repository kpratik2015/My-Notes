# Spring Boot Workshop

## Spring Boot

Spring boot has auto-configuration. It looks at your classpath and looks at your libraries and it will automatically create objects/beans. Auto wiring in spring boot is simpler than Enterprise Edition Java.

Spring Reactive Web works on observable pattern. It should be used when server needs to keep open a channel with continuous stream of data. Like here's 20% of the data to client... And then later on another 20% and so on.

`pom.xml` right-click add as maven project to get dependencies downloaded locally.

In Spring boot, between versions there is a chance of lot of deprecation and the deprecation would actually mean that in newer version that class is removed.

A starter dependency (`spring-boot-starter-web`) is kind of like an umbrella. It automatically pulls in x other lower level dependencies as you would need them. In Spring Framework (the predecessor), you had to pull in all the JARs yourself.
`spring-boot-starter-test` will pull in junit, spring test, mockito, etc. as required.

Spring cloud has service discovery (eureka) and failover management.

`@SpringBootApplication` is equivalent to `@Configuration`, `@EnableAutoConfiguration` & `@ComponentScan`

H2, Derby are embedded database.

JPA = Java Persistence API (A standard ORM). Hibernate library or JEE (outdated) implements JPA. JPA is a paper document i.e. it has interfaces. In Spring, we add Hibernate library.

JPA Concepts:

- Entity classes correspond to Tables in DB.
- Entity manager enables you to fetch entities from DB. It also automatically flushes modified entities to the DB.
- Entity Manager Factory - configures the entity manager so it can connect to DB.

To use in springboot you need to add dependency for spring-boot-strarter-data-jpa. Lower level API is JDBC if needed.

Spring Boot creates several beans automatically in your application - `JdbcTemplate`, `EntityManagerFactory`, `PlatformTransactionManager` - all 3 connecting to `DataSource`.

```properties
# Enable the H2 console, so we can view the data via browser
spring.h2.console.enabled = true
spring.h2.console.path=/h2-console
```

### Components, Beans and Autowiring

In Spring, a component is a class that Spring will automatically instantiate. Then it will make it available to use across the entire project. The object it creates is called a bean.

Annotate a class with any of the following annotations:

- `@Component` - utility class / general purpose class
- `@Service` - performing business functionality... Performing algorithmic stuff.
- `@Repository` - for data access
- `@Controller`/`@RestController`

When you call run on `SpringApplication`, then the package mentioned is looked into/component scanning. The returned object (`ctx`) will contain all the beans for instance, `MyComponent`'s bean `myComponent` will be inside `ctx` which is the application context.

By default all beans are created as singleton on startup i.e. eagerly. The default scope is singleton. You can specify a different scope: prototype, request, session, application.

```java
@Component
@Scope("prototype")
```

`prototype` - getBean will always return different instance. Good for multi-threading where no locking data is there. Does not create object as part of application startup. It will be created just in time.

`request` - For a request, all components will have shared instance. Any instance created only for that request duration will get torn down after request.

`session` - A session id identifies the user for the duration of session. This id will be retained for some time and all the instances associated with it.

If too many beans are created at startup then startup is slow. `@Lazy` can be applied so that the instance will be created only after its first invocation.

Spring boot actuator is good for monitoring the spring boot project.

For putting component in sibling package, you can use `scanBasePackages={"mypackage1","mypackage2"}`

Multiple classes implementing same interface, use `@Qualifier("primaryRepository")`.

If an interface is not implemented then use `@Autowired(required=false)`, but a drawback is that you need to do a null check.

You can autowire a `Collection<T>` so spring injects a collection of all the beans of type T. Useful for housekeeping like clear data maybe. You can also create `Map<String, T>`

You can inject values into beans via `@Value`. Use `$` to inject an application property value. Use `#` to inject a general Java value via SpEL e.g. `@Value("#( 5 * 7.5 )")`.

You can use command line argument to override application property. Put in Program properties in Run configuration and prefix with `--`.

A configuration class is a special class in Spring Boot that creates and initializes bean objects. You can use beans elsewhere in your application. Annotate with `@Configuration`. Each method inside the class with `@Bean` annotation will be called at the time of startup and return an object.

```java
@Configuration
public class ConfigSimple {
  @Bean
  public MyBean myBean() {
    MyBean b = new MyBean();
    b.setField1(12);
    return b; // this will be put in Spring Boot Application Context
  }
}
```

## Entity Class

Annotation - `@Entity`, `@Column(name="")` and `@Table(name="")` from `javax.persistence`

By default assumes table name is same as class name.

`@Id` for primary key. `@GeneratedValue(strategy=GenerationType.IDENTITY)` for auto generated ID column. Identity basically means auto increment.

It'll have an empty no-arg constructor and an arg constructor.

When spring boot app starts it scans for entity classes. You can tell it to look elsewhere if you like via `@EntityScan`
