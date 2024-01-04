const input = await Deno.readTextFile("./input.txt");

const input2 = `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`;

const cycles = input.split("\n");

class Cycle {
  constructor() {
    this.cycle = 0;
    this.x = 1;
    this.sum = 0;
  }
  spin() {
    this.cycle++;
  }
  addToX(value) {
    this.x += value;
  }
}

const circuit = new Cycle();
let CYCLE = 20;

for (const cycle of cycles) {
  const spin = cycle.split(" ")[0];
  if (spin === "noop") {
    circuit.spin();
    if (circuit.cycle === CYCLE && CYCLE <= 220) {
      const strength = circuit.cycle * circuit.x;
      circuit.sum += strength;
      CYCLE += 40;
    }
  } else {
    const value = parseInt(cycle.split(" ")[1]);
    for (let i = 0; i < 2; i++) {
      circuit.spin();
      if (circuit.cycle === CYCLE && CYCLE <= 220) {
        const strength = circuit.cycle * circuit.x;
        circuit.sum += strength;
        CYCLE += 40;
      }
    }
    circuit.addToX(value);
  }
}

console.log(circuit);
