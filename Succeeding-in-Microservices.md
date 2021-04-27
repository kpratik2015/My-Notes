# Succeeding in Microservices

"Your [developers] were so preoccupied with whether they could, they didn't stop to think if they should." - Ian Malcolm

We have to consider the cost of added complexity.

Microservices - reaction to monoliths and heavy weight services. As well as cloud environment. Monoliths hit developer productivity. Massive ramp up times for new developers in monolith code base.

These are suites of small, focused services. Do one thing, do it well. Linux like - pipe simple things together to get complex results. Independently deployable - violeted most often. Evolve at different rates. Freedom to choose the right tech for the job. Built around business capabilities. High cohesion, low coupling. Applied to services. It's a pattern. It's a tool which needs to be picked up to solve certain problem.

Each microservice has its own datastore - why? So that any change in schema of datastore would warrant a change in that particular microservice only. Then there might be a scenario where multiple services data need to be aggregated. It's okay for 3 services to talk to the same data store. You have to do what's right for you.

It depends should be beginning of conversation and not end of it. That is, more information is needed to discuss more.

If parts of your system evolve at different speed then microservices might be helpful to you. In a monolith, everything has to move at the same rate.

`git log --pretty=format: --name-only | sort | uniq -c | sort -rg | head -10` Top 10 things that change the most.

Where should we refactor -> churn. Cyclomatic complexity - double digits is bad, >6 is caution.

Use the **data driven strangler pattern** when business logic of the legacy system is unknown and accuracy is critical. That is, put a proxy layer between the client and legacy system. First job is to just log the results - requests and responses. This helps us to know what the old system does. This should drive the test cases for new functionality. Later on we can run the new system in parallel with legacy system. Most of the time, new system should produce same response as old system but if they don't match then let the old system give the response. Now add tests to figure out which result is correct. Don't be surprised if the old system is wrong.

Without automation, reaping benefits for microservices is hard. Expertise grows with repetition. You'll improvie if you deploy early and often.

Independent life cycles are under appreciated benefit of microservices. "That's how we've always done it" won't cut it anymore.

Microservices allows to scale independently, but how do we know which components need more capacity? Monitor.

For Golden Signals:

- Latency: how long does it take to service a request
- Traffic: level of demand on the system. Requests/second. I/O rate.
- Errors: failed requests. Can be explicit, implicit or policy failure.
- Saturation: how much of a constrained resource is left.

Important to consider the sampling frequency. High resolution can be costly. Aggregate data. Number of tools like Spring Boot Actuator. Takes time to get monitoring right. Beware the metric which is easy to measure. Also key to understand the business drivers. What could cause spike in demand ? How does it translate to services. Independent scalability is a massive win. If you need it!

**Failure Isolation** - No service is an island. No microservice works alone. Failures find a way and our customers don't care why. We can isolate the failure cases with microservices. We need to think about the road less travelled. Any decent answer to an interesting question begins, "It depends..." - Kent Beck.

**Polyglot Tech Stacks** - There is a possibility people have 1 year of experience 10 times as 10 year of experience. Cloud computing removes the one stack to rule them all constraint. We actually can spin up multiple stack.

Micro could mean something that can be re-written in 2 weeks or less.

SLI - Service Level Indicator - A measure of some aspect of your system. Latency, error rate, throughput... Availability. That is, percentage of time your service is available. How much downtime can you tolerate? Comes down to Nines. 99% - 7.20 hours a month, 14.4 minutes a day downtime is tolerable. 99.9% => 8.76 hours PER YEAR. GKE's availability SLA is 99.5%.

SLO - Service Level Objective. Our target value or a range of values. Our SLO for availability is 99.9%. We don't always get to choose our SLOs. We're also subject to the things we depend on.

SLA - Service Level Agreement - Assign a consequence to missing/meeting an SLO. Often contractual and involve some kind of financial penalty. If there is no consequence, we're talking about an SLO. SLAs are the realm of product and legal decisions.

Do canary deployments. 5-10% first and maybe slowing increase percent released to real users. If errors, automated rollbacks.

Achitecture is often defined as the decisions that are hard to change. Or the decisions we wish we got right. But we know things will change. So architecture is anti agile ? You have people making architectural decisions.

## Resources

1. [https://tanzu.vmware.com/content/blog/should-that-be-a-microservice-keep-these-six-factors-in-mind](https://tanzu.vmware.com/content/blog/should-that-be-a-microservice-keep-these-six-factors-in-mind)
2. [https://www.youtube.com/watch?v=ZChGXfRDHKA](https://www.youtube.com/watch?v=ZChGXfRDHKA)
3. [Churn](https://www.stickyminds.com/article/getting-empirical-about-refactoring)
4. [Turbulence based on churn vs complexity](https://github.com/chad/turbulence)
5. [CodeScene](https://codescene.io/about)
6. [How We Build Code at Netflix](https://netflixtechblog.com/how-we-build-code-at-netflix-c5d9bd727f15)
7. [Site Realiability Engineering](https://landing.google.com/sre/book.html)
8. [The circuit breaker pattern](https://martinfowler.com/bliki/CircuitBreaker.html)
9. [Simian Army](https://github.com/Netflix/SimianArmy)
10. [Chaos engineering](http://principlesofchaos.org)
11. [Polyglot Programming](http://nealford.com/memeagora/2006/12/05/Polyglot_Programming.html)
