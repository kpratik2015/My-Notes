var wordBreak = function (s, wordDict) {
  let memo = {};
  let wordSet = new Set(wordDict);
  return dfs(s, wordSet, memo);
};

function dfs(s, wordSet, memo) {
  if (s in memo) return memo[s];
  if (wordSet.has(s)) return true;
  for (let i = 1; i < s.length; i++) {
    let prefix = s.substring(0, i);
    if (wordSet.has(prefix) && dfs(s.substring(i), wordSet, memo)) {
      memo[s] = true;
      return true;
    }
  }
  memo[s] = false;
  return false;
}

// Check BFS -> word-break.js for detail