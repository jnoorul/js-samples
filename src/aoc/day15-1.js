// Parses the input grid into a 2D array.
function parseGrid(input) {
  return input.split("\n").map((line) => line.split(""));
}

// Finds the position of the robot (@) and all boxes (O) in the grid.
function findPositions(grid) {
  let robot = null;
  let boxes = [];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "@") robot = { x, y };
      if (grid[y][x] === "O") boxes.push({ x, y });
    }
  }

  return { robot, boxes };
}

// Updates the grid and returns the new state after attempting a move.
function attemptMove(grid, robot, direction) {
  const directions = {
    "^": { dx: 0, dy: -1 },
    v: { dx: 0, dy: 1 },
    "<": { dx: -1, dy: 0 },
    ">": { dx: 1, dy: 0 },
  };

  const { dx, dy } = directions[direction];
  const nextX = robot.x + dx;
  const nextY = robot.y + dy;

  // If the next position is a wall (#), the robot can't move.
  if (grid[nextY][nextX] === "#") return robot;

  // If the next position is a box (O), check if the box can be pushed.
  if (grid[nextY][nextX] === "O") {
    let boxNextX = nextX + dx;
    let boxNextY = nextY + dy;

    // Traverse through consecutive boxes to find the last box in the row/column.
    while (grid[boxNextY] && grid[boxNextY][boxNextX] === "O") {
      boxNextX += dx;
      boxNextY += dy;
    }

    // If the last position is a wall or another obstacle, nothing moves.
    if (
      grid[boxNextY] === undefined ||
      grid[boxNextY][boxNextX] === "#" ||
      grid[boxNextY][boxNextX] === "O"
    ) {
      return robot;
    }

    // Move all the boxes sequentially.
    let currentBoxX = boxNextX - dx;
    let currentBoxY = boxNextY - dy;
    while (grid[currentBoxY] && grid[currentBoxY][currentBoxX] === "O") {
      grid[currentBoxY][currentBoxX] = ".";
      grid[currentBoxY + dy][currentBoxX + dx] = "O";
      currentBoxX -= dx;
      currentBoxY -= dy;
    }

    // Move the box directly in front of the robot.
    grid[nextY][nextX] = ".";
    grid[nextY + dy][nextX + dx] = "O";
  }

  // Move the robot.
  grid[robot.y][robot.x] = ".";
  grid[nextY][nextX] = "@";

  return { x: nextX, y: nextY };
}

// Calculates the total score for the final positions of the boxes.
function calculateScore(grid) {
  let score = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "O") {
        score += 100 * y + x;
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
