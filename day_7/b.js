export const x = "";

const input = await Deno.readTextFile("./input.txt");

const input2 = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

const rows = input.split("\n");
const dir_30_000_000 = [];
let mainDirSize = 0;

for (let i = 0; i < rows.length; i++) {
  let inCounter = 0;
  let outCounter = 0;
  if (rows[i] === "$ ls") {
    console.log("===========START=========");
    console.log("dir", rows[i - 1].split(" ")[2].toUpperCase());
    console.log("========================");
    const files = [];
    let sizeOfDir = 0;
    for (let j = i + 1; j < rows.length; j++) {
      if (rows[j].startsWith("$ cd") && rows[j] !== "$ cd ..") {
        inCounter++;
      } else if (rows[j] === "$ cd ..") {
        outCounter++;
      } else if (!rows[j].startsWith("dir") && !rows[j].startsWith("$ ")) {
        files.push(rows[j]);
      }
      if (
        (outCounter === inCounter + 1 &&
          (outCounter !== 0 || inCounter !== 0)) ||
        outCounter > inCounter
      ) {
        break;
      }
    }
    for (const file of files) {
      const number = Number(file.split(" ")[0]);
      sizeOfDir += number;
    }
    if (i < 2) {
      mainDirSize = sizeOfDir;
    } else if (mainDirSize - sizeOfDir < 40000000) {
      dir_30_000_000.push({
        dir: rows[i - 1].split(" ")[2],
        size: sizeOfDir,
        USED_SPACE: mainDirSize - sizeOfDir,
      });
    }
    console.log("==========END===========");
  }
}
const min = dir_30_000_000.reduce(
  (a, b) => (a.USED_SPACE > b.USED_SPACE ? a : b),
  dir_30_000_000[0]
);

console.log(min);

//  Guessed

// 28957005 Too high
// 19733115 Too high

// 12785886 Right answer
