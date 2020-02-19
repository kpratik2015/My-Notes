# Dynamic Programming

Inception: Those who cannot remember the past are condemned to repeat it.

DP is essentially just an optimization technique.
Memoization is a technique that is closely associated with DP. It is used for storing the results of expensive function calls and returning the cached result when the same inputs occur again.

_Two Categories of DP:_

- Optimization problems: expect you to select a feasible solution, so that the value of the required function is minimized or maximized
- Combinatorial problems: expect you to figure out the number of ways to do something, or the probability of some event happening

_Two Approaches:_

- Bottom Up
- Top Down

One can think of dynamic programming as a table-filling algorithm: you know the calculations you have to do, so you pick the best order to do them in and ignore the ones you don't have to fill in.

_Problem mathematical representation and bases cases:_

- Fibonacci:

Fn = Fn-1 + Fn-2
Base: F0 = F1 = 1

- Problem - Given a number N, you've to find the number of different ways to write it as the sum of 1, 3 and 4

Fn = Fn-1 + Fn-3 + Fn-4
Base: (less than last of sample set)
F0 = F1 = F2 = 1 and F3 = 2

_e.g. F3 = F2 + F0 + F-1 = F2 + F0 = 1 + 1 = 2_

```
F[0] = F[1] = F[2] = 1; F[3] = 2;
for (i = 4; i <= n; i++) {
  F[i] = F[i-1] + F[i-3] + F[i-4];
}
```

# 3 Sum Problem

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

**Example:**

```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

**Approach**

The main idea is to iterate every number in nums.
We use the number as a target to find two other numbers which make total zero.
For those two other numbers, we move pointers, l and r, to try them.

l start from left to right.
r start from right to left.

First, we sort the array, so we can easily move i around and know how to adjust l and r.

**sum of 3 positive will be always greater than zero**

**Solution**

```python
class Solution(object):
	def threeSum(self, nums):
		res = []
		nums.sort()
		length = len(nums)
		for i in xrange(length-2): #[8]
			if nums[i]>0: break #[7]
			if i>0 and nums[i]==nums[i-1]: continue #[1]

			l, r = i+1, length-1 #[2]
			while l<r:
				total = nums[i]+nums[l]+nums[r]

				if total<0: #[3]
					l+=1
				elif total>0: #[4]
					r-=1
				else: #[5]
					res.append([nums[i], nums[l], nums[r]])
					while l<r and nums[l]==nums[l+1]: #[6]
						l+=1
					while l<r and nums[r]==nums[r-1]: #[6]
						r-=1
					l+=1
					r-=1
		return res
```

**Pointers**

If the number is the same as the number before, we have used it as target already, continue. [1]
We always start the left pointer from i+1 because the combination of 0~i has already been tried. [2]

Now we calculate the total:
If the total is less than zero, we need it to be larger, so we move the left pointer. [3]
If the total is greater than zero, we need it to be smaller, so we move the right pointer. [4]
If the total is zero, bingo! [5]
We need to move the left and right pointers to the next different numbers, so we do not get repeating result. [6]

We do not need to consider i after nums[i]>0, since sum of 3 positive will be always greater than zero. [7]
We do not need to try the last two, since there are no rooms for l and r pointers.
You can think of it as The last two have been tried by all others. [8]

# Pointer Method to solve problem

Sort array if index doesn't matter

```
[0, 1, 2, 3, 4]
pointer i = 0
pointer j = i + 1
pointer k = arrayLength - 1

loop from 0 to arrayLength - 3 inclusive i.e. 0, 1, 2

Inside for loop, a while loop with condition while j < k
```

# Backtracking

Backtracking is an algorithm for finding all solutions by exploring all potential candidates. If the solution candidate turns to be not a solution (or at least not the last one), backtracking algorithm discards it by making some changes on the previous step, i.e. backtracks and then try again.

**Example (Combination problem)**

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

```
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

**Solution**

```python
class Solution:
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        phone = {'2': ['a', 'b', 'c'],
                 '3': ['d', 'e', 'f'],
                 '4': ['g', 'h', 'i'],
                 '5': ['j', 'k', 'l'],
                 '6': ['m', 'n', 'o'],
                 '7': ['p', 'q', 'r', 's'],
                 '8': ['t', 'u', 'v'],
                 '9': ['w', 'x', 'y', 'z']}

        def backtrack(combination, next_digits):
            # if there is no more digits to check
            if len(next_digits) == 0:
                # the combination is done
                output.append(combination)
            # if there are still digits to check
            else:
                # iterate over all letters which map
                # the next available digit
                for letter in phone[next_digits[0]]:
                    # append the current letter to the combination
                    # and proceed to the next digits
                    backtrack(combination + letter, next_digits[1:])

        output = []
        if digits:
            backtrack("", digits)
        return output
```

**Stack Trace**

I/P: "23"

```
backtrack("", "23")
-> for 'a':
    -> backtrack("a", "3")
      -> for 'd':
        -> backtrack("ad", "")
          -> len(next_digits) == 0 => output.append("ad")
      -> for 'e':
        -> backtrack("ae", "")
          -> len(next_digits) == 0 => output.append("ae")
.
.
.
.
-> for 'b':
    -> backtrack("b", "3")
      -> for 'd':
        -> backtrack("bd", "")
          -> len(next_digits) == 0 => output.append("bd")
.
.
.
```

# Python N-Sum one code

The core is to implement a fast 2-pointer to solve 2-sum, and recursion to reduce the N-sum to 2-sum. Some optimization was be made knowing the list is sorted.

```python
def fourSum(self, nums, target):
    def findNsum(nums, target, N, result, results):
        if len(nums) < N or N < 2 or target < nums[0]*N or target > nums[-1]*N:  # early termination
            return
        if N == 2: # two pointers solve sorted 2-sum problem
            l,r = 0,len(nums)-1
            while l < r:
                s = nums[l] + nums[r]
                if s == target:
                    results.append(result + [nums[l], nums[r]])
                    l += 1
                    while l < r and nums[l] == nums[l-1]:
                        l += 1
                elif s < target:
                    l += 1
                else:
                    r -= 1
        else: # recursively reduce N
            for i in range(len(nums)-N+1):
                if i == 0 or (i > 0 and nums[i-1] != nums[i]):
                    findNsum(nums[i+1:], target-nums[i], N-1, result+[nums[i]], results)

    results = []
    findNsum(sorted(nums), target, 4, [], results)
    return results
```
