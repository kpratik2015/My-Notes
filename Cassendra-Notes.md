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
