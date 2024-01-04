export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines = input.split(/\r?\n/);

let currentCount = 0;
let tempArr = [];
let tempArr2 = [];

for (let number of lines) {
  if (number) {
    currentCount += parseInt(number);
  }
  if (!number || number === lines[lines.length - 1]) {
    tempArr.push(currentCount);
    currentCount = 0;
  }
}
tempArr
  .sort((a, b) => b - a)
  .reduce((a, b) => {
    if (a !== b) {
      tempArr2.push(b);
    }
    return b;
  }, 0);

console.log("result", tempArr2[0] + tempArr2[1] + tempArr2[2]);

// 71506 first
// 69368 second
// 68729 third

// 209216 false
// 202664 false

// 209603 solution
