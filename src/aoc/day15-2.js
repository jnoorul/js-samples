// Function to execute the movement logic
function moveRobot(map, instructions) {
  const directions = {
    "<": [0, -1],
    ">": [0, 1],
    "^": [-1, 0],
    v: [1, 0],
  };

  // Find the robot's initial position
  let robotX, robotY;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "@") {
        robotX = i;
        robotY = j;
        break;
      }
    }
  }

  for (let move of instructions) {
    const [dx, dy] = directions[move];
    const newX = robotX + dx;
    const newY = robotY + dy;
    const nextPos = map[newX]?.[newY];
    const beyondPos1 = map[newX]?.[newY + 2]; // For checking position beyond horizontally aligned box
    const beyondPos2 = map[newX]?.[newY - 2]; // For checking position left of horizontally aligned box
    const beyondPosVert = map[newX + dx]?.[newY]; // For checking position beyond vertically aligned box

    if (nextPos === ".") {
      // Move robot to free space
      map[robotX][robotY] = ".";
      map[newX][newY] = "@";
      robotX = newX;
      robotY = newY;
    } else if (
      nextPos === "[" &&
      map[newX][newY + 1] === "]" &&
      beyondPos1 === "." &&
      move === ">"
    ) {
      // Move box (horizontally aligned) right and then robot
      map[newX][newY] = "@";
      map[newX][newY + 2] = "[";
      map[newX][newY + 3] = "]";
      map[newX][newY + 1] = "."; // Clear old box bracket positions
      map[robotX][robotY] = ".";
      robotX = newX;
      robotY = newY;
    } else if (
      nextPos === "]" &&
      map[newX][newY - 1] === "[" &&
      beyondPos2 === "." &&
      move === "<"
    ) {
      // Move box (horizontally aligned) left and then robot
      map[newX][newY - 2] = "[";
      map[newX][newY - 1] = "]";
      map[newX][newY] = "@";
      map[newX][newY + 1] = "."; // Clear old box bracket positions
      map[robotX][robotY] = ".";
      robotX = newX;
      robotY = newY;
    } else if (
      nextPos === "[" &&
      map[newX][newY + 1] === "]" &&
      beyondPosVert === "." &&
      move === "v"
    ) {
      // Move box (vertically aligned) down and then robot
      map[newX + 1][newY] = "[";
      map[newX + 1][newY + 1] = "]";
      map[newX][newY] = "@";
      map[robotX][robotY] = ".";
      robotX = newX;
      robotY = newY;
    } else if (
      nextPos === "]" &&
      map[newX][newY - 1] === "[" &&
      beyondPosVert === "." &&
      move === "^"
    ) {
      // Move box (vertically aligned) up and then robot
      map[newX - 1][newY] = "]";
      map[newX - 1][newY - 1] = "[";
      map[newX][newY] = "@";
      map[robotX][robotY] = ".";
      robotX = newX;
      robotY = newY;
    }
  }

  return map;
}

// Helper function to pretty print the map
function printMap(map) {
  return map.map((row) => row.join("")).join("\n");
}

// Sample Input
const map = [
  "##############".split(""),
  "##......##..##".split(""),
  "##..........##".split(""),
  "##....[][]@.##".split(""),
  "##....[]....##".split(""),
  "##..........##".split(""),
  "##############".split(""),
];

const instructions = "<vv<<^^<<^^";

// Execute the moves
const result = moveRobot(map, instructions);
console.log(printMap(result));
