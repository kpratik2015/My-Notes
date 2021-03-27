# DS and Algo Basic Pointers

## Random Points to Remember

- StringBuilder simply creates a resizable array of all the strings, copying them back to a string only when necessary.
- Unlike an array, a linked list does not provide constant time access to a particular "index" within the list.
- A stack can also be used to implement a recursive algorithm iteratively.
- A queue can also be implemented with a linked list. In fact, they are essentially the same thing, as long as items are added and removed from opposite sides.
- One place where queues are often used is in breadth-first search or in implementing a cache.

### Time Complexity

```java
// Consider:
void printUnorderedPairs(int[] arrayA, int[] arrayB) {
  for (int i= 0; i < arrayA.length; i++) {
    for (int j = 0; j < arrayB.length; j++) {
      /* 0(1) work*/
    }
  }
}
```

For each element of array A, the inner for loop goes through b iterations, where `b = arrayB`. length.lf `a = arrayA.length`,then the runtime is `O(ab)`. It's not O(N<sup>2</sup>) because there are two different inputs. Both matter. This is an extremely common mistake.

For balanced binary search tree, if there are N total nodes, then depth is roughly log N. And 2<sup>log N</sup> = N. So runtime complexity will be O(N).

Generally speaking, when you see an algorithm with multiple recursive calls, you're looking at exponential runtime.

Memoization, is a very common one to optimize exponential time recursive algorithms.

### Space Complexity

Just because you have `n` calls total doesn't mean it takes `O(n)` space.

```java
// Consider the below function, which adds adjacent elements between O and n:
int pairSumSequence(int n) {/* Ex 2.*/
  int sum = 0;
  for (inti= 0; i < n; i++) {
    sum+= pairSum(i, i + 1);
  }
  return sum;
}
int pairSum(int a, int b) {
  return a + b;
}
```

There will be roughly `O(n)` calls to pairSum. However, those calls do not exist simultaneously on the call stack, so you only need `O(1)` space.

### Amortized Time

An `Arraylist` is implemented with an array. When the array hits capacity, the `Arraylist` class will create a new array with double the capacity and copy all the elements over to the new array.

Amortized Time - It allows us to describe that, yes, this worst case happens every once in a while. But once it happens, it won't happen again for so long that the cost is "amortized"

### Recursive Runtimes

When you have a recursive function that makes multiple calls, the runtime will often (but not always) look like O(branches<sup>depth</sup>), where branches is the number of times each recursive call branches.

Although we have O(2<sup>N</sup>) nodes in the tree total, only O(N) exist at any given time. Therefore, we would only need to have O(N) memory available.

### Hashtable

1. First, compute the key's hash code, which will usually be an int or long. Note that two different keys could have the same hash code, as there may be an infinite number of keys and a finite number of ints.

2. Then, map the hash code to an index in the array. This could be done with something like `hash (key) % array_length`. Two different hash codes could, of course, map to the same index.

3. At this index, there is a linked list of keys and values. Store the key and value in this index. We must use a linked list because of collisions: you could have two different keys with the same hash code, or two different hash codes that map to the same index.

Alternatively, we can implement the hash table with a balanced binary search tree. This gives us an `O(log N)` lookup time. The advantage of this is potentially using less space, since we no longer allocate a large array

**Note**: An Arraylist is an array that resizes itself as needed while still providing O(1) access. A typical implementation is that when the array is full, the array doubles in size. Each doubling takes O(n) time, but happens so rarely that its amortized insertion time is still O(1).

### Trees and Graphs

The tree cannot contain cycles. The nodes may or may not be in a particular order, they could have any data type as values, and they may or may not have links back to their parent nodes.

```java
// A very simple class definition for Node is:
class Node {
  public String name;
  public Node[] children;
}
```

#### Types of Trees

**Trees vs. Binary Trees**

A binary tree is a tree in which each node has _up to two children_. Suppose you were using a tree to represent a bunch of phone numbers. In this case, you might use a 10-ary tree, with each node having up to 10 children (one for each digit).

**Binary Tree vs. Binary Search Tree**

A binary search tree is a binary tree in which every node fits a specific ordering property: all left descendents <= n < all right descendents. This must be true for each node n. _Note: Under some definitions, the tree cannot have duplicate values._

A binary search tree imposes the condition that, for each node, its left descendents are less than or equal to the current node, which is less than the right descendents.

**Balanced vs. Unbalanced**

It's balanced enough to ensure O(log n) times for insert and find, but it's not necessarily as balanced as it could be
Two common types of balanced trees are red-black trees and AVL trees.

<b id="complete-binary-tree">Complete Binary Trees</b>

A complete binary tree is a binary tree in which every level of the tree is fully filled, except for perhaps the last level. To the extent that the last level is filled, it is filled left to right.

**Full Binary Trees**

A full binary tree is a binary tree in which every node has either zero or two children. That is, no nodes have only one child.

**Perfect Binary Trees (Full + Complete)**

A perfect binary tree is one that is both full and complete. All leaf nodes will be at the same level, and this level has the maximum number of nodes.

Note that perfect trees are rare in interviews and in real life, as a perfect tree must have exactly 2<sup>k</sup>-1 nodes.

#### Binary Tree Traversal

**In-Order (LCR/Ascending Order)**

```java
void inOrderTraversal(TreeNode node) {
  if (node!= null) {
    inOrderTraversal(node.left);
    visit(node);
    inOrderTraversal(node.right);
  }
}
```

**Pre-Order Traversal (CLR/Root first visited)**

```java
void preOrderTraversal(TreeNode node) {
  if (node!= null) {
    visit(node);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}
```

**Post-Order Traversal (LRC/Root last visited)**

```java
void postOrderTraversal(TreeNode node) {
  if (node!= null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    visit(node);
  }
}
```

#### Binary Heaps (Min-Heaps and Max-Heaps)

A min-heap is a [complete binary tree](#complete-binary-tree) (that is, totally filled other than the rightmost elements on the last level) where each node is smaller than its children. The root, therefore, is the minimum element in the tree.

Two key operations:

- insert: start by inserting at the bottom and at the rightmost spot. Then we fix the free by swapping new element with its parent until right spot. (aka bubbling up minimum element) `O(log n) time`
- extract_min: remove root and swap it with last element in heap (bottommost and rightmost). Then bubble down this element, swapping it with one of its children until right spot. `O(log n) time`

A max-heap is essentially equivalent but elements are in descending order.

#### Tries (Prefix Trees)

A trie is a variant of an n-ary tree in which characters are stored at each node. Each path down the tree may represent a word.
The `*` nodes (sometimes called "null nodes") are often used to indicate complete words.

A node in a trie could have anywhere from 1 through ALPHABET SIZE + 1 children (or, 0 through ALPHABET SIZE if a boolean flag is used instead of a\* node).

_Use Case: a trie is used to store the entire (English) language for quick prefix lookups_

A trie can check if a string is a valid prefix in `O(K)` time, where K is the length of the string.

#### Graphs

A tree is a connected graph without cycles.

- Graphs can either be undirected (two-way street) or directed (one-way street).
- Graph may consist of multiple isolated subgraphs. **Connected Graph** implies there is a path between every pair of vertices.
- **Acyclic** graph is one without cycles.

In programming two ways to represent a graph: Adjacency List and Adjacency Matrices

**Adjacency List**

Every vertex (or node) stores a list of adjacent vertices. In an undirected graph, an edge like (a, b) would be stored twice: once in a's adjacent vertices and once in b's adjacent vertices.

```java
class Graph {
  public Node[] nodes;
}
class Node {
  public String name;
  public Node[] children;
}
```

An array (or a hash table) of lists (arrays, arraylists, linked lists, etc.) can store the adjacency list.

**Adjacency Matrices**

An adjacency matrix is an `NxN` boolean matrix (where N is the number of nodes), where a true value at `matrix[i][j]` indicates an edge from node i to node j. You can also use an integer matrix with Os and 1s.

_In an undirected graph, an adjacency matrix will be symmetric. In a directed graph, it will not (necessarily) be._

In the adjacency matrix representation, you will need to iterate through all the nodes to identify a node's neighbors.

#### Graph Search

1. Depth-First Search (DFS): start at root and explore each branch completely before moving on next branch. Deep first before we go wide.
2. Breath-First Search (BFS): start at root or any node and explore each neighbor before going on to any of their children. We go wide before we go deep.

_DFS is often preferred if we want to visit every node in the graph. BFS is better when we want to find the shortest (or any) path like in world graph finding a path of friendships between A and B_

```java
// DFS Pseudocode
void search(Node root) {
  if (root== null) return;
    visit(root);
    root.visited= true;
    for each (Node n in root.adjacent) {
      if (n.visited == false) {
        search(n);
    }
  }
}
```

_BFS is not recursive as it uses a queue._

```java
// BFS Pseudocode
void search(Node root) {
  Queue queue = new Queue();
  root.marked= true;
  queue.enqueue(root); // Add to the end of queue
  while (!queue.isEmpty()) {
    Node r = queue.dequeue(); // Remove from the front of the queue
    visit(r);
    foreach (Node n in r.adjacent) {
      if (n.marked == false) {
        n. marked = true;
        queue.enqueue(n);
      }
    }
  }
}
```

Advance: Bidirectional search is used to find the shortest path between a source and destination node. It operates by essentially running two simultaneous breadth-first searches, one from each node. When their searches collide, we have found a path. _One BFS would traverse O(k<sup>d</sup>) nodes. This will traverse O(k<sup>d/2</sup>) nodes_

### Bit Manipulation

`^` indicates an XOR, and `~` is a NOT (negation).

Multiplying by 4 is just left shifting by 2.

`a^(~a)` will be a sequence of 1s.

`~0` is a sequence of 1s, so `~0 << 2` is 1s followed by two 0s. ANDing that with another value will clear the last two bits of the valuee.g. 1011 => 1000

Reference:

- x ^ 0s = x
- x & 0s = 0
- x | 0s = x
- x ^ 1s = ~x
- x & 1s = x
- x | 1s = 1s
- x ^ x = 0
- x & x = x
- x | x = x

A negative number is represented as the two's complement of its absolute value (with a 1 in its sign bit to indicate that a negative value).
In other words, the binary representation of -K (negative K) as a N-bit number is concat(1, 2<sup>N-1</sup> - K)

E.g. 3 (011) => flip bits (100) => add 1 (101) => prepend the sign bit (1) to get 1101 (-3)

In a logical right shift, we shift the bits and put a 0 in the most significant bit. It is indicated with a `>>>` operator.

`>>` inidicates dividing by two.

### Logical/Math

Every positive integer can be decomposed into a product of primes.
84 = 2<span>2</span> \* 3<span>1</span> \* 5° \* 7<sup>1</sup> \* 11° \* 13° \* 17° \* . . .

```java
boolean primeSlightlyBetter(int n) {
  if (n < 2) {
    return false;
  }
  int sqrt = (int) Math.sqrt(n);
  for (int i=2 ; i <= sqrt; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
```

Explaination for looping till sqrt(n):
The square root of 100 is 10. Let's say a x b = 100, for various pairs of a and b.
If a == b, then they are equal, and are the square root of 100, exactly. Which is 10.
If one of them is less than 10, the other has to be greater. For example, 5 x 20 == 100. One is greater than 10, the other is less than 10.

Advance: The Sieve of Eratosthenes algo for primes
