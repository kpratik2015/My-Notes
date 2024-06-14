/**
 * 
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
 * 
 * Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
 */


var Trie = function () {
  this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let root = this.trie;
  for (let i = 0; i < word.length; i++) {
    let w = word[i];
    let isEnd = i === word.length - 1;
    if (w in root) {
      root[w].end = root[w].end || isEnd;
    } else {
      root[w] = { end: isEnd, children: {} }
    }
    root = root[w].children;
  }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  if (Object.keys(this.trie).length === 0) {
    return false;
  }
  let root = this.trie;
  for (let i = 0; i < word.length; i++) {
    let w = word[i];
    if (!(w in root)) {
      return false;
    }
    if (i === word.length - 1) {
      return root[w].end;
    }
    root = root[w].children;
  }
  return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  if (Object.keys(this.trie).length === 0) {
    return false;
  }
  let root = this.trie;
  for (const w of prefix) {
    if (!(w in root)) {
      return false;
    }
    root = root[w].children;
  }
  return true;
};

/** 
 * Example trie for rex
 * 
const trie = {
  end: false,
  children: {
    r: {
      end: false,
      children: {
        e: {
          end: false,
          children: {
            x: {
              end: true,
              children: {},
            },
          },
        },
      },
    },
  },
};

 * 
 */