# CC

- [CC](#cc)
  - [Common Algos](#common-algos)
    - [Optimum palindrome check](#optimum-palindrome-check)
    - [GCD LCM](#gcd-lcm)
    - [Sort](#sort)
    - [Speed = Distance / Time](#speed--distance--time)
    - [Trie aka prefix/digital tree](#trie-aka-prefixdigital-tree)
  - [Snippets](#snippets)
    - [Graph](#graph)
    - [XOR](#xor)
    - [Character to ASCII / vice-versa](#character-to-ascii--vice-versa)
    - [String reversal](#string-reversal)
    - [Even length string to odd length](#even-length-string-to-odd-length)
    - [Simple reverse](#simple-reverse)
    - [Key, value interation](#key-value-interation)
    - [List of string numbers to Number](#list-of-string-numbers-to-number)
    - [XOR](#xor-1)
    - [Alphabet char code map](#alphabet-char-code-map)
    - [Looping](#looping)
  - [Problems](#problems)
    - [Permutation of string](#permutation-of-string)
    - [Sliding Window - Max Sub array sum](#sliding-window---max-sub-array-sum)
    - [Length of longest sub string with no repeat chars / Map & 1 pointer](#length-of-longest-sub-string-with-no-repeat-chars--map--1-pointer)
    - [Median of 2 sorted num arrays / 2 pointer](#median-of-2-sorted-num-arrays--2-pointer)
    - [kth Factor of n](#kth-factor-of-n)
    - [Remove overlap](#remove-overlap)

## Common Algos

### Optimum palindrome check

Check if each letter is the same as its mirror equivalent — or, a character on the other side (measured with index — 1)

```js
function checkPalindrome(substr) {
  let l = substr.length;
  for (let i = 0; i < l / 2; i++) {
    if (substr[i] !== substr[l - 1 - i]) {
      return false;
    }
  }
  return true;
}
```

```js
// short version
function isPalin(word, i, j) {
  while (i < j) if (word[i++] !== word[j--]) return false;
  return true;
}
```

### GCD LCM

```js
// greatest common divisor (GCD) of two integers is the largest positive integer dividing both.
const gcd = (a, b) => (a ? gcd(b % a, a) : b);

// least common multiple (LCM) of two integers is the smallest positive integer that is a multiple of both
const lcm = (a, b) => (a * b) / gcd(a, b);
```

### Sort

```js
const arr = [1, 2];
// ASC
arr.sort((a, b) => a - b);
// DESC
arr.sort((a, b) => b - a);
```

### Speed = Distance / Time

```js
// Example
let time = (target - currentDistance) / speedOfCar;
```

### Trie aka prefix/digital tree

It's an ordered tree where nodes of tree store the entire alphabet and words can be re`trie`ved by traversing down a branch.

Operations: word - insert, remove and contains. Prefix - `find(prefix)`

Root node is empty

```js
// Properties
const TrieNode = function (char: characterInSequence) {
  this.char = characterInSequence;
  this.parent = null;
  this.children = {};
  this.isEndOfWord = false;
  // ...methods
};

const Trie = function () {
  this.root = new TrieNode(null);
  // ...methods
};
```

Trie’s retrieval/insertion time in the worst case is better than hashTable and binary search trees. Requires a lot of memory storage for strings. Easy to print all words in alphabetical order

## Snippets

### Graph

```js
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(source, destination) {
    if (!this.adjacencyList[source]) {
      this.addVertex(source);
    }
    if (!this.adjacencyList[destination]) {
      this.addVertex(destination);
    }
    this.adjacencyList[source].push(destination);
    this.adjacencyList[destination].push(source);
  }
  removeEdge(source, destination) {
    this.adjacencyList[source] = this.adjacencyList[source].filter(
      (vertex) => vertex !== destination
    );
    this.adjacencyList[destination] = this.adjacencyList[destination].filter(
      (vertex) => vertex !== source
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex]) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  dfsIterative(start) {
    const result = [];
    const stack = [start];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}
```

### XOR

Maximum from XOR of 2 numbers is found by flipping bits of one number.

```
Let maximumBit = 3

XOR = 1 (001) :  we can choose to xor it with 6 so that maximum xor for query will become '2^maximumBit - 1 = 7'
    ^ 6 (110)
    ----------
      111
```

### Character to ASCII / vice-versa

```js
"a".charCodeAt(0); // 97
```

```js
String.fromCharCode(97); // a
```

### String reversal

```js
Array.from("abc").reverse().join(""); // cba
```

```js
function reverse(string, i, j) {
  let arr = string.split("");
  while (i < j) {
    let temp = arr[i];
    arr[i++] = arr[j];
    arr[j--] = temp;
  }
  return arr.join("");
}
```

### Even length string to odd length

```js
// fill with filler
Array.from("ab").join("#"); // a#b
```

### Simple reverse

```js
n = 654321;
rev = 0;
while (n > 0) {
  a = n % 10;
  rev = rev * 10 + a;
  n = Math.floor(n / 10);
}
console.log("reversed n ", rev); // 123456
```

### Key, value interation

```js
for (const [k, v] of Object.entries({ a: 1, b: 2 })) {
  console.log("k ", k, " v ", v);
}
```

### List of string numbers to Number

```js
["2", "3"].map((x) => +x);
```

### XOR

```js
true ^ false; // 1
true ^ true; // 0
```

### Alphabet char code map

```js
var createMap = (str) => {
  let res = new Array(26).fill(0);

  for (let char of str) {
    res[char.charCodeAt() - 97]++;
  }
  return res;
};
```

### Looping

```js
for (let i = 1; i <= m; i += 1) {
  // row
  for (let j = 1; j <= m - i; j += 1) {} // column with j decreasing everytime by i traversals
}
```

## Problems

### Permutation of string

```js
// Backtrack

function permute(data, i, length) {
  if (i === length) {
    console.log(data.join(""));
  } else {
    for (let k = i; k < length; k++) {
      [data[i], data[k]] = [data[k], data[i]];
      permute(data, i + 1, length);
      [data[i], data[k]] = [data[k], data[i]]; // backtrack
    }
  }
}
permute(Array.from("abc"), 0, 3);
```

```js
// Divide and Conquer

const findPermutations = (string) => {
  const isJustOneCharacterLong = string.length === 1;
  const noWayToPermute = isJustOneCharacterLong;
  if (noWayToPermute) return string;
  const permuteArr = [];
  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    const firstIdxOccurence = string.indexOf(currentChar);
    const isCharARepeat = firstIdxOccurence != i;
    if (isCharARepeat) continue; // skip

    const remainingCharactersThatCanBePermutated =
      string.slice(0, i) + string.slice(i + 1, string.length);
    for (let permutation of findPermutations(
      remainingCharactersThatCanBePermutated
    )) {
      permuteArr.push(currentChar + permutation);
    }
  }
  return permuteArr;
};
console.log(findPermutations("aabc"));
```

```js
const permutator = (inputArr) => {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = [...arr];
        let next = curr.splice(i, 1);
        // console.log("next ", next, " curr ", curr, " m ", [...m, ...next]);
        permute([...curr], [...m, ...next]);
      }
    }
  };
  permute(inputArr);
  return result;
};
permutator([..."cat"]);
```

### Sliding Window - Max Sub array sum

```js
const maxSubArraySum = (arr, n) => {
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let i = n; i < arr.length; i++) {
    let increasingPart = i;
    let nextIdxNumForWindow = arr[increasingPart - n];
    tempSum = tempSum - nextIdxNumForWindow + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
```

### Length of longest sub string with no repeat chars / Map & 1 pointer

e.g. "aa" => 1, "dvdf" -> 3

```js
function longestSubstringLength(s) {
  const seen = new Map();
  let start = 0; // start index of current substring which has non-repeating chars
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    // if char previously seen then start moves ahead of last seen char pos
    // max helps to keep start moving forward and never back
    if (seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start);
    seen.set(s[i], i);
    const currentSubstringLength = i - start + 1;
    maxLen = Math.max(currentSubstringLength, maxLen);
  }
  return maxLen;
}
```

### Median of 2 sorted num arrays / 2 pointer

```
nums1 = [1,3], nums2 = [2] => 2.0
Exp: merged array = [1,2,3] and median is 2.

nums1 = [1,2], nums2 = [3,4] => 2.5
Exp: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let finalLength = nums1.length + nums2.length;
  const isEven = finalLength % 2 === 0;
  let midIdx = isEven
    ? Math.ceil(finalLength / 2)
    : Math.floor(finalLength / 2);
  if (!nums1.length) {
    // [] and [1]
    nums1[0] = Infinity;
  }
  if (!nums2.length) {
    // [1] and []
    nums2[0] = Infinity;
  }
  let leftPtr = 0;
  let rightPtr = 0;
  let smallerStartArr = nums1[0] >= nums2[0] ? nums2 : nums1;
  let otherArr = smallerStartArr === nums1 ? nums2 : nums1;
  let combinedArr = [];
  while (leftPtr < smallerStartArr.length) {
    if (rightPtr >= otherArr.length) {
      combinedArr.push(smallerStartArr[leftPtr]);
      leftPtr++;
    } else if (smallerStartArr[leftPtr] <= otherArr[rightPtr]) {
      combinedArr.push(smallerStartArr[leftPtr]);
      leftPtr++;
    } else {
      combinedArr.push(otherArr[rightPtr]);
      rightPtr++;
    }
    if (combinedArr.length > midIdx) break;
  }
  const maxIdxInCombined = combinedArr.length - 1;
  if (!isEven)
    return maxIdxInCombined >= midIdx
      ? combinedArr[midIdx]
      : otherArr[Math.abs(combinedArr.length - midIdx) + rightPtr];
  const idx1 = midIdx - 1;
  const idx2 = midIdx;
  const num1 =
    maxIdxInCombined >= idx1
      ? combinedArr[idx1]
      : otherArr[Math.abs(combinedArr.length - idx1) + rightPtr];
  const num2 =
    maxIdxInCombined >= idx2
      ? combinedArr[idx2]
      : otherArr[Math.abs(combinedArr.length - idx2) + rightPtr];
  return (num1 + num2) / 2;
};
```

### kth Factor of n

```
n = 12, k = 3 => 3
Factors: [1,2,3,4,6,12] then 3rd factor is 3.
```

```
n = 4, k = 4 => -1
```

```js
var kthFactor = function (n, k) {
  const factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors.push(i);
  }
  return factors?.[k - 1] || -1;
};
```

### Remove overlap

return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping

```
[[1,2],[2,3],[3,4],[1,3]] => 1
i.e. [1,3] can be removed and rest are non-overlapping

[[1,2],[1,2],[1,2]] => 2

[[1,2],[2,3],[3,4],[-100,-2],[5,7]] => 0
```

```js
const eraseOverlapIntervals = (intervals) => {
	intervals.sort((a,b) => a[1] - b[1]); // ascending order wrt the end
	let pre = null;
	let counter = 0;
	intervals.forEach((item) => {
		if (!pre) pre = item;
		else {
			if (pre[1] > item[0]) counter++;
			else pre = item;
		}
	}
	return counter;
}
```
