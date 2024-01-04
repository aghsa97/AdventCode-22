const input = await Deno.readTextFile("./input.txt");

const input2 = `R 5
U 8
L 8`;

const moves = input.split("\n");

const visited = new Set();
visited.add("0, 0");

class Point {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  step(dir) {
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
  }
  follow(point) {
    let dist = Math.max(Math.abs(this.x - point.x), Math.abs(this.y - point.y));
    if (dist > 1) {
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
    }
  }
}

const rope_10 = new Map();

for (let i = 0; i < 10; i++) {
  const key = i;
  const value = new Point();

  rope_10.set(key, value);
}

for (const move of moves) {
  const [dir, steps] = move.split(" ");
  const head = rope_10.get(0);
  const tail = rope_10.get(9);
  for (let i = 0; i < steps; i++) {
    head.step(dir);
    rope_10.forEach(
      (node, key) => key > 0 && node.follow(rope_10.get(key - 1))
    );
    visited.add(`${tail.x}, ${tail.y}`);
  }
}

console.log(rope_10, visited.size);

// Answer

// 2457 Too low.
// 2504 Right.
