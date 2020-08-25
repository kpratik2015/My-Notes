# Work History

Perks of selective memory. Better note it down.

## Summary

First job, CLSA. Got it out of campus placement in college and joined on 8 July 2018. First 3 months were spent as classroom training where-in each day we would have instructor teach us concepts/code. The trainings included Angular, shell, Finance, Core Java, Spring Framework, MongoDB, Oracle SQL and soft skills. In between training we had an option to work with a team on some task they would need help with. So I approached TechOps people for some problem I could help solve.

My first task was to get a prototype ready where I could deploy a python code on a dev server that can give stats about the server and then allow to retreive stats of other servers mentioned in a config file. I then tried to extend flask monitoring dashboard github repo code to work with our servers. I had a problem wherein the code I did was in python 3 and other servers by default had python 2. So we had to setup SSH handshake with few other servers and I wrote code to SSH into them and get stats.

Another task I got from server techops team where they were seeking an ML solution to get a predictive date for a FileSystem to reach its threshold. I used Regression Model to work up a date based off of archived data of filesystem stats. We had an outlier you can say where we observed that the FileSystem stats dropped at certain days in a week and we found out that it was every friday a cleanup is scheduled.

After 3-4 months, rotation started which was another 3-4 months. We got to help out teams directly in whatever help they could require from us. I got tasks in Java and Angular material. Java was to improve on a threading code already written. I re-wrote it using Executor framework. We also did cron scheduling in that program. For Angular, I had to do some feature additions in existing code base.

In the team I got selected, I wrote python script to get data off excel sheet, clean it and persist in postgres DB. I also got work in Java and angular - where in front-end I had to implement upload functionality of file and in backend get the file, read it and store the values of file in pojo.

Then in Research team I started work in React for upcoming new CLSA website and currently I work for forums website that is already live.

## Java SpringBoot project for ETL between MySQL DB and Postgres DB

Main repo is divided into following packages:

- launcher
- component
- config
- controller
- model
- repository
- service

We use `application.properties` for configurable fields like:

- logging
  - level.root
  - level.org.springframework.web
  - level.org.hibernate
  - path
  - file
  - pattern.file
- jmx
- ladap.url
- jasypt.encryptor
- spring.datasource

In `resources/keystore` we keep `.p12` file.

### Launcher

```java
@SpringBootApplication // duh
main() throws Exception {
  SpringApplication.run(launcher.class, args);
}
```

### Component

We've an LDAP Auth Provider. LDAPService is Autowired. Logger is instantiated as:

```java
private static final Logger logger = LogManager.getLogger(LdapProvider.class);
```

We've authenticate and supports function.

Also have a patcher class. It exposes methods to work with DB.

```java
// using variables off application.properties

@Value(value = "${jmx}")
String jmxU;
```

We also run command line command via Java.

```java
Runtime rt = Runtime.getRuntime();
String[] commands = {"rsync", "-varziP", "source", "destination"}
Process proc = rt.exec(commands);

BufferedReader stdI = new BufferedReader(new InputStreamReader(proc.getInputStream()))
// ... proc.getErrorStream()

String s = null;

while ((s = stdI.readLine()) != null) {
  // sysout s
}

// same process for reading error

```

Another aspect is JMX

```java
JMXServiceURL url = new JMXServiceURL(String.format("service:jmx:rmi://%s:%s/jndi/rmi://%s:%s/jmxrmi"),
//...
)
JMXConnector jmxc = JMXConnectorFactory.connect(url, new HashMap<String, String[]>() {
  private static final long serialVersionUID = 1L;
  {
    put("jmx.remote.credentials", new String[] {username, password})
  }
});

MBeanServerConnection connection = jmxc.getMBeanServerConnection();

ObjectName objectName = new ObjectName("com...:name=cacheConfigurator,type=CacheConfigurator")

Object object = connection.invoke(objectName, "clearCache", null, null);

jmxc.close();
```

### Config

Main is DataSourceConfig

```java
@Configuration // :P
public class X {
  @Bean
  @Primary
  @ConfigurationProperties(perfix = "spring.datasource")
  public DataSource sourceDataSource() {
    return DataSourceBuilder.create().build();
  }

  @Bean
  @ConfigurationProperties(
    // ..
  )
  // ..

  @Bean
  @Autowired
  @Primary
  public JdbcTempalte jdbcTemplateSource(@Qualifier("sourceDataSource") DataSource ds) {
    return new JdbcTempalte(ds);
  }

  // Only one DataSource is primary
}

```

Here we also had config for WebSecurity that linked to LDAP

### Controller

Web Controller

```java
@Controller
public class X {
  @ModelAttribute("tableObj")
  public Table table() {
    return new Table();
  }

  @GetMapping("/")
  public String y(Model model) {
    model.addAttribute("tables", avTb);
    return "index";
  }

  @PostMapping("/")
  public String z(@ModelAttribute("tableobj") @Valid @RequestBody Table table, BindingResult placeValidation, Model model) {
    String t = table.getTable();
    long startTime = System.currentTimeMillis();
    // patch
    long elapsedtime = TimeUnit.MILLISECONDS.toSeconds(System.currentTimeMillis() - startTime);
    // log
    model.addAttribute("elapsed", elapsedTime); // Sending to thymeleaf template
    return "etl";
  }
}

```

### Model

Here we have Data Object Models with setters and getters

### Service

Here we have LDAPService that handles authentication

## Dependencies/Artifacts

- spring-boot-maven-plugin
- spring-boot-starter-log4j2
- spring-ldap-core
- spring-security-ldap
- spring-boot-starter-actuator
  - exclusion: spring-boot-starter-logging
- spring-boot-starter-data-ldap
- spring-boot-starter-jdbc
- spring-boot-starter-security
- spring-boot-starter-web
  - exclusion: spring-boot-starter-tomcat
- spring-boot-starter-undertow
- mysql-connector-java
- postgresql
- jasypt-spring-boot-starter
- spring-jmx
- log4j-api, -core, -jcl, -slf4j-impl

## Docekrfile

```DockerFile
FROM openjdk:8-jdk-alpine
WORKDIR ...
COPY target/x.jar y.jar
CMD ["java", "-server", "-Xmx512m", "-jar", "y.jar"]
```

For maven build: Goals: package

## Query

```sql
SHOW FULL TABLES IN x WHERE TABLE_TYPE LIKE 'VIEW';

INSERT INTO %s.%s SELECT * FROM %s.%s;

/** LEFTJOIN */

SELECT %s.%s.* FROM %s.%s LEFT JOIN %s.%s ON %s.%s.id=%s.%s.id WHERE %s.%s.id IS NULL;

SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?;

SELECT id FROM %s EXCEPT SELECT id FROM %s;

```

For JDBC template

```java
jdbcTemplate.execute("query", new PreparedStatementCallback() {
  @Override
  public Object doInPreparedStatement(PreparedStatement ps) throws SQLException, DataAccessException {
    return null;
  }
})
```

## Executor Service and ParallelStream

Some code used Threads, so I replaced it with ExecutorService

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

// for (String s: x.keySet()) {}
x.keySet().parallelStream().forEach(s -> {
  ExecutorService exS = Executors.newSingleThreadExecutor();
  // ...

  exS.execute(fun);
})

// ...

try {
  exS.awaitTermination(timeout, TimeUnit.SECONDS);
} catch (InterruptedException e) {
  e.printStackTrace();
}

// Also ...

ExecutorServcie eS = Exectuors.newFixedThreadPool(Runtime.getRuntime().availableProcessors());
// parallelStream().forEach...
  eS.execute(new Runnable() {
    public void run() {
      setS(c);
    }
  })

eS.shutdown();

```
