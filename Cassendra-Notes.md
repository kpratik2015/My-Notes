# Cassendra Notes

## Installation

https://academy.datastax.com/planet-cassandra/cassandra

download Download DataStax Community Edition v3.0.9 

either 32 bit or 64 bit

Run the exe file

open the command terminal

Move to bin folder and start the cassandra server

cassandra -f

open another terminal and move to bin folder 

and type cqlsh

netstat -ano | findstr 7199

## Basics

It is column based. There is concept of column family. More column based DB: BigTable, HBase, Hypertable, PNUTS.

Cassandra is open source, distributed and decentralized/distributed storage system.

- It is scalable, fault tolerant and consistent.
- It is column-oriented database.
- Commit log : crash recovery mechanism
- mem-table: memory resident data structure
- SSTable: it is a disk file to which data is flushed from mem-table when its contents reach a threshold value.
- Bloom filter: nondeterministic, quick, algo for testing whether an element is a member of a set. It is a special kind of cache.

Cassandra Query Language

### Keyspace 

Keyspace is the outermost container for data in cassandra. Like database name.
```
CREATE KEYSPACE "clsa" with replication = {'class' : 'SimpleStrategy', 'replicationFactor' : 1};

use clsa

describe tables

describe table <table_name>


```
_Note: 
Primary key is partition key
We can filter on column which is index
Purpose of a partition key is to identify the partition. 
_

```
create index on employee(salary);
select * from employee where salary=30000;
```

One row for each partition key. All the data associated with that partition key is stored as columns in the datastore. 

The role of clustering key is to group related items together. All the data that is inserted against same clustering key is grouped together.

If clustered together in one node then same token 

```
select token(stuid)
```

To capture query output into a file do:

```
expand on;
capture 'filename';
select * from employees;
capture off;
```

To execute commands in batch

```
source 'inputfile.txt'
```

We first keep data in memory. Commit log is used to not lose any writes.

