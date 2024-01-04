export const x = "";

const input = await Deno.readTextFile("./input.txt");

const input2 = `
            [B]
    [D]     [M]
[N] [C]     [S]
[Z] [M] [P] [A]
 1   2   3   4

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
move 2 from 4 to 2
move 2 from 2 to 3
move 5 from 3 to 4`;

const arr = input.split("\n");
const crates = [];
const movements = [];
let cratesNumber = "";
const stacks = [];

arr.map((value, index) => {
  if (value === "" && index > 0) {
    for (let i = 0; i < index - 1; i++) {
      arr[i] && crates.push(arr[i]);
    }
    cratesNumber = arr[index - 1];
    for (let i = index + 1; i < arr.length; i++) {
      movements.push(arr[i]);
    }
  }
});
const rowOne = [];
const rowTow = [];
const rowThree = [];
const rowFour = [];
const rowFive = [];
const rowSix = [];
const rowSeven = [];
const rowEight = [];
const rowNine = [];
for (const crate of crates) {
  if (crate.slice(0, 3) !== "   ") rowOne.push(crate.slice(0, 3));
  if (crate.slice(4, 7) !== "   ") rowTow.push(crate.slice(4, 7));
  if (crate.slice(8, 11) !== "   ") rowThree.push(crate.slice(8, 11));
  if (crate.slice(12, 15) !== "   ") rowFour.push(crate.slice(12, 15));
  if (crate.slice(16, 19) !== "   ") rowFive.push(crate.slice(16, 19));
  if (crate.slice(20, 23) !== "   ") rowSix.push(crate.slice(20, 23));
  if (crate.slice(24, 27) !== "   ") rowSeven.push(crate.slice(24, 27));
  if (crate.slice(28, 31) !== "   ") rowEight.push(crate.slice(28, 31));
  if (crate.slice(32, 35) !== "   ") rowNine.push(crate.slice(32, 35));
}

stacks.push(
  rowOne,
  rowTow,
  rowThree,
  rowFour,
  rowFive,
  rowSix,
  rowSeven,
  rowEight,
  rowNine
);

for (const movement of movements) {
  const boxs = parseInt(movement.split(" ")[1]);
  const from = parseInt(movement.split(" ")[3]) - 1;
  const to = parseInt(movement.split(" ")[5]) - 1;
  if (boxs === 1) {
    const shiftedBox = stacks[from].shift();
    stacks[to].unshift(shiftedBox);
  } else {
    for (let i = 1; i <= boxs; i++) {
      stacks[to].unshift(stacks[from][boxs - i]);
      stacks[from].splice(boxs - i, 1);
    }
  }
}

let topOfStack = "";

for (const stack of stacks) {
  topOfStack += stack.shift().slice(1, 2);
}

console.log(topOfStack);

// ZPRBQQQHW false
// QNJWQCBNC false
// BPCZJLFJW true
