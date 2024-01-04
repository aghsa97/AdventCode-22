export const x = "";

const input = await Deno.readTextFile("./input.txt");

const overLapped = [];
const arrOfSections = input
  .split("\n")
  .map((section) => section.split(","))
  .map((section) => section.map((sectionId) => sectionId.split("-")));

for (const section of arrOfSections) {
  if (
    (parseInt(section[0][0]) <= parseInt(section[1][0]) &&
      parseInt(section[0][1]) >= parseInt(section[1][1])) ||
    (parseInt(section[0][0]) >= parseInt(section[1][0]) &&
      parseInt(section[0][1]) <= parseInt(section[1][1])) ||
    (parseInt(section[0][0]) <= parseInt(section[1][0]) &&
      parseInt(section[1][0]) <= parseInt(section[0][1])) ||
    (parseInt(section[0][0]) <= parseInt(section[1][1]) &&
      parseInt(section[1][1]) <= parseInt(section[0][1]))
  ) {
    console.log(section);
    overLapped.push(section);
  }
}

console.log(overLapped.length);

// guessed 883 true
