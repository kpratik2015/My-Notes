/**
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 * Input: s = "applepenapple", wordDict = ["apple","pen"]
 * Output: true
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  if (wordDict == null || wordDict.length === 0) return false;
  const set = new Set(wordDict);

  const visited = new Set(); // for memoization
  const q = [0];

  while (q.length) {
    // console.log('q ', q, visited);
    const start = q.shift();

    if (!visited.has(start)) {
      for (let end = start + 1; end <= s.length; end++) {
        let substr = s.slice(start, end);
        // console.log('substr ', substr, q);
        if (set.has(substr)) {
          // console.log('found ', substr, end);
          if (end === s.length) return true; // Reached end of s and we've found a match for remaining substring
          q.push(end); // next we search from here
        }
      }
      visited.add(start);
    }
  }
  return false;
};