# SQL

## Normalization

The first normal form rule is that we should have no repeating columns. This makes the system much more straightforward and much more useful to search.

Second normal form says that if we have a composite key every column must depend on the entire key. Suppose we have a dependency from salesperson to salesperson ID, and from customer to customer ID. So those are not depending on the entire primary key. So to resolve that again we take those dependency values and put them into a separate table.

Third normal form is that we need to have none of these dependencies at all.

Boyce Codd normal form or BCNF is important is if we have multiple overlapping candidate keys
so essentially if we’ve got another surrogate key or another candidate key then we should
be able to apply the same rules using that key.
So if there’s multiple columns which work perfectly well as primary keys, you should
be able to use normalization rules on those even if it isn’t the formal primary key.

## Data Types

Format of date stored in SQL: YYYY-MM-DD

datetime2 follows ISO standards. Midnight is 00 and not 24.

Convert the data into a data type that suits both the storage and SQL Server:

SELECT CAST(order_date AS VARCHAR(20))

SELECT CONVERT(VARCHAR(20), order_date) // This is more functional because an extra parameter can be passed like 101 for US-English date or 103 for British-English date format

SELECT PARSE('Monday, 6 June 2016' AS DATETIME) // PARSE will only convert from strings into dates or DATETIME or a number. So it is limited in the number of different formats you can convert but actually it would convert a lot more information.

We also have: TRY_CAST, TRY_CONVERT, TRY_PARSE. This is useful when if if there is an error with the conversion process, rather than generating the error, we might actually say “ well, we want to carry on, so we are going to just generate a NULL value.

## Schema

It is an improved way of having a boundary around your objects.

### Object Name Resolution

Actually the object has a four-part name.
It has a name that goes, from the server, the database, the schema, the object name and we should try to use four-part names as much as possible, because if we only use, a one-part name, then it says ok, well I’m going to have to go and have a look and find what the default schema is for that user and then look for objects within that.

So three-part name is defining the database or use the current one, four part names you use the specific server or if we don’t use them the current server.
Ok, so just understand what happens with object name resolution, try to always use two-part names and just be aware of what would happen if you use a three or a four-part name.

### Create, Alter, Drop

CREATE TABLE PetStore.Owner
OwnerID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
OwnerName nvarchar(50) NOT NULL,
HairColor nvarchar(10) NULL;

We have an identity column. Owner ID is an identity column starting with 1 and increasing by 1 every time they create

DROP TABLE PetStore.Owner;

ALTER TABLE PetSotre.Owner
ADD PrefferedName nvarchar(30) NULL;

ALTER TABLE PetStore.Owner
DROP COLUMN PreferredName;

In Alter, we want to retain permission and date on that table.

### Temporary Tables

We create a temporary table by starting its name with a hash. It gets automatically deleted after a session but you might want to explicitly delete it once you're done with the table. This temporary table is stored in tempdb.

There is another type where you would start it with two hashes.
When you start it with two hashes, you get what’s called a global temporary table.
Similar idea, but now it can be seen by other sessions so it’s globally available and that way, we can pass values between different procedures, different queries as long as they’re running at the same time.
(Typically not a good idea)

### Computed Columns

These are derived from other columns or from functions.
They're often used to provide easier access to data without denormalizing it

Example:

CREATE TABLE PetStore.Pet
(
PetID int IDENTITY(1,1) PRIMARY KEY,
PetName nvarchar(30) NOT NULL,
DateOfBirth date NOT NULL,
YearOfBirth AS DATEPART(year, DateOfBirth)
);

We use a function of datepart that extracts the year from the date of birth.

I can just call that column that would automatically then run the function and it would give you that information from there.
But it is not storing any data.
All that is stored in the schema of the table is that definition.

If you put PERSISTED after 'DATEPART(year, DateOfBirth)', the value, when you create a record or when you update a record, the value is stored in that table.
But, because we have got a calculation in there, it would be automatically maintained.

Updating the date of birth, it would automatically update the year of birth for your data.
You don't have to do anything to do maintenance of it.
Strictly we are breaking normalization rules, I have got year of birth which has a dependency on the date of birth but you have to be pragmatic sometimes and think well actually yes we are, however it means our queries run much faster.

### More on Tables

nvarchar means it uses unicode which is a character set for international character.

For Composite key, you put Primary key syntax at the end.
E.g.
PRIMARY KEY (CourierID, CourierCode)

varchar(max) is specified so that the quantity of comments is not limited. The text data type is deprecated and has been replaced by varchar(max).

## Types of Data Integrity

1. Domain integrity: Talking about contents of an individual column. We do this by specifying correct data type.

2. Entity integrity: Talking about a whole row and how it works. Unique by primary key.

3. Referential integrity: Talking about relationships between tables.

Above are theoretical constructs of integrity.

Null actually means unknown.
Now where it becomes really important is with things like numbers because if we average a column and it contains nulls, the nulls are ignored.
They are not treated as zero.

## Constraints

They're basically rules to follow. E.g. End of review date should be greater than start review date.

Note: Field names are in square brackets (Transact SQL)

ALTER TABLE [SalesLT].[Courier] ADD CONSTRAINT [DF_COURIER_StartDate] DEFAULT (getdate()) FOR [StartDate]
GO

ALTER TABLE [SalesLT].[Courier] WITH NOCHECK ADD CONSTRAINT [CK_Courier_ReviewDate] CHECK (([ReviewDate]>[StartDate]))
GO

ALTER TABLE [SalesLT].[Courier] CHECK CONSTRAINT [CK_Courier_ReviewDate]
GO

NOCHECK means don't check current data.
getdate() puts in today's date if no date is given (NULL)

### Primary and Foreign key constraints

Candidate keys are the columns that are unique and either of them can be primary keys.

Foreign key constraint: It checks the existance of parent when you create a child. E.g. If an employee makes a sale, that should be valid employee ID
This also helps to decide what to do with children when we delete parent. The children can be set to a default value, or deleted.

So primary keys uniquely identify each row in a table and then a foreign key which looks to make sure that that parent record exists in that other table.

### Cascading Referential Integrity

Our database is almost certainly going to have multiple tables and also it is almost certain that you want to enforce a relationship between those tables the data in one reflects the data in another.
And we can create a join between them. This is a process called referential integrity.

So we have got a sales person, called Fay Burton, here.
Now if I delete this salesperson, we can see that she has got some orders against her SalespersonID. So if we delete Fay Burton, what happens?
Well, if we delete Fay Burton, we want to enforce a rule that says, you can’t delete this record, and that would stop Fay Burton from being deleted. So we still have Fay Burton and we still have her orders. To be able to remove Fay Burton, we would have to go through those orders, change those IDs to someone else, so we don’t lose the data, and we can still then delete Fay Burton
because she has no orders anymore.

The next one to have a look at is CASCADE, in here it’s called cascading referential integrity.
So now what we are going to do is okay. We’ve deleted Fay Burton, and it will automatically delete any orders that are placed against her name. So they automatically get deleted.

We can also set a default salesman ID to be inserted for all the employee orders of employees who left the company and have their records deleted.

### Sequences

This is useful to ensure uniqueness in primary key among different tables that may at some point will be merged.

CREATE SEQUENCE Booking.BookingID AS INT
START WITH 20001
INCREMENT BY 10;

CREATE TABLE Booking.FlightBooking
FlightBookingID INT NOT NULL
PRIMARY KEY CLUSTERED
DEFAULT
(NEXT VALUE FOR Booking.BookingID);

NOTE: Go command is optional

### Referential Integrity & cascading delete

CREATE TALBE dbo.Customer
(
CustomerID int IDENTITY(1,1) PRIMARY KEY,
CustomerName nvarchar(50) NOT NULL
);

INSERT dbo.Customer VALUES ('John'),('Jake');

CREATE TABLE dbo.customerOrder
(
CustomerOrderID int IDENTITY(10001,1) PRIMARY KEY,
CustomerID int NOT NULL
FOREIGN KEY REFERENCES dbo.Customer(CustomerID),
OrderAmount decimal(18,2) NOT NULL
);

INSERT INTO dbo.CustomerOrder (CustomerID, OrderAmount)
VALUES (1,12.50), (2,14.70);

DELETE FROM dbo.Customer WHERE CustomerID = 1 /_ This won't work since there are orders for that customerid_/

/_ If needed, we apply cascading delete _/

ALTER TABLE dbo.CustomerOrder
ADD CONSTRAINT FK_CustomerOrder_Customer
FOREIGN KEY (CustomerID)
REFERENCES dbo.Customer(CustomerID)
ON DELETE CASCADE;

Notes:

1. You specify NOT NULL as part of the ALTER COLUMN argument.
2. You specify PRIMARY KEY as part of the ADD CONSTRAINT argument.
3. To use the default value, you do not specify a value.

## How SQL Server Accesses Data

If there is no index, SQL will do table scan. The system will scan through all of the records in the table and you will see this if you look at the plans that SQL Server uses to answer the questions in a query.

Above method is not optimum which is why we create index.

Let's look at clustered index:
Now the clustered index at the lowest level or the leaf level, it has all of the data. It creates pages of primary key id which reference to actual data on disk. On the top might be a page (Layer 3) containing range of employee ID for each index page.

We might want to have lots of indexes but the downside is that the indexes need to be maintained. The index is brilliant for queries but they would slow down in updates and delete operations for our data. Since on the same transaction of update or delete, the index needs to be updated too.

Let's talk about non-clustered index:
In these ones, the leaf level is only going to have the columns I am interested in indexing.
Let’s say I am interested in indexing the last name.
So I have the last name column and the other value I am going to have in there is the clustering key, the value that’s in the clustered index.
Now what happens now is a slightly different scenario because I am now going to look for a value.
I am going to find what I am looking for it will point to a page, it won’t have all the data but it will have the clustering key.
Once I have got that clustering key, we can then go on to our clustered index and find all of the data.
So we can have one clustered index and as many non-clustered indexes as we require and our non-clustered indexes will have a clustering key that then gives us the information required to then go to the clustered index.

### Selectivity, Density and Index Depth

Through example, selectivity:
So by combining with something else and actually we say ok, distribution center plus date plus customer, that is a composite index, it could be very selective.
So selectivity is very very useful for an index.
Low selectivity something that doesn’t have very many different values or the query we run will very rarely generate anything but a couple of those values is not a very useful index to create on your system.

Density: Nearer to unique something is the more useful is for an index because then less records will get returned

Index Depth: If you've got huge amounts of data in that index, you've very very large composite index.
Then you get less records in each page and because you get less records in each page, you require more pages, more pages means that we have to have more levels in our index and therefore we’ve got more page reads to get the data out the index.
The index is less effective, the index still need to be maintained, so again you can lose some of the benefits without gaining the performance.

### Data Types and Indexes

Numeric data type is the most efficient for index. However, if queries run more on character data type like first name last name or so... It might be better to index that.

### Indexing Computed Columns

So indexing computed columns perfectly allowed.
Just make sure that you are aware of what would happen with the negative side of it if you do updates that later need to be maintained and just be aware that they have to be deterministic, i.e. the results of our query will always be the same, even if I run it next week, next month, next year, the result will always be the same of a deterministic query.

NOTE: We can make composite index. In this case it is best to have first column as highly selective i.e. it will remove 90% of data on search. E.g. (Last Name, First Name)

### Index Statistics

SQL uses this to optimize query before it is run. Like which index will be actually useful and if no index at all will be useful.

Index statistics: So your indexes hold a statistics and it will have things like the selectivity, the lowest value, highest value, and a histogram of values through there, a sampling of data if you like.
So that SQL can get a good idea of what data it contains and therefore how it should actually optimize that query.

Statistics by default, are auto created and auto updated.
You can automatically update, and there’s a stored procedure called SPUPDATESTATS that will allow you to, ok we’ve got some really important month end reports running now, I’d like to update my statistics prior to that because I know that I need a high performance for those queries.

### Viewing Index Statistics

E.g.:
DBCC SHOW_STATISTICS( "Sales.SalesOrderDetail", PK_SalesOrderDetail_SalesOrderID_SalesOrderDetailID );

## What Is a View?

A view is just a definition of the structure that you are going to output for your query. It does not contain any data in itself.
So all we can do with a view is combine data from multiple tables, output it in the format that you want.

Essentially what you are doing is you are presenting the results of a query.

We can combine data from multiple different columns, we can do calculations so we do not have to store calculated data in our database.
We could create it in the view so the view at runtime when it outputs the data, then it runs the calculation and then it presents the data as we want.

So a view is stored.
The definition of it is stored in a table called syscomments.
There is a system table that contains our view definition.

So personally, I often create a view for every single table even if they are not required.
Just so that I know in the future if there is any modification in the structure of my data, that as long as I create it to look the same through the view, the client applications will still continue to work and it gives me that safety, if you like in the future.
So views are incredibly useful things, any talk of them slowing down queries you can realistically ignore it.
They don’t really slow down queries to any extent, but they do give you a huge amount of functionality.

### Dynamic Management Views

These return some really useful system information that we can get from the system for SQL Server databases.

SELECT [database_id]
,[total_page_count]
,[allocated_extent_page_count]
,[unallocated_extent_page_count]
FROM [AdventureWorks].[sys].[dm_db_file_space_usage]

Having said that, this may not have all the information I require and in that case we can actually use a CROSS APPLY statement in here to actually get some more information and this is using sys.database_files because we can join the two together.

So they are very very useful to extract system information and you can use it for troubleshooting and use it for system information or documentation about your system.

### Querying Catalog Views and DMVs

SELECT \* FROM sys.views

SELECT \* FROM sys.tables

SELECT \* FROM sys.objects
WHERE type_desc = 'VIEW'

So, to start with, let's have a look at the dm exec connection.

SELECT \* FROM sys.dm_exec_connections

SELECT \* FROM sys.dm_exec_sessions

SELECT \* FROM sys.dm_exec_requests

SELECT \* FROM sys.dm_exec_query_stats
ORDER BY max_logical_reads DESC;

A complex query combining output of multplie DMVs:

SELECT TOP(20) qs.max_logicial_reads, st.text
FROM sys.dm_exec_query_stats AS qs
CROSS APPLY sys.dm_exec_sql_text(qs.sql_handle) AS st
ORDER BY qs.max_logical_reads DESC;

### Creating, Dropping and Altering Views

CREATE VIEW Sales.vHighValueSales
AS
SELECT OrderID, OrderDate, CustomerID, OrderValue
FROM Sales.Orders
WHERE OrderValue > 1000

So a CREATE VIEW statement is basically a SELECT statement, now just make sure in there, a standard select statement we have got the OrderID, OrderDate, CustomerID, OrderValue,
everything in there has got a column name.
So if you use any form of calculation or anything like that, that would appear with a NULL column name, ensure that you supply an alias column name for that column and then you have a perfectly acceptable view definition.

Optional arguments:
WITH ENCRYPTION, SCHEMABINDING, VIEW_METADATA

encryption would stop you to actually be able to see the source
of the view, the definition of the view then maybe some security and maybe I want to avoid people knowing my high value sales that are over a thousand.

schema binding would stop any underlying tables from being edited so their structure wouldn’t end up breaking the view

view_metadata is about holding meta data for the view, so do you want to allow queries to actually to find out information about underlying tables.

To drop a view,
DROP VIEW Sales.vHighValueSales

To alter a view,
ALTER VIEW Sales.vHighValueSales
AS
SELECT OrderID, OrderDate, CustomerID, OrderValue
FROM Sales.Orders
WHERE OrderValue > 1000
WITH CHECK OPTION

Almost same as create view however columns changed and with check option to check the values in our database or not.

people enter records into a view, not knowing it’s a view, when they look at it, they don’t see the data because they don’t realize what the view outputting is different to the actuals being stored in the underlying table. WITH CHECK option prevents that, and makes sure that data going in or being altered meets the same rules as data being returned.

### Ownership Chains

An ownership chain is looking at the path you would take to get to the data.

There are two types: Unbroken and broken

Unbroken chain: give rights to the view to people who do not have any rights on the underlying table. So they can open the view, they can’t open the table directly.

Broken chain: I own a view and XYZ owns the underlying table. Now, in that scenario, if I give someone access to the view, they would also have to have access to the data in the underlying table.

Note: we can have a look at sys views and that gives information about views in the database, lists the views in the database.

### Updateable Views

So data can be modified through a view if you follow these rules:

Now the first one, is if you include columns from one table. If the view includes data from multiple tables, then it can’t update both those tables at once. Having said that, you can create triggers on views that would allow the trigger to do the update on both the tables.

The columns directly reference the table columns, so they can’t use aggregations or computations.
They must be direct table information.

The updates comply with the base table constraints

- NULL or NOT NULL
- Primary and foreign keys can be enforced

WITH CHECK option does not prevent data being inserted that does not comply with the view definition. So if the view only displays data for this year, then you can only enter data for this year, even if the underlying table has data from multiple years.

### Create, alter and drop view

SELECT C.CustomerID, P.FirstName, P.LastName, O.OrderDate, O.SubTotal, O.TotalDue
FROM Sales.Customer AS C
INNER JOIN Person.Person as P
ON C.PersonID=P.BusinessEntityID
INNER JOIN Sales.SalesOrderHeader as O
ON C.CustomerID=O.CustomerID

Above query is normal select query. Now we js add create view

CREATE VIEW Sales.vw_CustomerOrders
AS
SELECT C.CustomerID, P.FirstName, P.LastName, O.OrderDate, O.SubTotal, O.TotalDue
FROM Sales.Customer AS C
INNER JOIN Person.Person as P
ON C.PersonID=P.BusinessEntityID
INNER JOIN Sales.SalesOrderHeader as O
ON C.CustomerID=O.CustomerID

Now we can query from that view.

SELECT \* FROM Sales.vw_CustomerOrders

You'll see that you get exactly the same results so we don't have to put in all the JOIN syntax. We could just select star from the view and it makes it much more straightforward and much more straightforward for applications to see the data that they require because if you've already sorted by columns already done the joins we need. And everything has been created in the structure that we require it.

SELECT OBJECT_DEFINITION(OBJECT_ID(N'Sales.vw_CustomerOrders', N'V'))

VIEW has another criteria which is optional which I'm entering V. That's an object type.
V is VIEW. We could do some other things with that as well. We could use P for STORED PROCEDURE, D for DEFAULT, for example.

We'll run this one, and this returns the OBJECT DEFINITION of that view.

# SQL Practice

-- practice.sql --

SELECT \* FROM EMPLOYEES;

SELECT EMPLOYEE_ID FROM EMPLOYEES;

SELECT FIRST_NAME ||' ' || LAST_NAME "FULL NAME" FROM EMPLOYEES;

SELECT SALARY FROM EMPLOYEES
WHERE SALARY BETWEEN 1000 AND 10000;

SELECT HIRE_DATE DT FROM EMPLOYEES ORDER BY DT DESC;

SELECT FIRST_NAME FN FROM EMPLOYEES WHERE FIRST_NAME LIKE 'A%' AND FIRST_NAME LIKE '%a'; /_ You can't give alias for like _/

SELECT \* FROM EMP;

DESC EMP;

SELECT 34/67\*44 FROM DUAL;

SELECT _ FROM DEPT;
SELECT _ FROM EMP;

/_ manager's manager: _/
SELECT E.EMPNO, E.ENAME, D.DNAME, E.MGR, M.ENAME, M.MGR, MM.ENAME
FROM EMP E, DEPT D, EMP M, EMP MM
WHERE E.DEPTNO = D.DEPTNO AND E.MGR = M.EMPNO AND M.MGR = MM.EMPNO AND MM.DEPTNO=D.DEPTNO;

/_ SUBQUERY _/
DROP TABLE DISK1;

CREATE TABLE DISK1(EMPNO NUMBER(3), ENAME VARCHAR2(15), SAL NUMBER(6,2));

CREATE TABLE DISK1 AS SELECT \* FROM EMP;

DESC DISK1;

DESC EMP;

SELECT \* FROM EMP;

SELECT DEPTNO FROM EMP GROUP BY DEPTNO;

SELECT AVG(SAL) FROM EMP;

-- SELECT DEPTNO FROM EMP WHERE SAL=(SELECT MAX(AVG(SAL)) AVG_SAL FROM EMP GROUP BY DEPTNO);
SELECT \* FROM DEPT;

SELECT E.DEPTNO, D.DNAME, E.MAX_AVG_SAL
FROM (
SELECT DEPTNO, AVG(SAL) MAX_AVG_SAL
FROM EMP
GROUP BY DEPTNO
HAVING AVG(SAL) = (
SELECT MAX(
AVG(SAL)
) AVG_SAL
FROM EMP
GROUP BY DEPTNO
)
) E, DEPT D
WHERE D.DEPTNO = E.DEPTNO;

SELECT ROWNUM, DEPTNO FROM DEPT WHERE ROWNUM < 2;

SAVEPOINT A;

CREATE TABLE TABLEDUMMY AS SELECT \* FROM EMP;

SAVEPOINT B;

DELETE FROM TABLEDUMMY;

DESC TABLEDUMMY;

ROLLBACK TO SAVEPOINT B;

DESC TABLEDUMMY;

SELECT \* FROM TABLEDUMMY;

COMMIT;

create table sal_history ( eid number(4), hiredate date, sal number(9,2));
create table mgr_history ( eid number(4), manager number(4), sal number(9,2));
create table special_sal ( did number(4), sal number(9,2) );
create table hiredate_history_00 ( did number(4), hdate0 date );
create table hiredate_history_99 ( did number(4), hdate9 date );
create table hiredate_history ( did number(4), hdate date );
create table sales_source_data ( empno number(4), week_id number(1),
sales_mon number(5), sales_tue number(5), sales_wed number(5),
sales_thur number(5), sales_fri number(5));
insert into sales_source_data values (176, 6, 2000, 3000, 4000, 5000, 6000);
create table sales_info (empno number(4), wid number(2), sale number(5));

SELECT _ FROM SAL_HISTORY;
SELECT _ FROM MGR_HISTORY;

INSERT ALL
INTO sal_history VALUES(empid, hiredate, sal)
INTO mgr_history VALUES(empid, mgr, sal)
SELECT empno EMPID, hiredate HIREDATE,
sal SAL, mgr MGR
FROM emp
WHERE empno > 7698;

SELECT \* FROM SAL_HISTORY;

SELECT \* FROM MGR_HISTORY;

SHOW ALL;

SET SERVEROUTPUT ON;

SHOW SERVEROUTPUT;

BEGIN
DBMS_OUTPUT.PUT_LINE('Welcome');
END;
/

DECLARE
I NUMBER(4) := &I;
BEGIN
DBMS_OUTPUT.PUT_LINE(I);
END;
/

VARIABLE TEMP NUMBER

BEGIN
:TEMP:=10;
DBMS_OUTPUT.PUT_LINE(:TEMP);
END;
/

BEGIN
DBMS_OUTPUT.PUT_LINE(:TEMP);
END;
/

CREATE TABLE retired( ENAME VARCHAR2(100), EAGE NUMBER(3) );

DECLARE
TYPE MYTYPE IS RECORD(
NO NUMBER, NAME EMP.ENAME%TYPE);
MYREC MYTYPE;
BEGIN
SELECT EMPNO, ENAME INTO MYREC FROM EMP WHERE EMPNO = &EMPNO;
DBMS_OUTPUT.PUT_LINE(MYREC.NO || ' HIS NAME IS ' || MYREC.NAME);
END;
/

declare
type mytype is table of number index by binary_integer;
myvar mytype;
begin
myvar(0) := 25;
myvar(1) := 23
dbms_output.put_line(myvar(0));
end;
/

DESC EMP;

SELECT \* FROM DEPT;

DECLARE
TYPE myemp IS RECORD (
ENO NUMBER(10),
EMPNAME VARCHAR2(100),
DNO NUMBER(10),
DEPTNAME VARCHAR(10)
);
TYPE emprec IS TABLE OF myemp INDEX BY BINARY_INTEGER;
erec emprec;
CURSOR mycur IS SELECT E.EMPNO, E.ENAME, D.DEPTNO, D.DNAME FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO;
i NUMBER := 0;
BEGIN
OPEN mycur;
LOOP
FETCH mycur into erec(i);
EXIT WHEN mycur%notfound;
i:=i+1;
END LOOP;
CLOSE mycur;
FOR j in 0..i-1
LOOP
DBMS_OUTPUT.PUT_LINE(erec(j).ENO || ' ' || erec(j).EMPNAME || ' ' || erec(j).DNO || ' ' || erec(j).DEPTNAME);
END LOOP;
END;
/

DECLARE
vdeptrow dept%rowtype;
CURSOR dept_cur RETURN dept%ROWTYPE IS SELECT \* FROM dept WHERE deptno = &dno;
BEGIN
OPEN dept_cur;
FETCH dept_cur INTO vdeptrow;
DBMS_OUTPUT.PUT_LINE(vdeptrow.deptno||' '||vdeptrow.dname ||' '||vdeptrow.loc);
CLOSE dept_cur;
END;
/

-- TRIGGER

SELECT \* FROM DEMO1;

SHOW SERVEROUTPUT;

SET SERVEROUTPUT ON;

CREATE OR REPLACE TRIGGER TRIGINS1 AFTER INSERT ON DEMO1 FOR EACH ROW
BEGIN
DBMS_OUTPUT.PUT_LINE('ROW INSERTED INTO DEMO1 TABLE');
END;
/

-- CREATE TABLE DEMO1 AS SELECT \* FROM EMP; -- To duplicate

SELECT \* FROM DEMO1;

INSERT INTO DEMO1 VALUES(11, 'NEEL', 'ACTOR', 7839, '01-JAN-1950', 200, NULL, 50);

CREATE TABLE EMPSALUPPAT(EMPNO NUMBER(4), OSAL NUMBER(6,2), NSAL NUMBER(6,2), DOI DATE);

CREATE OR REPLACE TRIGGER TRIGSALUPPAT AFTER UPDATE OF SAL ON DEMO1 FOR EACH ROW
BEGIN
INSERT INTO EMPSALUPPAT VALUES(:OLD.EMPNO, :OLD.SAL, :NEW.SAL, SYSDATE);
END;
/

SELECT \* FROM DEMO1;

UPDATE DEMO1 SET SAL=4000 WHERE EMPNO=2222;

SELECT \* FROM DEMO1;

SELECT \* FROM EMPSALUPPAT;

-- TRIGGER:

DESC USER_TRIGGERS;
DESC USER_SOURCE;

SELECT TEXT FROM USER_SOURCE WHERE NAME = 'TRIGSALUPPAT';
/\*
Assignment: Create 3 tables -
stock table: product id (primary key), product name, quantity (default 0)
purchase table: purchase id, product id (foreign key), purchase date and purchase quantity
sales table: bill date, product id, quantity

Stock cannot go to negative (trigger)
Stock should be added for purchase or reduced for sell out
\*/

CREATE TABLE STOCKPAT(
PRODUCTID NUMBER(10) NOT NULL,
PRODUCTNAME VARCHAR2(100),
QUANTITY NUMBER(10) DEFAULT 0,
PRIMARY KEY(PRODUCTID)
);

DROP TABLE STOCKPAT;

CREATE TABLE PURCHASEPAT(
PRODUCTID NUMBER(10) NOT NULL,
PURCHASEID NUMBER(10) NOT NULL,
PURCHASEDATE DATE,
PURCHASEQUANTITY NUMBER(10),
PRIMARY KEY(PURCHASEID),
FOREIGN KEY (PRODUCTID) REFERENCES STOCKPAT(PRODUCTID)
);

DROP TABLE PURCHASEPAT;

CREATE TABLE SALESPAT(
PRODUCTID NUMBER(10) NOT NULL,
BILLDATE DATE,
SALESQUANTITY NUMBER(10),
PRIMARY KEY(PRODUCTID)
);

DROP TABLE SALESPAT;

SELECT _ FROM STOCKPAT;
SELECT _ FROM PURCHASEPAT;
SELECT \* FROM SALESPAT;

VARIABLE PRODNAME VARCHAR2(100); -- only till session

BEGIN
:PRODNAME := 'smthng';
DBMS_OUTPUT.PUT_LINE(:PRODNAME || ' ss ');
END;
/

PRINT PRODNAME;

CREATE OR REPLACE TRIGGER TRIGSTOCKINSERT AFTER INSERT OR UPDATE ON PURCHASEPAT FOR EACH ROW
DECLARE
L_COUNT NUMBER(2);
CUSTPROD VARCHAR2(100);
BEGIN
SELECT COUNT(\*) INTO L_COUNT FROM STOCKPAT WHERE PRODUCTID = :NEW.PRODUCTID;
IF L_COUNT > 0 THEN
UPDATE STOCKPAT SET QUANTITY=QUANTITY + :NEW.PURCHASEQUANTITY WHERE PRODUCTID=:NEW.PRODUCTID;
ELSE
--:PRODNAME := '&CUSTPROD';
--INSERT INTO STOCKPAT VALUES(:NEW.PRODUCTID, 'PRODNAME' , :NEW.PURCHASEQUANTITY);
raise_application_error(-20504,'There is no product with such productid');
END IF;
END;
/

CREATE OR REPLACE TRIGGER TRIGSTOCKDEL AFTER INSERT OR UPDATE ON SALESPAT FOR EACH ROW
DECLARE
L_COUNT NUMBER(2);
QUANT NUMBER(10);
BEGIN
SELECT COUNT(\*) INTO L_COUNT FROM STOCKPAT WHERE PRODUCTID = :NEW.PRODUCTID;
IF L_COUNT > 0 THEN
SELECT QUANTITY INTO QUANT FROM STOCKPAT WHERE PRODUCTID = :NEW.PRODUCTID;
IF QUANT < :NEW.SALESQUANTITY THEN
raise_application_error(-20505,'You cannot sale more than what you have!');
END IF;
UPDATE STOCKPAT SET QUANTITY=QUANTITY - :NEW.SALESQUANTITY WHERE PRODUCTID=:NEW.PRODUCTID;
ELSE
--INSERT INTO STOCKPAT VALUES(:NEW.PRODUCTID, :NEW.PRODUCTNAME, :NEW.SALESQUANTITY);
raise_application_error(-20504,'There is no product with such productid');
END IF;
END;
/

INSERT INTO STOCKPAT VALUES(100, 'Mango',DEFAULT);
INSERT INTO STOCKPAT VALUES(101, 'APPLE', DEFAULT);

SELECT \* FROM STOCKPAT;

INSERT INTO PURCHASEPAT VALUES(100, 1000, '25-JUL-2018', 2);
INSERT INTO PURCHASEPAT VALUES(102, 1001, '25-JUL-2018', 2);

SELECT _ FROM STOCKPAT;
SELECT _ FROM PURCHASEPAT;

INSERT INTO SALESPAT VALUES(100, '25-JUL-2018', 3);

SELECT \* FROM SALESPAT;

INSERT INTO SALESPAT VALUES(100, '25-JUL-2018', 1);

SELECT _ FROM SALESPAT;
SELECT _ FROM STOCKPAT;

INSERT INTO PURCHASEPAT VALUES(102, 1003, '25-JUL-2018', 2);

INSERT INTO PURCHASEPAT VALUES(107, 1008, '25-JUL-2018', 2);

CREATE TABLE TEMPEMP(
EMPNO NUMBER(10),
EMPNAME VARCHAR2(100)
);

CREATE OR REPLACE TRIGGER TRIGTEMPEMP BEFORE INSERT ON TEMPEMP FOR EACH ROW
DECLARE
TEMPID NUMBER(10);
L_COUNT NUMBER(2);
BEGIN
SELECT COUNT(\*) INTO L_COUNT FROM TEMPEMP WHERE EMPNO = :NEW.EMPNO;
IF (L_COUNT > 0) THEN
RAISE_APPLICATION_ERROR('-20600', 'This empno exists!');
END IF;
END;
/

SELECT \* FROM TEMPEMP;

INSERT INTO TEMPEMP VALUES(100,'bob');
INSERT INTO TEMPEMP VALUES(100,'bobee');

-- Enumerated types

create or replace type address_ty as object
(
street varchar2(40),
city varchar2(20)
);
/

create table persondata(empid number(5), details address_ty);

select \* from persondata;

insert into persondata values(101, address_ty('mo', 'ka'));

select \* from persondata;

select empid, A.details.street, A.details.city from persondata A;

-- drop type address_ty force; -- columns will be dropped where it is referenced because of force

-- Nested Tables

/\*
Subprograms

functions return value
procedures perform action and do not return any value. In oracle, it may or may not return value.

Advantages of subprogrmas:
extensibility
modularity
reusability and maintainability
abstraction

A procedure has 2 parts:
-specification
-body

spec (specification) contain only declarative part

In oracle, parameters can be supplied in 3 different modes:
in - parameter can just accept value
out - parameter can only return value
inout - both

DEFAULT: in

parameters in procedure statement are formal parameters.
in anonymous block they are actual parameters.

FUNCTIONS

ANYTHING IN BOX BRACKETS WHILE READING DOCUMENTATION IT DENOTES OPTIONAL

DBMS_OUTPUT is a package

\*/

CREATE OR REPLACE PROCEDURE MYPROCPAT (A IN NUMBER, B IN NUMBER) IS
RES NUMBER;
BEGIN
RES := A+B;
DBMS_OUTPUT.PUT_LINE('Result is: ' || RES);
END;
/

EXECUTE MYPROCPAT(55,55);
EXEC MYPROCPAT(2,2);

CREATE OR REPLACE PROCEDURE MYPROCOUTPAT (A IN NUMBER, B IN NUMBER, C OUT NUMBER) IS
BEGIN
C:= A+B;
END;
/

VARIABLE N NUMBER;
EXEC MYPROCOUTPAT(1,1,:N);
PRINT N;

-- IF YOU HAVE DML STATEMENTS IN FUNCTION THEN CALL THEM THROUGH ANONYMOUS BLOCK ONLY

/_
package contains function1. When employee id given input then it shoould return per annum salary.
Another function, empid supplied and it hsould return manager's name.
procedure to calculate (parameter wuld be emp no.) bonus. sal < 1000 then bonus is 10%. 1000-2000 20%
2000-3000 30%
3000 and above 50%
_/

SELECT \* FROM EMP;

CREATE OR REPLACE PACKAGE PATPACK AS
FUNCTION PERANNUM(EID NUMBER) RETURN NUMBER;
FUNCTION MNGRNAME(EID NUMBER) RETURN VARCHAR2;
PROCEDURE BONUS(EID NUMBER);
END PATPACK;
/

SELECT \* FROM EMP;

CREATE OR REPLACE PACKAGE BODY PATPACK AS
FUNCTION PERANNUM(EID NUMBER) RETURN NUMBER IS P_A_SAL NUMBER;
BEGIN
SELECT SAL\*12 INTO P_A_SAL FROM EMP WHERE EMPNO=EID;
RETURN P_A_SAL;
END PERANNUM;

FUNCTION MNGRNAME(EID NUMBER) RETURN VARCHAR2 IS M_NAME VARCHAR(30);
BEGIN
SELECT ENAME INTO M_NAME FROM EMP WHERE EMPNO = (SELECT MGR FROM EMP WHERE EMPNO = EID);
RETURN M_NAME;
END MNGRNAME;

PROCEDURE BONUS(EID NUMBER) IS
SAL_NO NUMBER;
BEGIN
SELECT SAL INTO SAL_NO FROM EMP WHERE EMPNO = EID;
IF SAL_NO < 1000 THEN
DBMS_OUTPUT.PUT_LINE('Your salary with bonus is : ' || TO_CHAR( SAL_NO + (SAL_NO * 0.10) ) || ' and your bonus is: ' || TO_CHAR(SAL_NO*0.10) );
ELSIF SAL_NO >= 1000 AND SAL_NO <= 2000 THEN
DBMS_OUTPUT.PUT_LINE('Your salary with bonus is : ' || TO_CHAR( SAL_NO + (SAL_NO * 0.20) ) || ' and your bonus is: ' || TO_CHAR(SAL_NO*0.20) );
ELSIF SAL_NO > 2000 AND SAL_NO <= 3000 THEN
DBMS_OUTPUT.PUT_LINE('Your salary with bonus is : ' || TO_CHAR( SAL_NO + (SAL_NO * 0.30) ) || ' and your bonus is: ' || TO_CHAR(SAL_NO*0.30) );
ELSIF SAL_NO > 3000 THEN
DBMS_OUTPUT.PUT_LINE('Your salary with bonus is : ' || TO_CHAR( SAL_NO + (SAL_NO * 0.50) ) || ' and your bonus is: ' || TO_CHAR(SAL_NO*0.50) );
END IF;

END BONUS;

END PATPACK;
/

SELECT \* FROM EMP;

EXEC PATPACK.BONUS(7369);

SELECT PATPACK.MNGRNAME(7369) FROM DUAL;

-- assignment.sql --

SELECT \* FROM EMP;

SELECT ENAME FROM EMP WHERE JOB LIKE 'ANALYST' OR JOB LIKE 'SALESMAN';

SELECT \* FROM EMP WHERE HIREDATE < '30-SEP-1981';

SELECT ENAME,JOB FROM EMP WHERE JOB NOT LIKE 'MANAGER';

SELECT ENAME FROM EMP WHERE EMPNO=7369 OR EMPNO=7521 OR EMPNO=7839 OR EMPNO=7934 OR EMPNO=7788;

SELECT DEPTNO,ENAME FROM EMP WHERE DEPTNO != 30 AND DEPTNO != 40 AND DEPTNO != 10;

SELECT ENAME,HIREDATE FROM EMP WHERE HIREDATE BETWEEN '30-JUN-1981' AND '31-DEC-1981';

SELECT DISTINCT JOB FROM EMP;

SELECT ENAME FROM EMP WHERE COMM IS NULL;

SELECT ENAME,JOB FROM EMP WHERE MGR IS NULL;

SELECT ENAME FROM EMP WHERE DEPTNO IS NULL;

SELECT ENAME FROM EMP WHERE COMM IS NOT NULL;

SELECT ENAME FROM EMP WHERE ENAME LIKE 'S%' OR ENAME LIKE '%S';

SELECT ENAME FROM EMP WHERE ENAME LIKE '\_I%';

SELECT EMPNO, ENAME FROM EMP WHERE ENAME LIKE '\_i%' OR ENAME LIKE '\_I%';

/_ #15 _/
SELECT EMPNO,ENAME FROM EMP WHERE ENAME NOT LIKE '%T';

SELECT MGR, EMPNO, ENAME, HIREDATE FROM EMP ORDER BY MGR ASC;

SELECT MGR, EMPNO, ENAME, HIREDATE FROM EMP ORDER BY MGR ASC, HIREDATE DESC;

SELECT \* FROM EMP ORDER BY COMM ASC;

SELECT EMPNO, ENAME, SAL FROM EMP WHERE SAL LIKE '%5%';

/_ #20 _/
SELECT EMPNO, ENAME, SAL FROM EMP WHERE SAL LIKE '%500';

SELECT DISTINCT JOB FROM EMP;

SELECT ENAME, DEPTNO FROM EMP WHERE DEPTNO=10 OR DEPTNO=30 ORDER BY ENAME;

SELECT ENAME, JOB FROM EMP WHERE DEPTNO=20 AND SOUNDEX(JOB)=SOUNDEX('CLARK');

SELECT ENAME FROM EMP WHERE ENAME LIKE '%LL%' OR ENAME LIKE '%TH%';

/_ #25: _/

SELECT \* FROM EMP WHERE EMPNO NOT IN (SELECT DISTINCT MGR FROM EMP WHERE MGR IS NOT NULL);

SELECT ENAME, HIREDATE FROM EMP WHERE TO_CHAR(HIREDATE, 'YYYY') = '1981';

SELECT ENAME, JOB, SAL, COMM FROM EMP WHERE JOB='SALESMAN' AND SAL > COMM ORDER BY SAL DESC, ENAME;

SELECT ENAME || ' WORKS SINCE ' || HIREDATE || ' AS ' || JOB DESCRIPTION FROM EMP;

/_ Substitution varialbe: _/
DEFINE start_date = '01-JAN-1980'
DEFINE end_date = '31-DEC-1981'
--prints all substitution variables
DEFINE;

SELECT ENAME, HIREDATE FROM EMP WHERE HIREDATE BETWEEN '&start_date' AND '&end_date';

/_ #30 _/

SELECT ENAME,JOB,SAL FROM EMP WHERE SAL < 1000 AND (JOB='CLERK' OR JOB='MANAGER');

SELECT ENAME, SAL*12 "ANNUAL SALARY" FROM EMP WHERE SAL*12 > 14000;

-- CASE INSENSITIVE QUERY:
SELECT \* FROM EMP WHERE UPPER(ENAME) = UPPER('allen');

-- NOTE: CONCAT ONLY ACCEPTS 2 PARAMETERS. USE SINGLE QUOTE FOR STRING
SELECT CONCAT(CONCAT(ENAME, ' WORKS AS '), JOB) DESCRIPTION FROM EMP WHERE ENAME='SMITH';

/_ #35: _/
SELECT ENAME FROM EMP WHERE ENAME LIKE '\_\_L%';

SELECT \* FROM EMP WHERE GREATEST(COMM, SAL)=SAL;

SELECT ENAME, ROUND(SAL + (SAL\*0.15)) "INC SAL" FROM EMP;

SELECT EMPNO, ENAME FROM EMP WHERE EMPNO/2!=FLOOR(EMPNO/2);

SELECT COUNT(\*) "No. of employees" FROM EMP;

-- #40:

SELECT COUNT(DISTINCT JOB) "No. of designations" FROM EMP;

SELECT SUM(SAL) "Total salaries paid" FROM EMP;

SELECT MAX(SAL), MIN(SAL), AVG(SAL) FROM EMP;

SELECT MAX(SAL) FROM EMP WHERE JOB='SALESMAN';

SELECT COUNT(\*), AVG(SAL) FROM EMP WHERE DEPTNO=20;

-- #45:

SELECT ENAME, SAL, (SAL\*0.10) PF FROM EMP;

SELECT ENAME, ABS(CAST(TO_CHAR(HIREDATE,'YYYY') AS INT) - CAST(TO_CHAR(SYSDATE, 'YYYY') AS INT)) "Years of Experience" FROM EMP WHERE ABS(CAST(TO_CHAR(HIREDATE,'YYYY')AS INT) - CAST(TO_CHAR(SYSDATE, 'YYYY') AS INT)) > 26;

SELECT \* FROM EMP ORDER BY SAL;

SELECT ENAME, HIREDATE FROM EMP ORDER BY HIREDATE DESC;

SELECT ENAME, SAL, SAL*0.10 PF, SAL*0.50 HRA, SAL*0.30 DA, (SAL + SAL*0.10 + SAL*0.50 + SAL*0.30) GROSS FROM EMP ORDER BY GROSS;

-- #50:
SELECT EMPNO,ENAME,MONTHS_BETWEEN(TO_DATE(SYSDATE), HIREDATE) FROM EMP WHERE MONTHS_BETWEEN(TO_DATE(SYSDATE), HIREDATE) > 200;

SELECT \* FROM TAB; -- salgrade table doesn't exist

SELECT ENAME, TRIM( ' ' FROM TO_CHAR(NEXT_DAY(ADD_MONTHS(HIREDATE, 6),'MONDAY'), 'DAY ", the " DDTH " of " MONTH ", " YYYY' )) REVIEW FROM EMP;

-- 53:

SELECT ENAME, SAL,
CASE WHEN SAL > 3000 THEN 'GOOD SALARY'
WHEN SAL <=3000 AND SAL >= 2000 THEN 'AVERAGE SALARY'
WHEN SAL <=2000 AND SAL >= 100 THEN 'POOR SALARY'
END AS "SALARY COMMENT"
FROM EMP;

-- 57:

SELECT ENAME, HIREDATE, TO_CHAR(HIREDATE, 'DY') FROM EMP WHERE TO_CHAR(HIREDATE, 'DY') = 'MON';

-- 58:

DECLARE
DOB VARCHAR2(15) := '&DOB';
DAYS NUMBER(15);
BEGIN
DBMS_OUTPUT.PUT_LINE(DOB);
SELECT ABS( TO_DATE(DOB, 'DD-MM-YYYY') - SYSDATE ) DAYS INTO DAYS FROM DUAL;
DBMS_OUTPUT.PUT_LINE('You are ' || DAYS || ' days old');
END;
/

-- 60: Not complete
DECLARE
NAME VARCHAR2(100);
COMMGIVEN NUMBER(10);
CURSOR MYCUR IS SELECT ENAME, COMM FROM EMP;
BEGIN
OPEN MYCUR;
LOOP
FETCH MYCUR INTO NAME, COMMGIVEN;
EXIT WHEN MYCUR%NOTFOUND;
IF COMMGIVEN IS NOT NULL THEN
DBMS_OUTPUT.PUT_LINE(NAME || ' ' || COMMGIVEN);
ELSE
DBMS_OUTPUT.PUT_LINE(NAME || ' No Commision');
END IF;
END LOOP;
CLOSE MYCUR;
END;
/

-- 61:
SELECT E.ENAME, E.JOB, D.DNAME FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO AND D.DNAME='SALES';

-- 62:
SELECT E.ENAME, E.JOB, D.DNAME FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO AND (D.DNAME='ACCOUNTING' OR D.DNAME='RESEARCH');

-- 63:
SELECT E.ENAME, E.JOB, D.DNAME, E.SAL FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO AND (D.DNAME='ACCOUNTING' AND E.SAL>1500);

-- 64:
SELECT E.ENAME, E.JOB, D.DNAME FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO AND (D.DNAME='SALES' AND E.JOB='SALESMAN');

-- 65:
SELECT E.ENAME, E.JOB, D.DNAME FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO AND D.LOC='DALLAS';

-- 66:
SELECT E.ENAME, E.JOB, D.DNAME, E.SAL FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO AND (D.DNAME='SALES' AND E.SAL BETWEEN 1200 AND 1700);

-- 67:
SELECT D.DEPTNO, D.DNAME FROM DEPT D WHERE NOT EXISTS ( SELECT E.DEPTNO FROM EMP E WHERE E.DEPTNO=D.DEPTNO );

-- 68:
SELECT D.DEPTNO, COUNT(\*) NUM_EMP FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO GROUP BY D.DEPTNO;

-- 69:
SELECT D.DEPTNO, COUNT(\*) NUM_EMP FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO AND D.DEPTNO=&ENTER_DEPT_NO GROUP BY D.DEPTNO;

-- 70:
SELECT D.DEPTNO, COUNT(\*) NUM_EMP, SUM(SAL) "Total Salaries" FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO GROUP BY D.DEPTNO;

-- 71:
SELECT JOB, SUM(SAL) "Total Salaries" FROM EMP GROUP BY JOB;

-- 72:
SELECT DEPTNO FROM (SELECT DEPTNO, AVG(SAL) AVG_SAL FROM EMP GROUP BY DEPTNO) WHERE AVG_SAL > 2000;

-- 73:
SELECT D.DEPTNO, COUNT(\*) NUM_EMP, MAX(SAL), MIN(SAL), AVG(SAL) FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO GROUP BY D.DEPTNO;

-- 74:
SELECT D.DEPTNO, COUNT(\*) NUM_EMP FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO GROUP BY D.DEPTNO;

-- 75:
SELECT D.DEPTNO, COUNT(\*) NUM_EMP, SUM(SAL) "Total Salaries" FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO GROUP BY D.DEPTNO;

-- 76:
SELECT JOB, COUNT(\*) "Number of Employees" FROM EMP GROUP BY JOB ORDER BY 2 DESC;
