# Work History

Perks of selective memory. Better note it down.

## Summary

### First Job

Got it out of campus placement in college and joined on 8 July 2018. First 3 months were spent as classroom training where-in each day we would have instructor teach us concepts/code. The trainings included Angular, shell, Finance, Core Java, Spring Framework, MongoDB, Oracle SQL and soft skills. In between training we had an option to work with a team on some task they would need help with. So I approached TechOps people for some problem I could help solve.

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

## React

Using parcel as build tool `parcel build --public-url / --no-source-maps index.html`

### Service Worker

Package.json scripts for workbox:

```json
{
  "scripts": {
    "postbuild": "npm run inject:sw",
    "inject:sw": "npm run workbox:inject && parcel build --no-content-hash service-worker.js --no-source-maps --out-dir ./distsw/ && cpx ./distsw/service-worker.js ./dist/"
  }
}
```

First we inject javascript built file names into `sw.js` and then use parcel on service-worker file and get that into dist folder

**workbox-config.js**

```js
module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{gif,png,js,ico,webmanifest,css}"],
  swDest: "service-worker.js",
  swSrc: "sw.js",
  globIgnores: ["service-worker.js"],
};
```

**sw.js**

```js
/* eslint-disable */
// @ts-nocheck
import {
  CacheFirst,
  StaleWhileRevalidate,
  NetworkOnly,
} from "workbox-strategies";
import { precacheAndRoute } from "workbox-precaching";
import { ExpirationPlugin } from "workbox-expiration";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { registerRoute } from "workbox-routing";
import * as googleAnalytics from "workbox-google-analytics";
// for graphql POST response caching
importScripts(
  "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js"
);
importScripts(
  "https://cdn.jsdelivr.net/npm/idb-keyval@3/dist/idb-keyval-iife.min.js"
);

googleAnalytics.initialize();

// Init indexedDB using idb-keyval, https://github.com/jakearchibald/idb-keyval
const store = new idbKeyval.Store("GraphQL-Cache", "PostResponses");

precacheAndRoute(self.__WB_MANIFEST); // GETS REPLACED BY WORKBOX INJECT

async function getCache(request) {
  let data;
  try {
    const body = await request.json();
    const suffix = "variables" in body ? JSON.stringify(body.variables) : "";
    // console.log("GET CACHE: ", body);
    const id = CryptoJS.MD5(body.query + suffix).toString();
    data = await idbKeyval.get(id, store);
    if (!data) return null;

    // Check cache max age.
    const cacheControl = request.headers.get("Cache-Control");
    // eslint-disable-next-line radix
    const maxAge = cacheControl ? parseInt(cacheControl.split("=")[1]) : 3600;
    if (Date.now() - data.timestamp > maxAge * 1000) {
      // console.log(`Cache expired. Load from API endpoint.`);
      return null;
    }
    // console.log(`Load response from cache.`);
    return new Response(JSON.stringify(data.response.body), data.response);
  } catch (err) {
    return null;
  }
}

async function serializeResponse(response) {
  const serializedHeaders = {};
  for (const entry of response.headers.entries()) {
    // eslint-disable-next-line prefer-destructuring
    serializedHeaders[entry[0]] = entry[1];
  }
  const serialized = {
    headers: serializedHeaders,
    status: response.status,
    statusText: response.statusText,
  };
  serialized.body = await response.json();
  return serialized;
}

async function setCache(request, response) {
  let key;
  let data;
  const body = await request.json();
  const suffix = "variables" in body ? JSON.stringify(body.variables) : "";
  const id = CryptoJS.MD5(body.query + suffix).toString();
  // console.log("SET CACHE: ", body);
  const entry = {
    query: body.query,
    response: await serializeResponse(response),
    timestamp: Date.now(),
  };
  idbKeyval.set(id, entry, store);
}

async function staleWhileRevalidate(event) {
  const promise = null;
  const cachedResponse = await getCache(event.request.clone());
  const fetchPromise = fetch(event.request.clone())
    .then((response) => {
      setCache(event.request.clone(), response.clone());
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
  return cachedResponse ? Promise.resolve(cachedResponse) : fetchPromise;
}

// Workbox with custom handler to use IndexedDB for cache.
registerRoute(
  ({ event, request, url }) => {
    // console.log("Request: ", request, " staleWhileRevalidate");
    return url.pathname.endsWith("graphql/") && request.cache !== "no-cache";
  },
  // Uncomment below to see the error thrown from Cache Storage API.
  // staleWhileRevalidate(),
  async ({ event }) => {
    return staleWhileRevalidate(event);
  },
  "POST"
);

// Return cached response when possible, and fetch new results from server in
// the background and update the cache.
addEventListener("fetch", async (event) => {
  // console.log("caches ", caches, " and request ", event.request);
  if (event.request.method === "POST" && event.request.cache !== "no-cache") {
    event.respondWith(staleWhileRevalidate(event));
  }
  // else {
  //   event.respondWith(
  //     caches.match(event.request).then(function (response) {
  //       return response || fetch(event.request);
  //     })
  //   );
  // }
  // TODO: Handles other types of requests.
});
async function getPostKey(request) {
  const body = await request.json();
  return JSON.stringify(body);
}
```

**index.tsx**

```tsx
function invokeServiceWorkerUpdateFlow(
  registration: ServiceWorkerRegistration
) {
  const r = confirm("An update is available. Do you want to update?");
  if (r) {
    if (registration.waiting) {
      messageSW(registration.waiting, { type: "SKIP_WAITING" })
        .then(
          (r) => {
            console.log(r);
          },
          (reject) => {
            console.error(reject);
          }
        )
        .catch((err) => {
          console.error("error ", err);
        });
    }
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    const registration = await navigator.serviceWorker.register(
      "/service-worker.js"
    );

    if (registration.waiting) {
      invokeServiceWorkerUpdateFlow(registration);
    }

    // detect update available
    registration.addEventListener("updatefound", () => {
      if (registration.installing) {
        // wait until installed
        registration.installing.addEventListener("statechange", () => {
          if (registration.waiting) {
            // if old service worker exists
            if (navigator.serviceWorker.controller) {
              invokeServiceWorkerUpdateFlow(registration);
            } else {
              // first time install
              console.log("SW init");
            }
          }
        });
      }
    });
  });

  let refreshing = false;

  // detect controller change and refresh the page
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!refreshing) {
      window.location.reload();
      refreshing = true;
    }
  });
}
```

### Docker

Dockerfile essential

```Dockerfile
# alpine takes up less space
FROM nginx:1.16.0-alpine
WORKDIR /usr/share/nginx/html/
# nginx
# COPY nginx/redirects /etc/nginx/redirects # optional
# COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY dist/ /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html
EXPOSE 80
CMD ["sh", "-c", "nginx -g 'daemon off;'"]
```

### Libraries Seen Overtime

**Deps**

- @apollo/react-hooks (outdated)
- @babel/runtime
- @babel/runtime-corejs3
- @hot-loader/react-dom
- @reach/router ♥
- @reach/tabs
- @welldone-software/why-did-you-render
- apollo-boost
- core-js
- date-fns ♥
- date-fns-tz ♥
- jspdf (for making pdf)
- jspdf-autotable (jspdf + react-table)
- graphql-tag ♥
- keycloak-js (for authentication/session)
- match-sorter & papaparse
- mutation-observer (for IE)
- parcel-plugin-babel-typescript (for babel + ts)
- parcel-plugin-goodie-bag (for IE)
- polished
- pure-react-carousel
- react-big-calendar
- react-apollo
- react-apollo-hooks
- react-content-loader ♥
- react-cookie ♥
- react-countup
- react-data-table-component
- react-device-detect
- react-draggable (gesture)
- react-grid-layout (compatible with IE)
- react-ga, react-gtm-module (React Google Analytics)
- react-headroom ♥
- react-helmet ♥
- react-hook-form ♥
- react-hot-loader
- react-html-parser ♥
- react-image
- react-kawaii
- react-player ♥
- react-share ♥
- react-slick
- react-spring ♥
- react-swipeable
- react-table ♥
- react-table-plugins (complements react-table)
- react-use ♥
- react-use-gesture ♥ (gesture)
- react-visibility-sensor ♥
- regenerator-runtime (for IE)
- resize-observer-polyfill (for IE)
- styled-components, (plugin) styled-components-modifiers & (plugin) styled-components-breakpoint ♥
- styled-icons ♥
- zustand

**DevDeps**

Babel

- @babel/core
- @babel/plugin-proposal-class-properties
- @babel/plugin-syntax-dynamic-import
- @babel/plugin-transform-runtime
- @babel/preset-env
- @babel/preset-react
- babel-eslint (for js)
- babel-plugin-import (for js)
- @babel/preset-typescript (for ts)

ESLint

- eslint
- eslint-config-prettier
- eslint-import-resolver-alias ♥
- eslint-plugin-graphql
- eslint-plugin-import
- eslint-plugin-jsx-a11y ♥
- eslint-plugin-prettier
- eslint-plugin-promise
- eslint-plugin-react
- eslint-plugin-react-hooks

Codegen (for graphql typescript intellisense)

- @graphql-codegen/cli
- @graphql-codegen/introspection
- @graphql-codegen/typescript
- @graphql-codegen/typescript-operations
- @graphql-codegen/typescript-react-apollo

Scripting

- cpx
- husky
- list-staged
- npm-run-all
- rimraf
- stylelint
- serve
- tslint, tslint-config-airbnb, tsling-config-prettier, tslint-react

Workbox

- workbox-cli
- workbox-core
- workbox-expiration
- workbox-google-analytics
- workbox-precaching
- workbox-routing
- workbox-strategies
- workbox-streams
- workbox-window (? not devDep)

Misc

- docz (documentation)
- highlight.js (code blocks)
- jest (testing)
- prettier (code formatting)
- react-docgen (documentation)
- react-snap (ssr)
