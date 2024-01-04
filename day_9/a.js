// const input = await Deno.readTextFile("./input.txt");

const input2 = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;

const moves = input2.split("\n");

const visited = new Set();

class Point {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  step(dir, steps) {
    let stepping = 0;
    while (stepping < steps) {
      switch (dir) {
        case "R":
          this.x++;
          break;
        case "L":
          this.x--;
          break;
        case "U":
          this.y++;
          break;
        case "D":
          this.y--;
          break;
      }
      stepping++;
    }
  }
  follow(point) {
    let dist = Math.max(Math.abs(this.x - point.x), Math.abs(this.y - point.y));
    while (dist !== 1 && dist > 1) {
      if (point.x - this.x > 0) {
        this.x++;
      } else if (point.x - this.x < 0) {
        this.x--;
      }
      if (point.y - this.y > 0) {
        this.y++;
      } else if (point.y - this.y < 0) {
        this.y--;
      }
      visited.add(`${this.x}, ${this.y}`);
      dist--;
    }
  }
}

class Rope {
  constructor(n) {
    this.head = new Point();
    this.tail = new Point();
  }
  move(dir, steps) {
    this.head.step(dir, steps);
    this.tail.follow(this.head);
  }
}

const rope = new Rope();

for (const move of moves) {
  const [dir, steps] = move.split(" ");

  rope.move(dir, steps);
}

console.log(visited.size + 1);

// Guessed

// 5641 Too low.
// 5643 Too low.
// 9170 Wrong.
// 9177 Wrong.
// 6314 Right.
