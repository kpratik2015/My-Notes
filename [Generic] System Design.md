# System Design

## Terminology

- Principles:
  - Robustness (the ability to maintain operations during a crisis)
  - Scalability
  - Availability
  - Performance
  - Extensibility
  - Resiliency (the ability to return to normal operations over an acceptable period of time post disruption)
- Functional requirements - Requirements that the clients need directly—for example, the ability to send messages in near real-time to friends.
- Non-Functional requirements - Requirements that are needed indirectly—for example, messaging service performance shouldn’t degrade with increasing user load.
- RPC - Remote procedure calls is an interprocess communication protocol. It provides an abstraction of a local procedure call to the developers by hiding the complexities of packing and sending function arguments to the remote server, receiving the return values, and managing any network retries. RPC spans the transport and application layers in OSI model.
- The Nines of Availability - it ranges from one to seven.
  - 1 nine (90%): 36.5 days downtime per year
  - 2 nines (99%): 3.65 days downtime per year
  - 99.5%, 99.9%, 99.99%, 99.999%, 99.99999%, 99.9999999%
- Reliability: it is the probability that the service will perform its functions for a specified time. We often use mean time between failures (MTBF) and mean time to repair (MTTR) as metrics to measure R.
- Maintainability, M, is the probability that the service will restore its functions within a specified time of fault occurrence. We use (mean time to repair) MTTR as the metric to measure M.
- Checkpointing: It is a technique that saves the system’s state in stable storage for later retrieval in case of failures due to errors or service disruptions.



## Important Questions

- What’s the size of the data right now?
- At what rate is the data expected to grow over time?
- How will the data be consumed by other subsystems or end users?
- Is the data read-heavy or write-heavy?
- Do we need strict consistency of data, or will eventual consistency work?
- What’s the durability target of the data?
- What privacy and regulatory requirements do we require for storing or transmitting user data?

## Types of data center servers

### Web Servers

They are first point of contact after load balancers. Usually handles API calls from clients. This one requires good processing resources.

### Application Servers

They run core business logic and application software. They primarily deal with dynamic content whereas web servers mostly serve static content. They can require extensive computational and storage resources.

### Storage Servers

It includes blob storage, queue, sql/non-sql table storage.

## Important Rates

- QPS handled by MySQL - 1000
- QPS handled by key-value store - 10000
- QPS handled by cache server - 100k - 1M

With Back of the envelope calculation, we can assume a server with 64 cores can handle 64000 Requests Per Second (RPS).

### Calculation for Servers Required

Considering 500M daily active users (DAU), and a single user makes 20 requests per day...

Total Requests per second => 500M * 20 / 86400 = 115K RPS
Total number of servers (64 core server): RPS/RPS of server => 115K/64000 ~= 2 servers

This can be a lower bound as we are assuming uniform request distribution throughout the day.

If the load gets higher than we predict, techniques like load-shedding, circuit-breakers, and throttling can be employed.

### Calculation for Storage Required

Considering 500M DAU, and each makes 3 short blog posts sizing 250 bytes a day...

Total Posts: 500M * 3 = 1500 * 10^6 posts per day
Storage required for posts in a day: 1500 * 10^6 * 250 bytes = 375 GB

### Calculation for Bandwidth Required

Here bytes need to be converted to bits as bandwidth is measured in bits per second. `1 Byte * 8 = 1 Bit`

Considering 500M DAU, 50 blog posts viewed per day...

500M * 50 views = 25 billion views
Blog posts viewed per second => 25 * 10^9/86400 = 289 * 10^3 blog posts viewed per second
Outgoing Bandwidth: 289 * 10^3 * 250 bytes * 8 bits ~= 1.2 Gbps 

Incoming bandwidth would depend on storage required i.e. Storage/86400 * 8 Gbps

## DNS

- DNS name servers are in a hierarchical form. 
- DNS names are processed from right to left. 
- Query resolution preferably happens iteratively: Local/ISP server, Root name server, TLD NS, Authoritative NS.
- Name servers: DNS servers that respond to users’ queries are called name servers
- Resource records: The DNS database stores domain name to IP address mappings in the form of resource records (RR). They contain 3 important pieces of information: type, name, and value. Common Types of RR:
  - Address (A): Provides the hostname to IP address mapping
  - Name server (NS): Delegates a DNS zone to use the given authoritative name servers
  - CNAME (Canonical name): Maps an alternate domain name to its true name, and is useful for directing users to a single domain from multiple domain names
  - Mail exchange (MX): List of mail exchange servers that accept email for a domain
- UDP protocol is used in DNS as it is much faster than TCP - which requires 3 way handshake. DNS queries are usually retransmitted at the transport layer if there’s no response for the previous one. DNS can use TCP when its message size exceeds the original packet size of 512 Bytes. This usually happens in congested network as large sized packets are more prone to be damaged.
- DNS provides eventual consistency. Takes few seconds to 3 days to update records across internet.
- Each record has a TTL. To maintain high availability, TTL value is small ~ 120 seconds.
- We can use `nslookup` and `dig` command to understand DNS for a domain
  - The IP list is in random order in every hit because DNS is indirectly performing loadbalancing
  

## Load Balancer

- The load balancing layer is the first point of contact within a data center after the firewall.
- Load balancers can be potentially used between any two services with multiple instances within the design of a system. 
- Other services offered by LB:
  - LBs use the heartbeat protocol to monitor the health and, therefore, reliability of end-servers.
  - TLS termination (it is the process of decrypting encrypted traffic (HTTPS) before it is passed to another server).
  - Service discovery
  - Security by mitigating DoS
- LBs are deployed in pairs so that they do not become Single Point of Failure. If both pairs fail, manual routing can be done.
- DNS uses round-robin to perform load balancing
- LB within data center behave like reverse proxy - divide incoming requests among pool of available servers.
- LB has global and local scale. Global server LB involves distribution of traffic load across multiple geographical regions.
- LB strategies:
  - Round-robin scheduling
  - Weighted round-robin: This is if some servers have higher capability.
  - Least connections
  - Least response time
  - IP hash
  - URL hash
- LB can be stateless or stateful. Stateless LBs use consistent hashing to make forwarding decisions, however a local state may still be required.

## Databases

- Relational DBs
  - ACID:
    - Atomicity - A transaction is an atomic unit. All statements execute or none (rollback)
    - Consistency - Multiple users should get same result 
    - Isolation - Multiple transactions running concurrently, shouldn't affect each other
    - Durability - Completed transactions should be stored in DB even if system fails
  - Flexible - DDL can be performed while other queries are happening
  - Reduced redundancy - With foreign key and normalization, there is no inconsistent dependency
  - Concurrency - With the help of transactions
  - Integration - Aggregating data from multiple data sources
  - Backup and disaster recovery - Export and import operations. Backup via replication of data.
  - One drawback is that values of table need to be simple values which differs from what is stored in-memory with application. So a translation of data is always required to and fro.
- Non Relational DBs
  - For apps which require large amount of unstructured or semi-strutured data, low latency and flexible data models.
  - Pros:
    - Simple design - No joins
    - Horizontal scaling - NoSQL databases often spread data across multiple nodes and balance data and queries across nodes automatically
    - Availability - Node replacement can be performed without application downtime
    - Cost - Many NoSQL databases are open source and freely available. NoSQL databases usually use clusters of cheap commodity servers.
  - Type of NoSQL DBs:
    - Key value (Amazon DynamoDB, Redis, and Memcached DB)
    - Document (MongoDB and Google Cloud Firestore). Good for documents in formats like XML, JSON & BSON. These documents are composed of a hierarchical tree data structure.
    - Graph (Neo4J, OrientDB, and InfiniteGraph) to store data, where nodes represent entities, and edges show relationships between entities.
    - Column (Cassandra, HBase, Hypertable, and Amazon Redshift) efficient for a large number of aggregation and data analytics queries.
  - Cons:
    - No specific standard like SQL DBs follow relational algebra. Migration could also be a challenge.
    - Weaker consistency
- Data Replication
  - Types:
    - Async - doesn't wait on secondary nodes before reporting success to client
    - Sync - node waits for secondary nodes acknowledgement of update before reporting success to client
  - Models:
    - Single leader or primary-secondary
      - Good for read intensive apps as load can be distributed to available followers.
      - Can have inconsistency if async. replication is used and primary node fails.
      - When primary fails, a secondary node is elected manually or automatically as the leader node.
      - Methods
        - Statement-based replication - used in MySQL, where SQL statements are recorded in log file and sent over to secondary nodes for execution. But, nondeterministic functions like `NOW()` will give inconsistent data.
        - Write-ahead log (WAL) shipping - used in postgresql and oracle, first written in transactional log file and disk before applied to database. After this, changes are replicated to secondary nodes. But, in this there is tight coupling with inner structure of DB engine
        - Logical (row-based) replication - used in relational DBs, captures the operations in a logical format and then executes them on secondary nodes.
    - Multi-leader
      - used in databases along with external tools. This kind of replication is quite useful in applications in which we can continue work even if we’re offline.
      - Pros are more scalability and performance
      - Cons are increased complexity to deal with conflicts, 
    - Peer-to-peer or leaderless
      - All the nodes have equal weightage and can accept read and write requests. Found in Cassandra DB.
      - Complexity for resolving conflicts with help of quorums. In quorums, we read from at least n nodes such that if w are the successfully updated nodes, then n + w > total nodes.
- Data Partitioning
  - Data partitioning (or sharding) enables us to use multiple nodes where each node manages some part of the whole data.
  - If partitioning is not balanced, majority of queries will fall on few partitions which are then called hotspots.
  - Types:
    - Vertical sharding - Tables are spread across database instances. It is done manually than dynamic/automated.
    - Horizontal sharding 
      - Key range
        - Each partition is assigned a continuous range of keys
        - Foreign key tables are put in the same shard
      - Hash based
        - Uses a hash function on an attribute. We can also mod by the number of partitions.
        - Each partition may get a range of hashes
        - With consistent hashing, each server or item in a distributed hash table is assigned a place on an abstract circle, called a ring.
  - Strategies to rebalance partitions
    - Avoid hash mod n
    - Fixed number of partitions
    - Dynamic partitioning
    - Partition proportionally to nodes (used by Cassandra and Ketama)
  - In partitioning, the problem of identifying which partition/IP to connect to, for retrieving data, is solved by service discovery
  - To track changes in cluster, many distributed data systems need a separate management server like ZooKeeper. HBase, Kafka and SolrCloud use ZooKeeper.

## Key Value Stores

- It should be configurable (at the time of instantiation), it should be always available for write (Availability and Scalability), it should ensure availability of core functionality i.e. get and put by allowing for heterogenous hardware.
- Dynamo uses MD5 hashes on the key to generate a 128-bit identifier
- Consistent hashing is effective way to manage load over set of nodes.
  - In this, we have a conceptual ring of hashes from 0 to n - 1, where n is number of available hash values. Each node ID is used to calculate hash and map it to the ring and same is done for request. Each request is completed by next node found by moving in clockwise direction of ring.
  - Whenever new node is added, the previous node has to share data with it. Making addition and removal of node easy.
  - The hashes are randomly distributed so we expect load of requests to be random.
  - If a node gets most requests, it is called hotspot. To resolve this, virtual nodes concept is used.
  - With virtual nodes, each node will have multiple places on the conceptual ring (more capicity, more virtual nodes) making the requests load more uniform
- Data replication is done by peer to peer approach. Each data item will be replicated at n hosts, where n is a parameter configured per instance of the key-value store. 

## CDN

- A CDN (Akamai, StackPath, Cloudflare, Rackspace, Amazon CloudFront, and Google Cloud CDN) is a group of geographically distributed proxy servers. A proxy server is an intermediate server between a client and the origin server.
- CDN mainly stores two types of data: static and dynamic.
- Various streaming protocols are used to deliver dynamic content by the CDN providers. For example, CDNsun uses the Real-time Messaging Protocol (RTMP), HTTP Live Streaming (HLS), Real-time Streaming Protocol (RTSP), and many more to deliver dynamic content.
- push CDN is mostly used for serving static content. pull CDN is favored for frequently changing content and a high traffic load. Low storage consumption is one of the main benefits of the pull CDN. Most content providers use both pull and push CDN caching approaches to get the benefits of both.
- Certain dynamic content creation requires the execution of scripts that can be executed at proxy servers instead of running on the origin server. 
- Dynamic Adaptive Streaming over HTTP (DASH) uses a manifest file with URIs of the video with different resolutions so that the client can fetch whatever is appropriate as per prevailing network and end node conditions. Netflix uses a proprietary DASH version with a Byte-range in the URL for further content request and delivery optimization.
- Many CDN providers like Akamai use DNS redirection in their routing system. DNS redirection takes both of these important factors—network distance and requests load—into consideration, and that reduces the latency towards a proxy server.
- Anycast is a routing methodology in which all the edge servers located in multiple locations share the same single IP address.
- Consistency in CDN
  - Periodic polling uses time-to-refresh (TTR) to adjust the time period for requesting updated data from the origin servers.
  - Because of the TTR, the proxy servers may uselessly request the origin servers for updated data. A better approach that could be employed to reduce the frequency of refresh messages is the time-to-live (TTL) approach.
  - Adaptive lease - The origin server grants a lease to the data sent to a proxy server using this technique. The lease denotes the time interval for which the origin server agrees to notify the proxy server if there’s any change in the data. Also, lease duration can be optimized dynamically according to load
- Akamai and Netflix popularized the idea of keeping their CDN proxy servers inside the client’s ISPs.

## Sequencer

- UUID: It is a 128-bit number which is generated pseudorandom in version 4. But using it, can result in slow inserts. It is not 64 bit in size. There's chance of duplication. They might not be monotonically increasing.
- Range handler: We can use ranges in a central server. Suppose we have multiple ranges for one to two billion, such as 1 to 1,000,000; 1,000,001 to 2,000,000; and so on. In such a case, a central microservice can provide a range to a server upon request.
- Unix timestamp, twitter snowflake, vector clocks and truetime are examples of other approaches

## Distributed Cache

- A distributed cache is a caching system where multiple cache servers coordinate to store frequently accessed data.
- Writing policies
  - Write-through: Writes to cache & DB, can be concurrent, increases write latency but improves consistency
  - Write-back: First written to cache and async. to DB, small writing latency
  - Write-around: Write data to DB only, written to cache only on cache miss, data read is generally not up to date.
- Eviction policies:
  - Least recently used (LRU)
  - Most recently used (MRU)
  - Least frequently used (LFU)
  - Most frequently used (MFU)
- Vital part of design is speed of accessing data. Hash table for storing & retrieving data. Doubly Linked List for eviction algo
- Memcached is preferred for smaller, simpler read-heavy systems, whereas Redis is useful for systems that are complex and are both read- and write-heavy.

## Messaging Queue

- A messaging queue is an intermediate component between the interacting entities known as producers and consumers.
- Motivation: Improved perf., better reliability, granular scalability, easy decoupling, rate limiting, priority queue.
- Use cases: Emails, Data post-processing, recommender systems
- The most appropriate mechanism to provide a unique ID or time stamp to incoming messages involves the use of synchronized clocks.
- Msg sent earlier arrives late due to network delay - when we’ve already handed out a newer message, we put it in a special queue, and the client handles that situation.
- Many distributed messaging queue solutions either don’t guarantee a strict order or have limitations around throughput.
- Message deletion ways
  - Consumer is responsible for keeping track of what’s consumed. A job can then delete the message when the expiration conditions are met.
  - it’s made invisible for some time via an attribute—for example, `visibility_timeout`. This way, the other consumers are unable to get messages that have already been consumed.


## Pub Sub

- Pub-sub messaging offers asynchronous communication.
- Use cases:
  - Improved perf.: push based distribution
  - Handling ingestion: We can ingest a large amount of data to the pub-sub system, so much so that it can deliver the data to any analytical system to understand the behavior patterns of users.
  - Real time monitoring
  - Replicating data: applications like WhatsApp that allow multiple views of the same conversation—for example, on a mobile phone and a computer’s browser—can elegantly work using a pub-sub
- Producers and consumers can scale independently. Producers are not affected by slow or faulty consumers.
- 