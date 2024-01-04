export const x = "";

const input = await Deno.readTextFile("./input.txt");

// X = 1, Y = 2, Z = 3
// X beats C, Y beats A, Z beats B

// lost = 0, draw = 3, won = 6

const arr = input.split("\n");
const rounds = [];
let outCome = 0;
let selectedShape = 0;

for (const line of arr) {
  const round = line.split(" ");
  rounds.push(round);
}

for (const round of rounds) {
  if (round[1] === "X" && round[0] === "C") {
    outCome += 6;
    selectedShape += 1;
  }
  if (round[1] === "X" && round[0] === "A") {
    outCome += 3;
    selectedShape += 1;
  }
  if (round[1] === "X" && round[0] === "B") {
    outCome += 0;
    selectedShape += 1;
  }
  if (round[1] === "Y" && round[0] === "C") {
    outCome += 0;
    selectedShape += 2;
  }
  if (round[1] === "Y" && round[0] === "A") {
    outCome += 6;
    selectedShape += 2;
  }
  if (round[1] === "Y" && round[0] === "B") {
    outCome += 3;
    selectedShape += 2;
  }
  if (round[1] === "Z" && round[0] === "C") {
    outCome += 3;
    selectedShape += 3;
  }
  if (round[1] === "Z" && round[0] === "A") {
    outCome += 0;
    selectedShape += 3;
  }
  if (round[1] === "Z" && round[0] === "B") {
    outCome += 6;
    selectedShape += 3;
  }
}

console.log("total score", outCome + selectedShape);
console.log(rounds);

// 15233 false
// 13484 true
