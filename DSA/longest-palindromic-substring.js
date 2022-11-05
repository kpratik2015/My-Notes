var longestPalindrome = function (s) {
  let pal = s[0];
  const isPali = (substr) => {
    if (substr.length === 1) return true;
    let l = substr.length;
    for (let i = 0; i < l / 2; i++) {
      if (substr[i] !== substr[l - 1 - i]) {
        return false;
      }
    }
    return true;
  };
  if (s.length === 1 || isPali(s)) return s;
  const seen = {};
  for (let i = 0; i < s.length; i++) {
    const lastIndicesOfChar = seen[s[i]];
    if (!lastIndicesOfChar) {
      seen[s[i]] = [i];
      continue;
    }
    lastIndicesOfChar.forEach((idx) => {
      let testStr = s.slice(Math.max(0, idx), i + 1);
      if (isPali(testStr) && testStr.length > pal.length) {
        pal = testStr;
      }
    });
    seen[s[i]] = [...seen[s[i]], i];
  }
  return pal;
};
