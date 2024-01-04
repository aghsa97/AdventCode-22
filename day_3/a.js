export const x = "";

const input = await Deno.readTextFile("./input.txt");

const sackArr = input.split("\n");
const priority = "abcdefghijklmnopqrstuvwxyz";
let count = 0;

for (const sack of sackArr) {
  const firstComp = [];
  const secondComp = [];

  for (let i = 0; i < sack.length / 2; i++) {
    firstComp.push(sack[i]);
  }
  for (let i = sack.length / 2; i < sack.length; i++) {
    secondComp.push(sack[i]);
  }

  for (const item of firstComp) {
    if (secondComp.includes(item)) {
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

console.log("Count: ", count);

// 8123 true
