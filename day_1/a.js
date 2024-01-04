export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines = input.split(/\r?\n/);

let currentCount = 0;
let mostCounted = 0;

for (let number of lines) {
  if (number) {
    currentCount += parseInt(number);
  }
  if (!number || number === lines[lines.length - 1]) {
    mostCounted = Math.max(mostCounted, currentCount);
    currentCount = 0;
  }
}
console.log("most counted", mostCounted);

// 71506 true
