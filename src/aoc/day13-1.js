function solveClawMachine(machines) {
  const MAX_PRESSES = 100; // Maximum number of presses for each button

  function calculateTokens(aCount, bCount) {
    return aCount * 3 + bCount; // Tokens for A and B presses
  }

  function canWin(machine) {
    const { ax, ay, bx, by, px, py } = machine;

    for (let aCount = 0; aCount <= MAX_PRESSES; aCount++) {
      for (let bCount = 0; bCount <= MAX_PRESSES; bCount++) {
        const totalX = aCount * ax + bCount * bx;
        const totalY = aCount * ay + bCount * by;

        if (totalX === px && totalY === py) {
          return { aCount, bCount, tokens: calculateTokens(aCount, bCount) };
        }
      }
    }

    return null; // No solution found
  }

  let totalTokens = 0;
  let prizesWon = 0;

  for (const machine of machines) {
    const result = canWin(machine);
    if (result) {
      totalTokens += result.tokens;
      prizesWon++;
    }
  }

  return { prizesWon, totalTokens };
}

// Example data for the claw machines
const machines = [
  { ax: 94, ay: 34, bx: 22, by: 67, px: 8400, py: 5400 },
  { ax: 26, ay: 66, bx: 67, by: 21, px: 12748, py: 12176 },
  { ax: 17, ay: 86, bx: 84, by: 37, px: 7870, py: 6450 },
  { ax: 69, ay: 23, bx: 27, by: 71, px: 18641, py: 10279 },
];

const result = solveClawMachine(machines);
console.log(
  `Prizes won: ${result.prizesWon}, Total tokens spent: ${result.totalTokens}`
);
