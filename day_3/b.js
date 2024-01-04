export const x = "";

const input = await Deno.readTextFile("./input.txt");

const sackArr = input.split("\n");
const priority = "abcdefghijklmnopqrstuvwxyz";
let count = 0;

const devidedGroups = [];
let threeSacks = [];

for (let i = 0; i < sackArr.length; i++) {
  threeSacks.push(sackArr[i]);
  if (i % 3 === 2) {
    devidedGroups.push(threeSacks);
    threeSacks = [];
  }
}

for (const group of devidedGroups) {
  for (const item of group[0]) {
    if (group[1].includes(item) && group[2].includes(item)) {
      if (item == item.toUpperCase()) {
        count += priority.toUpperCase().split("").indexOf(item) + 27;
        break;
      } else {
        count += priority.split("").indexOf(item) + 1;
        break;
      }
    }
  }
}

console.log("count", count);

// 2620 true
