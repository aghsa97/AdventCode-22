export const x = "";

const input = await Deno.readTextFile("./input.txt");

const input2 = `30373
25512
65332
33549
35390`;

const rows = input.split("\n");
const rowsInArr = rows.map((row) => row.split(""));
const visible = [];

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

      for (let y = 0; y < row.length; y++) {
        while (y < j && isLeftVisible) {
          if (row[y] < number) {
            y++;
          } else {
            isLeftVisible = false;
            break;
          }
        }
        while (y > j && y < row.length && isRightVisible) {
          if (row[y] < number) {
            y++;
          } else {
            isRightVisible = false;
            break;
          }
        }
      }

      for (let y = 0; y < column.length; y++) {
        while (y < i && isTopVisible) {
          if (column[y] < number) {
            y++;
          } else {
            isTopVisible = false;
            break;
          }
        }
        while (y > i && y < column.length && isBottomtVisible) {
          if (column[y] < number) {
            y++;
          } else {
            isBottomtVisible = false;
            break;
          }
        }
      }

      if (isLeftVisible || isRightVisible || isBottomtVisible || isTopVisible) {
        visible.push(number);
      }
    }
  }
}

console.log(visible.length);

// Guess

// 1840 Right guess
