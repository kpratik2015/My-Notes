# Python Notes

- [Python Notes](#python-notes)
  - [Unpacking elements](#unpacking-elements)
    - [Arbitrary length](#arbitrary-length)
  - [Keeping last N Items](#keeping-last-n-items)
  - [Finding largest or smallest N Items](#finding-largest-or-smallest-n-items)
  - [Implementing a Priority Queue](#implementing-a-priority-queue)
  - [Mapping keys to multiple values in a dictionary](#mapping-keys-to-multiple-values-in-a-dictionary)
  - [Keeping Dictionaries in Order](#keeping-dictionaries-in-order)
  - [Calculating with Dictionaries](#calculating-with-dictionaries)
  - [Finding Commonalities in Two Dictionaries](#finding-commonalities-in-two-dictionaries)
  - [Removing Duplicates from a Sequence while Maintaining Order](#removing-duplicates-from-a-sequence-while-maintaining-order)
  - [Naming a Slice](#naming-a-slice)
  - [Determining the Most Frequently Occurring Items in a Sequence](#determining-the-most-frequently-occurring-items-in-a-sequence)
  - [Sorting a List of Dictionaries by a Common Key](#sorting-a-list-of-dictionaries-by-a-common-key)
  - [Sorting Objects Without Native Comparison Support](#sorting-objects-without-native-comparison-support)
  - [Grouping Records Together Based on a Field](#grouping-records-together-based-on-a-field)
  - [Filtering Sequence Elements](#filtering-sequence-elements)
  - [Extracting a Subset of a Dictionary](#extracting-a-subset-of-a-dictionary)
  - [Mapping Names to Sequence Elements](#mapping-names-to-sequence-elements)
  - [Transforming and Reducing Data at the Same Time](#transforming-and-reducing-data-at-the-same-time)
  - [Combining Multiple Mappings into a Single Mapping](#combining-multiple-mappings-into-a-single-mapping)
  - [Strings and Text](#strings-and-text)
    - [Splitting Strings on Any of Multiple Delimiters](#splitting-strings-on-any-of-multiple-delimiters)
    - [Matching Text at the Start or End of a String](#matching-text-at-the-start-or-end-of-a-string)
    - [Matching Strings Using Shell Wildcard Patterns](#matching-strings-using-shell-wildcard-patterns)
    - [Matching and Searching for Text Patterns](#matching-and-searching-for-text-patterns)
    - [Searching and Replacing Text](#searching-and-replacing-text)
    - [Searching and Replacing Case-Insensitive Text](#searching-and-replacing-case-insensitive-text)
    - [Specifying a Regular Expression for the Shortest Match](#specifying-a-regular-expression-for-the-shortest-match)

## Unpacking elements

### Arbitrary length

```py
>>> record = ('Dave', 'dave@example.com', '773-555-1212', '847-555-1212')
>>> name, email, *phone_numbers = user_record
>>> name
'Dave'
>>> phone_numbers
['773-555-1212', '847-555-1212']
>>> *trailing, current = [10, 8, 7, 1, 9, 5, 10, 3]
>>> trailing
[10, 8, 7, 1, 9, 5, 10]
>>> current
3
```

**Note: Recursion really isn’t a strong Python feature due to the inherent recursion limit.**

## Keeping last N Items

Keeping a limited history is a perfect use for a `collections.deque`. Using `deque(maxlen=N)` creates a fixed-sized queue. When new items are added and the queue is full, the oldest item is automatically removed.

**Note: When writing code to search for items, it is common to use a generator function involving yield**

```py
from collections import deque
def search(lines, pattern, history=5):
  previous_lines = deque(maxlen=history)
  for line in lines:
    if pattern in line:
      yield line, previous_lines
    previous_lines.append(line)
# Example use on a file
if __name__ == '__main__':
  with open('somefile.txt') as f:
    for line, prevlines in search(f, 'python', 5):
      for pline in prevlines:
        print(pline, end='')
      print(line, end='')
      print('-'*20)
```

If you don’t give it a maximum size, you get an unbounded queue that lets you append and pop items on either end.

```py
>>> q = deque()
>>> q.append(1)
>>> q.append(2)
>>> q.append(3)
>>> q
deque([1, 2, 3])
>>> q.appendleft(4)
>>> q
deque([4, 1, 2, 3])
>>> q.pop()
3
>>> q
deque([4, 1, 2])
>>> q.popleft()
4
```

Adding or popping items from either end of a queue has **O(1)** complexity. This is unlike a list where inserting or removing items from the front of the list is **O(N)**.

## Finding largest or smallest N Items

The `heapq` module has two functions—`nlargest()` and `nsmallest()`—that do exactly what you want.

```py
import heapq
nums = [1, 8, 2, 23, 7, -4, 18, 23, 42, 37, 2]
print(heapq.nlargest(3, nums)) # Prints [42, 37, 23]
print(heapq.nsmallest(3, nums)) # Prints [-4, 1, 2]
```

Underneath the covers, they work by first converting the data into a list where items are ordered as a heap. The most important feature of a heap is that `heap[0]` is always the smallest item. Moreover, subsequent items can be easily found using the `heapq.heappop()` method, which pops off the first item and replaces it with the next smallest item (an operation that requires O(log N) operations where N is the size of the heap).

If you are simply trying to find the single smallest or largest item (N=1), it is faster to use `min()` and `max()`.

## Implementing a Priority Queue

```py
import heapq
class PriorityQueue:
  def __init__(self):
    self._queue = []
    self._index = 0
  def push(self, item, priority):
    heapq.heappush(self._queue, (-priority, self._index, item))
    self._index += 1
  def pop(self):
    return heapq.heappop(self._queue)[-1]

# Usage:

class Item:
  def __init__(self, name):
    self.name = name
  def __repr__(self):
    return 'Item({!r})'.format(self.name)

q = PriorityQueue()
q.push(Item('foo'), 1)
q.push(Item('bar'), 5)
```

Two items with same priority will be returned in same order in which they were inserted into the queue. push and pop operations have `O(log N)` complexity where N is the number of items in the heap, they are fairly efficient even for fairly large values of N.

The priority value is negated to get the queue to sort items from highest priority to lowest priority. This is opposite of the normal heap ordering, which sorts from lowest to highest value.

By keeping a constantly increasing index, the items will be sorted according to the order in which they were inserted. However, the index also serves an important role in making the comparison operations work for items that have the same priority level.

## Mapping keys to multiple values in a dictionary

For value, use a list if you want to preserve the insertion order of the items. Use a set if you want to eliminate duplicates (and don’t care about the order).

A feature of defaultdict is that it automatically initializes the first value so you can simply focus on adding items.

```py
from collections import defaultdict
d = defaultdict(list)
d['a'].append(1)
d['a'].append(2)
d['b'].append(4)

# OR

d = defaultdict(set)
d['a'].add(1)
d['a'].add(2)
d['b'].add(4)

# Using a defaultdict simply leads to much cleaner code:
d = defaultdict(list)
for key, value in pairs:
  d[key].append(value)
```

One caution with `defaultdict` is that it will automatically create dictionary entries for keys accessed later on (even if they aren’t currently found in the dictionary). If you don’t want this behavior, you might use `setdefault()` on an ordinary dictionary instead.

## Keeping Dictionaries in Order

```py
from collections import OrderedDict
d = OrderedDict()
d['foo'] = 1
d['bar'] = 2
d['spam'] = 3
d['grok'] = 4
# Outputs "foo 1", "bar 2", "spam 3", "grok 4"
for key in d:
  print(key, d[key])
```

An `OrderedDict` can be particularly useful when you want to build a mapping that you may want to later serialize or encode into a different format.

An `OrderedDict` internally maintains a **doubly linked list** that orders the keys according to insertion order. Be aware that the size of an OrderedDict is more than twice as large as a normal dictionary due to the extra linked list that’s created.

## Calculating with Dictionaries

```py
prices = {
'ACME': 45.23,
'AAPL': 612.78,
'IBM': 205.55,
'HPQ': 37.20,
'FB': 10.75
}

'''
In order to perform useful calculations on the dictionary contents, it is often useful to invert the keys and values of the dictionary using zip().
'''
min_price = min(zip(prices.values(), prices.keys()))

prices_sorted = sorted(zip(prices.values(), prices.keys()))
# prices_sorted is [(10.75, 'FB'), (37.2, 'HPQ'),
# (45.23, 'ACME'), (205.55, 'IBM'),
# (612.78, 'AAPL')]
```

**When doing these calculations, be aware that `zip()` creates an iterator that can only be consumed once.**

```py
prices_and_names = zip(prices.values(), prices.keys())
print(min(prices_and_names)) # OK
print(max(prices_and_names)) # ValueError: max() arg is an empty sequence
```

The solution involving `zip()` solves the problem by “inverting” the dictionary into a sequence of `(value, key)` pairs. When performing comparisons on such tuples, the value element is compared first, followed by the key. This gives you exactly the behavior that you want and allows reductions and sorting to be easily performed on the dictionary contents using a single statement.

## Finding Commonalities in Two Dictionaries

```py
a = {
  'x' : 1,
  'y' : 2,
  'z' : 3
}
b = {
  'w' : 10,
  'x' : 11,
  'y' : 2
}

# Find keys in common
a.keys() & b.keys() # { 'x', 'y' }
# Find keys in a that are not in b
a.keys() - b.keys() # { 'z' }
# Find (key,value) pairs in common
a.items() & b.items() # { ('y', 2) }
# Make a new dictionary with certain keys removed
c = {key:a[key] for key in a.keys() - {'z', 'w'}}
# c is {'x': 1, 'y': 2}
```

## Removing Duplicates from a Sequence while Maintaining Order

```py
def dedupe(items):
  seen = set()
  for item in items:
    if item not in seen:
      yield item
      seen.add(item)

def dedupe_unhashable(items, key=None):
  seen = set()
  for item in items:
    val = item if key is None else key(item)
    if val not in seen:
      yield item
      seen.add(val)
# Usage
a = [1, 5, 2, 1, 9, 1, 5, 10]
print(list(dedupe(a)))
# [1, 5, 2, 9, 10]
a = [{'x': 1, 'y': 2}, {'x': 1, 'y': 3}, {'x': 1, 'y': 2}, {'x': 2, 'y': 4}]
print(list(dedupe_unhashable(a, key=lambda d: (d['x'], d['y']))))
# [{'x': 1, 'y': 2}, {'x': 1, 'y': 3}, {'x': 2, 'y': 4}]
```

The use of a generator function in this recipe reflects the fact that you might want the function to be extremely general purpose—not necessarily tied directly to list processing.

## Naming a Slice

Suppose you have some code that is pulling specific data fields out of a record string with fixed fields (e.g., from a flat file or similar format):

```py
###### 0123456789012345678901234567890123456789012345678901234567890'
record = '....................100 .......513.25 ..........'
# cost = int(record[20:32]) * float(record[40:48]) # don't do this
SHARES = slice(20,32)
PRICE = slice(40,48)
cost = int(record[SHARES]) * float(record[PRICE])
```

## Determining the Most Frequently Occurring Items in a Sequence

```py
words = [
'look', 'into', 'my', 'eyes', 'look', 'into', 'my', 'eyes',
'the', 'eyes', 'the', 'eyes', 'the', 'eyes', 'not', 'around', 'the',
'eyes', "don't", 'look', 'around', 'the', 'eyes', 'look', 'into',
'my', 'eyes', "you're", 'under'
]
from collections import Counter
word_counts = Counter(words)
top_three = word_counts.most_common(3)
print(top_three)
# Outputs [('eyes', 8), ('the', 5), ('look', 4)]
```

A little-known feature of Counter instances is that they can be easily combined using various mathematical operations.

```py
a = Counter(words)
b = Counter(morewords)
# Combine counts
c = a + b
# Subtract counts
d = a - b
```

## Sorting a List of Dictionaries by a Common Key

```py
rows = [
{'fname': 'Brian', 'lname': 'Jones', 'uid': 1003},
{'fname': 'David', 'lname': 'Beazley', 'uid': 1002},
{'fname': 'John', 'lname': 'Cleese', 'uid': 1001},
{'fname': 'Big', 'lname': 'Jones', 'uid': 1004}
]

from operator import itemgetter
rows_by_fname = sorted(rows, key=itemgetter('fname'))
rows_by_lfname = sorted(rows, key=itemgetter('lname','fname'))
print(rows_by_lfname)
# A bit slower but with lambda
rows_by_lfname = sorted(rows, key=lambda r: (r['lname'],r['fname']))
# Can apply to min/max
min(rows, key=itemgetter('uid'))
```

## Sorting Objects Without Native Comparison Support

```py
class User:
  def __init__(self, user_id):
    self.user_id = user_id
  def __repr__(self):
    return 'User({})'.format(self.user_id)

users = [User(23), User(3), User(99)]

from operator import attrgetter
print(sorted(users, key=attrgetter('user_id')))
# [User(3), User(23), User(99)]
```

## Grouping Records Together Based on a Field

```py
rows = [
  {'address': '5412 N CLARK', 'date': '07/01/2012'},
  {'address': '5148 N CLARK', 'date': '07/04/2012'},
  {'address': '5800 E 58TH', 'date': '07/02/2012'},
  {'address': '2122 N CLARK', 'date': '07/03/2012'},
  {'address': '5645 N RAVENSWOOD', 'date': '07/02/2012'},
  {'address': '1060 W ADDISON', 'date': '07/02/2012'},
  {'address': '4801 N BROADWAY', 'date': '07/01/2012'},
  {'address': '1039 W GRANVILLE', 'date': '07/04/2012'},
]

from operator import itemgetter
from itertools import groupby
# Sort by the desired field first
rows.sort(key=itemgetter('date'))
# Iterate in groups
for date, items in groupby(rows, key=itemgetter('date')):
  print(date)
  for i in items:
    print(' ', i)

'''
07/01/2012
  {'date': '07/01/2012', 'address': '5412 N CLARK'}
  {'date': '07/01/2012', 'address': '4801 N BROADWAY'}
07/02/2012
  {'date': '07/02/2012', 'address': '5800 E 58TH'}
  {'date': '07/02/2012', 'address': '5645 N RAVENSWOOD'}
  {'date': '07/02/2012', 'address': '1060 W ADDISON'}
07/03/2012
  {'date': '07/03/2012', 'address': '2122 N CLARK'}
07/04/2012
  {'date': '07/04/2012', 'address': '5148 N CLARK'}
  {'date': '07/04/2012', 'address': '1039 W GRANVILLE'}
'''
```

## Filtering Sequence Elements

```py
mylist = [1, 4, -5, 10, -7, 2, 3, -1]
print([n for n in mylist if n > 0])
```

One potential downside of using a list comprehension is that it might produce a large result if the original input is large. If this is a concern, you can use generator expressions to produce the filtered values iteratively.

```py
pos = (n for n in mylist if n > 0)
print(pos) # <generator object <genexpr> at 0x1006a0eb0>
for x in pos:
  print(x)
```

Suppose that the filtering process involves exception handling or some other complicated detail.

```py
values = ['1', '2', '-3', '-', '4', 'N/A', '5']
def is_int(val):
  try:
    x = int(val)
    return True
  except ValueError:
    return False

ivals = list(filter(is_int, values))
print(ivals)
# Outputs ['1', '2', '-3', '4', '5']
# filter() creates an iterator, so if you want to create a list of results, make sure you also use list() as shown.
```

One variation on filtering involves replacing the values that don’t meet the criteria with a new value instead of discarding them.

```py
clip_neg = [n if n > 0 else 0 for n in mylist]
```

## Extracting a Subset of a Dictionary

```py
prices = {
  'ACME': 45.23,
  'AAPL': 612.78,
  'IBM': 205.55,
  'HPQ': 37.20,
  'FB': 10.75
}
# Make a dictionary of all prices over 200
p1 = { key:value for key, value in prices.items() if value > 200 }
# Make a dictionary of tech stocks
tech_names = { 'AAPL', 'IBM', 'HPQ', 'MSFT' }
p2 = { key:value for key,value in prices.items() if key in tech_names }
```

## Mapping Names to Sequence Elements

You have code that accesses list or tuple elements by position, but this makes the code somewhat difficult to read at times.

```py
from collections import namedtuple
Subscriber = namedtuple('Subscriber', ['addr', 'joined'])
sub = Subscriber('jonesy@example.com', '2012-10-19')
print(sub)
# Subscriber(addr='jonesy@example.com', joined='2012-10-19')
print(sub.addr)
# 'jonesy@example.com'
addr, joined = sub
print(addr)
# 'jonesy@example.com'
```

A major use case for named tuples is decoupling your code from the position of the elements it manipulates. So, if you get back a large list of tuples from a database call, then manipulate them by accessing the positional elements, your code could break if, say, you added a new column to your table. Not so if you first cast the returned tuples to namedtuples.

**Be aware that unlike a dictionary, a namedtuple is immutable.**

```py
s = Stock('ACME', 100, 123.45)
# s.shares = 75 # AttributeError: can't set attribute
s = s._replace(shares=75) # OK but makes new nametuple instance
```

A subtle use of the `_replace()` method is that it can be a convenient way to populate named tuples that have optional or missing fields.

```py
from collections import namedtuple
Stock = namedtuple('Stock', ['name', 'shares', 'price', 'date', 'time'])
# Create a prototype instance
stock_prototype = Stock('', 0, 0.0, None, None)
# Function to convert a dictionary to a Stock
def dict_to_stock(s):
  return stock_prototype._replace(**s)

a = {'name': 'ACME', 'shares': 100, 'price': 123.45}
print(dict_to_stock(a))
# Stock(name='ACME', shares=100, price=123.45, date=None, time=None)
```

## Transforming and Reducing Data at the Same Time

You need to execute a reduction function (e.g., sum(), min(), max()), but first need to transform or filter the data.

```py
# A very elegant way to combine a data reduction and a transformation is to use a generator-expression argument.

nums = [1, 2, 3, 4, 5]
s = sum(x * x for x in nums)

# Data reduction across fields of a data structure
portfolio = [
  {'name':'GOOG', 'shares': 50},
  {'name':'YHOO', 'shares': 75},
  {'name':'AOL', 'shares': 20},
  {'name':'SCOX', 'shares': 65}
]
min_shares = min(s['shares'] for s in portfolio)
```

## Combining Multiple Mappings into a Single Mapping

You have multiple dictionaries or mappings that you want to logically combine into a single mapping to perform certain operations, such as looking up values or checking for the existence of keys.

```py
a = {'x': 1, 'z': 3 }
b = {'y': 2, 'z': 4 }
from collections import ChainMap
c = ChainMap(a,b)
print(c['x']) # Outputs 1 (from a)
print(c['y']) # Outputs 2 (from b)
```

A ChainMap takes multiple mappings and makes them logically appear as one. If there are duplicate keys, the values from the first mapping get used.
Operations that mutate the mapping always affect the first mapping listed. E.g. `c['z'] = 10`

As an alternative to `ChainMap`, you might consider merging dictionaries together using the `update()` method.

```py
a = {'x': 1, 'z': 3 }
b = {'y': 2, 'z': 4 }
merged = dict(b)
merged.update(a)
# This works, but it requires you to make a completely separate dictionary object
# Also, if any of the original dictionaries mutate, the changes don’t get reflected in the merged dictionary.
```

## Strings and Text

### Splitting Strings on Any of Multiple Delimiters

You need to split a string into fields, but the delimiters (and spacing around them) aren’t consistent throughout the string.

```py
line = 'asdf fjdk; afed, fjek,asdf, foo'
import re
re.split(r'[;,\s]\s*', line)
# ['asdf', 'fjdk', 'afed', 'fjek', 'asdf', 'foo']
```

### Matching Text at the Start or End of a String

A simple way to check the beginning or end of a string is to use the `str.startswith()` or `str.endswith()` methods.

If you need to check against multiple choices, simply provide a tuple of possibilities to `startswith()` or `endswith()`:

```py
import os
filenames = os.listdir('.')
print(filenames) # [ 'Makefile', 'foo.c', 'bar.py', 'spam.c', 'spam.h' ]

[name for name in filenames if name.endswith(('.c', '.h'))]
# ['foo.c', 'spam.c', 'spam.h']
```

Last, but not least, the `startswith()` and `endswith()` methods look nice when combined with other operations, such as common data reductions. For example, this statement that checks a directory for the presence of certain kinds of files:

```py
if any(name.endswith(('.c', '.h')) for name in listdir(dirname)):
  # ...
```

### Matching Strings Using Shell Wildcard Patterns

You want to match text using the same wildcard patterns as are commonly used when working in Unix shells (e.g., \*.py, Dat[0-9]\*.csv, etc.).

The `fnmatch` module provides two functions—`fnmatch()` and `fnmatchcase()`—that can be used to perform such matching.

```py
from fnmatch import fnmatch, fnmatchcase
fnmatch('foo.txt', '*.txt') # True
```

Normally, `fnmatch()` matches patterns using the same case-sensitivity rules as the system’s underlying filesystem. If this distinction matters, use `fnmatchcase()` instead. E.g. `fnmatchcase('foo.txt', '*.TXT') # False`

_Note: If you’re actually trying to write code that matches filenames, use the `glob` module instead_

### Matching and Searching for Text Patterns

```py
text = 'yeah, but no, but yeah, but no, but yeah'
# Search for the location of the first occurrence
text.find('no') # 10
```

For more complicated matching, use regular expressions and the `re` module.

```py
text1 = '11/27/2012'
import re
if re.match(r'\d+/\d+/\d+', text1):
  print('yes')
# yes
```

`match()` always tries to find the match at the start of a string. If you want to search text for all occurrences of a pattern, use the `findall()` method instead.

```py
datepat = re.compile(r'\d+/\d+/\d+')
text = 'Today is 11/27/2012. PyCon starts 3/13/2013.'
datepat.findall(text) # ['11/27/2012', '3/13/2013']
```

When defining regular expressions, it is common to introduce capture groups by enclosing parts of the pattern in parentheses. Capture groups often simplify subsequent processing of the matched text because the contents of each group can be extracted individually.

```py
datepat = re.compile(r'(\d+)/(\d+)/(\d+)')
m = datepat.match('11/27/2012')
m.group(0) # '11/27/2012'
m.groups() # ('11', '27', '2012')
month, day, year = m.groups()
```

### Searching and Replacing Text

For simple literal patterns, use the `str.replace()` method.

For more complicated patterns, use the `sub()` functions/methods in the `re` module.

Suppose you want to rewrite dates of the form “11/27/2012” as “2012-11-27.”

```py
text = 'Today is 11/27/2012. PyCon starts 3/13/2013.'
import re
re.sub(r'(\d+)/(\d+)/(\d+)', r'\3-\1-\2', text)
# 'Today is 2012-11-27. PyCon starts 2013-3-13.'
```

The first argument to `sub()` is the pattern to match and the second argument is the replacement pattern. Backslashed digits such as `\3` refer to capture group numbers in the pattern.

If you want to know how many substitutions were made in addition to getting the replacement text, use `re.subn()` instead.

```py
newtext, n = datepat.subn(r'\3-\1-\2', text)
n # 2
```

### Searching and Replacing Case-Insensitive Text

To perform case-insensitive text operations, you need to use the re module and supply the `re.IGNORECASE` flag to various operations.

```py
import re
text = 'UPPER PYTHON, lower python, Mixed Python'
re.findall('python', text, flags=re.IGNORECASE)
# ['PYTHON', 'python', 'Python']
re.sub('python', 'snake', text, flags=re.IGNORECASE)
# 'UPPER snake, lower snake, Mixed snake'
```

The last example reveals a limitation that replacing text won’t match the case of the matched text. If you need to fix this, you might have to use a support function, as in the following:

```py
def matchcase(word):
  def replace(m):
    text = m.group()
    if text.isupper():
      return word.upper()
    elif text.islower():
      return word.lower()
    elif text[0].isupper():
      return word.capitalize()
    else:
      return word
  return replace

re.sub('python', matchcase('snake'), text, flags=re.IGNORECASE)
# 'UPPER SNAKE, lower snake, Mixed Snake'
```

### Specifying a Regular Expression for the Shortest Match

The \* operator in a regular expression is greedy, so matching is based on finding the longest possible match.

```py
text2 = 'Computer says "no." Phone says "yes."'
str_pat = re.compile(r'\"(.*?)\"')
str_pat.findall(text2)
# ['no.', 'yes.']
```
