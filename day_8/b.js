export const x = "";

// const input = await Deno.readTextFile("./input.txt");

const input2 = `30373
25512
65332
33549
35390`;

const rows = input2.split("\n");
const rowsInArr = rows.map((row) => row.split(""));
const visible = [];

// Part2
let highestScenic = 0;

for (let i = 0; i < rowsInArr.length; i++) {
  for (let j = 0; j < rowsInArr[i].length; j++) {
    if (
      i === 0 ||
      j === 0 ||
      i === rowsInArr.length - 1 ||
      j === rowsInArr.length - 1
    ) {
      visible.push(rowsInArr[i][j]);
    } else {
      const number = rowsInArr[i][j];

      const row = rowsInArr[i];
      const column = [];

      for (let z = 0; z < rowsInArr.length; z++) {
        column.push(rowsInArr[z][j]);
      }

      let isLeftVisible = true;
      let isRightVisible = true;
      let isTopVisible = true;
      let isBottomtVisible = true;

      // Part2
      const numberScenicArr = [];

      let leftScenic = 0;
      let rightScenic = 0;
      let topScenic = 0;
      let bottomScenic = 0;

      for (let y = j - 1; y >= 0; y--) {
        while (y >= 0 && isLeftVisible) {
          leftScenic = j - y;
          if (row[y] < number) {
            y--;
          } else {
            isLeftVisible = false;
            break;
          }
        }
      }
      numberScenicArr.push(leftScenic);

      for (let y = j + 1; y < row.length; y++) {
        while (y < row.length && isRightVisible) {
          rightScenic = y - j;
          if (row[y] < number) {
            y++;
          } else {
            isRightVisible = false;
            break;
          }
        }
      }
      numberScenicArr.push(rightScenic);

      for (let y = i - 1; y >= 0; y--) {
        while (y >= 0 && isTopVisible) {
          topScenic = i - y;
          if (column[y] < number) {
            y--;
          } else {
            isTopVisible = false;
            break;
          }
        }
      }
      numberScenicArr.push(topScenic);

      for (let y = i + 1; y < column.length; y++) {
        while (y < column.length && isBottomtVisible) {
          bottomScenic = y - i;
          if (column[y] < number) {
            y++;
          } else {
            isBottomtVisible = false;
            break;
          }
        }
      }
      numberScenicArr.push(bottomScenic);

      if (isLeftVisible || isRightVisible || isBottomtVisible || isTopVisible) {
        visible.push(number);
      }

      // Part 2
      const sum = numberScenicArr.reduce((a, b) => a * b, 1);
      if (sum > highestScenic) {
        highestScenic = sum;
      }
    }
  }
}

console.log(highestScenic);
