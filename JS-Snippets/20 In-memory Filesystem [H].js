class File {
  constructor() {
    this.isFile = false;
    this.content = "";
    this.files = {};
  }
}

class FileSystem {
  constructor() {
    this.root = new File();
  }

  /**
   * Return files if it's a directory or return the filename
   */
  ls(path) {
    if (path === "/") {
      return (
        Object.keys(this.root.files)
          // for lexicographical order
          .sort()
      );
    }
    const paths = path.split("/");
    let temp = this.root;
    for (let i = 1; i < paths.length; i++) {
      temp = temp.files(paths[i]);
    }
    if (temp.isFile) {
      return [paths.at(-1)];
    }
    return (
      Object.keys(temp.files)
        // for lexicographical order
        .sort()
    );
  }

  mkdir(path) {
    const paths = path.split("/");
    let temp = this.root;
    for (let i = 1; i < paths.length; i++) {
      if (!(paths[i] in temp.files)) {
        temp.files[paths[i]] = new File();
      }
      temp = temp.files[paths[i]];
    }
  }

  addContentToFile(path, content) {
    const paths = path.split("/");
    let temp = this.root;
    /** Traverse only till directory of file */
    for (let i = 1; i < paths.length - 1; i++) {
      temp = temp.files[paths[i]];
    }
    const fileName = paths[paths.length - 1];
    if (!(fileName in temp.files)) temp.files[fileName] = new File();
    temp = temp.files[fileName];
    temp.isFile = true;
    temp.content = temp.content + content;
  }

  readContentFromFile(path) {
    let temp = this.root;
    const paths = path.split("/");
    for (let i = 1; i < paths.length - 1; i++) {
      temp = temp.files[paths[i]];
    }
    return temp.files[paths[paths.length - 1]].content;
  }
}

// Driver Code
const fs = new FileSystem();

console.log(fs.ls("/")); // []

fs.mkdir("/dir1/dir2/dir3");
fs.mkdir("/dir4/dir2/dir3");

console.log(fs.ls("/")); // ['dir1', 'dir4']

fs.addContentToFile("/dir1/dir2/dir3/file1", "File");

console.log(fs.readContentFromFile("/dir1/dir2/dir3/file1")); // File

fs.addContentToFile("/dir1/dir2/dir3/file1", " System");

console.log(fs.readContentFromFile("/dir1/dir2/dir3/file1")); // File System
