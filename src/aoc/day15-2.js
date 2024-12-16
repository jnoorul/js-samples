// Parses the input grid into a widened 2D array.
function parseGrid(input) {
  return input.split("\n").map((line) =>
    line
      .split("")
      .map((char) => {
        if (char === "#") return "##";
        if (char === ".") return "..";
        if (char === "O") return "[]";
        if (char === "@") return "@.";
        return char;
      })
      .join("")
  );
}

// Finds the position of the robot (@) and all boxes ([]) in the grid.
function findPositions(grid) {
  let robot = null;
  let boxes = [];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x += 2) {
      const cell = grid[y].slice(x, x + 2);
      if (cell === "@.") robot = { x, y };
      if (cell === "[]") boxes.push({ x, y });
    }
  }

  return { robot, boxes };
}

// Updates the grid and returns the new state after attempting a move.
function attemptMove(grid, robot, direction) {
  const directions = {
    "^": { dx: 0, dy: -1 },
    v: { dx: 0, dy: 1 },
    "<": { dx: -2, dy: 0 },
    ">": { dx: 2, dy: 0 },
  };

  const { dx, dy } = directions[direction];
  const nextX = robot.x + dx;
  const nextY = robot.y + dy;

  // If the next position is a wall (##), the robot can't move.
  if (grid[nextY]?.slice(nextX, nextX + 2) === "##") return robot;

  // If the next position is a box ([]), check if the box can be pushed.
  if (grid[nextY]?.slice(nextX, nextX + 2) === "[]") {
    let boxNextX = nextX + dx;
    let boxNextY = nextY + dy;

    // Traverse through consecutive boxes to find the last box in the row/column.
    while (grid[boxNextY]?.slice(boxNextX, boxNextX + 2) === "[]") {
      boxNextX += dx;
      boxNextY += dy;
    }

    // If the last position is a wall, obstacle, or out of bounds, nothing moves.
    if (
      grid[boxNextY]?.slice(boxNextX, boxNextX + 2) === "##" ||
      grid[boxNextY]?.slice(boxNextX, boxNextX + 2) === "[]" ||
      grid[boxNextY] === undefined
    ) {
      return robot;
    }

    // Move all the boxes sequentially.
    let currentBoxX = boxNextX - dx;
    let currentBoxY = boxNextY - dy;
    while (grid[currentBoxY]?.slice(currentBoxX, currentBoxX + 2) === "[]") {
      grid[currentBoxY] =
        grid[currentBoxY].slice(0, currentBoxX) +
        ".." +
        grid[currentBoxY].slice(currentBoxX + 2);
      grid[currentBoxY + dy] =
        grid[currentBoxY + dy].slice(0, currentBoxX + dx) +
        "[]" +
        grid[currentBoxY + dy].slice(currentBoxX + dx + 2);
      currentBoxX -= dx;
      currentBoxY -= dy;
    }
  }

  // Move the robot.
  grid[robot.y] =
    grid[robot.y].slice(0, robot.x) + ".." + grid[robot.y].slice(robot.x + 2);
  grid[nextY] =
    grid[nextY].slice(0, nextX) + "@." + grid[nextY].slice(nextX + 2);

  return { x: nextX, y: nextY };
}

// Calculates the total score for the final positions of the boxes.
function calculateScore(grid) {
  let score = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x += 2) {
      if (grid[y].slice(x, x + 2) === "[]") {
        score += 100 * y + x / 2;
      }
    }
  }

  return score;
}

// Main function to process the grid and moves.
function processMoves(gridInput, movesInput) {
  const grid = parseGrid(gridInput);
  let { robot } = findPositions(grid);

  // Remove newlines from moves and process each move sequentially.
  const moves = movesInput.replace(/\n/g, "").split("");

  for (const move of moves) {
    robot = attemptMove(grid, robot, move);
  }

  return calculateScore(grid);
}

// Example usage:
const gridInput = `########
  #..O.O.#
  ##@.O..#
  #...O..#
  #.#.O..#
  #...O..#
  #......#
  ########`;

const movesInput = `<^^>>>vv<v>>v<<`;

const score = processMoves(gridInput, movesInput);
console.log("Final Score:", score);
