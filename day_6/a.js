export const x = "";

const input = await Deno.readTextFile("./input.txt");

const strArr = input.split("");
let arrOfLetters = [];
let count = 0;

for (const letter of strArr) {
  if (arrOfLetters.length === 4) break;
  if (!arrOfLetters.includes(letter)) {
    arrOfLetters.push(letter);
  } else {
    const index = arrOfLetters.indexOf(letter);
    arrOfLetters = arrOfLetters.splice(index + 1);
    arrOfLetters.push(letter);
  }
  count++;
}

console.log(arrOfLetters, count);

// 1794 true
