function findObstructionPositions(mapInput) {
  const map = mapInput.split("\n").map((row) => row.split(""));
  const rows = map.length;
  const cols = map[0].length;

  const directions = ["^", ">", "v", "<"];
  const deltas = {
    "^": [-1, 0],
    ">": [0, 1],
    v: [1, 0],
    "<": [0, -1],
  };

  function isPointOutside(r, c) {
    return r < 0 || r >= rows || c < 0 || c >= cols;
  }

  let guardStart = null;
  let guardDir = null;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (directions.includes(map[r][c])) {
        guardStart = [r, c];
        guardDir = map[r][c];
        map[r][c] = ".";
        break;
      }
    }
    if (guardStart) break;
  }

  function simulatePatrolWithObstruction(obstruction) {
    const visited = new Set();
    let [row, col] = guardStart;
    let dir = guardDir;

    while (true) {
      const state = `${row},${col},${dir}`;
      if (visited.has(state)) return true; // Loop detected
      visited.add(state);

      const [dr, dc] = deltas[dir];
      const [nextRow, nextCol] = [row + dr, col + dc];

      // End condition: if it leaves the map
      if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols)
        return false;

      // Check for walls or obstruction
      if (
        map[nextRow][nextCol] === "#" ||
        (obstruction &&
          nextRow === obstruction[0] &&
          nextCol === obstruction[1])
      ) {
        // Turn right
        const dirIndex = directions.indexOf(dir);
        dir = directions[(dirIndex + 1) % 4];
      } else {
        // Move forward
        row = nextRow;
        col = nextCol;
      }
    }
  }

  const obstructionPositions = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (
        map[r][c] !== "." || // Not an empty space
        (r === guardStart[0] && c === guardStart[1]) // Starting position
      ) {
        continue;
      }

      if (simulatePatrolWithObstruction([r, c])) {
        obstructionPositions.push([r, c]);
      }
    }
  }

  return obstructionPositions;
}

const mapInput = `
............#.............#......................#....#....................................................#..............#.......
..................................#...#......#.......#........#..................#....#...........................##....#.........
...........#...........#...........#...#...#...............................#.......................##....................#........
..................#.............#........#.....................#...........................................................#......
....#............................................................#..#...#......#.#......#...#..........#..#.....#....#...#........
.................................#......##.............................#..........................#...#.........#.................
.#.............#.........#..#..............................................................................##...........#..#......
....#..............#..........................##......#........#...#........#..........#........#.............#...................
.....#.......#..#......#..#..................................................................#.........................#..........
......................#...............................#......#................................#......#.....#......................
.......#.........#.....................................................................#....#.#.....................#.........#...
........................#......##..........#....#..........................#....................#...................#.........#...
................#..#............#...#.................................................................#...........#...............
.#.....#.....................#..........................................#................................#........................
.............#.##........#......#......#......................#..................................................#...#..........#.
.......#.........#.#..........#.............#.......#............#.....................#..........................................
.............................#.........................................................#.........#.........#.............#........
....#..#.#..................................................#...........#..................#....#.................................
...............#..........#.....#..............................................................#..................................
.......##.............................................................................#...............#.........#.................
....#.....#..........................#..........#................................#....................#...#.......................
.#.................................................#..#.....#.....................................................................
...........................#..............#.#...#..........................................#......#..........................#....
.#....#........#....................................................#...........................................#.................
...#..................#................##...#.............#..#....................#...............#...............................
..................................................#......#..........................................................#...#.........
#.#....................................#........#.............................................................#...................
...............................................#.......##...............................................#.........................
...#.............#................................................................................................................
.......................................#....#..#........#............#..........#.........#...#..................#................
........#.................................................#.........................................#...........#.................
...................#...........#...............................#..........................#................#..#..........#.....#..
...............#......#...............................................................#............................##..#.....##...
.........................................##.#..#..................#.......#.....................#.................................
...........#...................................................................#...#..................................#.....#.....
......#...............................#.......###..........................#....#.....................................#...........
.....##...............................#...................................................#................................#...#..
..................#....#.......#.......................................................................##.........................
.....#..#.................................................................................................#.......................
.#.................................#......................##....................................#..........................##.....
#.#................#......................................#...........................#.......#...................................
.................................#.......#.....#..............................................##..#....................#..........
............#...............................................................................#....#...........#..........#.........
................................................##...............................................#..#..........................#..
.................#.......#........................................................................#...............................
..#.........................#......#.............#.......................................#........................................
...............#.............#...........................................................#.....#..................................
.........#...............................................................................#...............................#........
.........................................#...................#.................#.........##........#.........#....................
............#..........#.....#................................................................#...##............................#.
........#...#....#..............................................#..............#........................#.........................
..#.....................................................................................................................#.........
.#....#.............................^................#..#...................#.........................#...........................
..........................................................................#.........#....#......#.................................
.........#................................#.#........................#.................#...................................#......
.............................................#.##............................................................#......#..#.........#
..........#............#...........#..#......#..........#.........................................................................
......................#....................................#....#.............##....#.............................................
......................#...#............#.......................................................................................#..
.##.................#.......................#...............#.............#......#..................................#.....#.#.....
....................#........#.......................#....................................#.......#...#.......#.......#......#....
.............................................................#.......................#..........................#.....#...........
...#.................#.......................................................#.......##...........#.......#.......................
...............##.........................#.........................................................#.....#.......#...............
.......................#.......................#.........#..............#....................#..........#........................#
...................................##..........#..........................................................#.........#.............
..................#...............................#...................................#.......#.......................#...........
.......................#..#...................................#........................#........#............#....................
...................................#....#............#..................#........................................#..........#.....
.............#...#...#......#.............##...............................................#..........................#....#......
....................#..........................................#....#......................................................#......
............#.........#...............#..#.....................................................................#.#................
.......................#..#..............................................................#.....#........#..#..................#...
.............#..#..............................#.....#.................#.............#.......................#................#...
...............#......#...........#............#.........#......................................#.................................
............................#.....#.........#.....#..#...........#................................................................
....#.......#.................#..............................................#.......#.#.............................#...#..#.....
..................................................#.#......#............................................................#.........
..................................#............#........................#.......#.........#...#...............#...................
............##....#.#......#..............................................................................#..............#........
.....#..........................................#.........................................................#........##.............
............#.....................#..#.#..............#........#......#.............................#....#...#....................
.......................#...........................................................................#..............................
......#.........................................#........#............#..#..............................#.#.......................
#.#......#..#...............#...........#....#.................................................#..................................
.........#...........#............................#..............#......................#.......................................#.
...#............#..................................#..............#............................#.........................#........
...##..#.....................................................................................#...........................#........
...............#......#.........#................................#...#............#....................#..........................
..........................#...........................#..............................................#................#....#......
.........#........#.#...........................................................................#..#..............................
.................#..............#........................................................................#.................#......
...#.........#.#.........#.#...........................................#........#........#.........#..............................
..........#............................................................#..........#.....#.........................................
..................................#.....#...........##........#......#..........#..........................#......................
...........................#....#.............#............................................................#......................
.............#.......#...................................#.....#............................................................##....
............#..............##.............#.....#...............#..........#........................#.........................#...
..##.....................................................................................................#........................
.............#.#...........#...................#....#...#......#................##................................................
.................#.#............#........................#.......##..#.........##.................................................
......................#.#...#................................................................#...............#.....#...........#..
#.................#..........................#.............................##.....#...........................................#...
..............#.........#.................#................................................................................#......
....#.#............#.......#.......................#.....#.......................#....................#.....#.............#.......
......................#..#....#.........................................#.#............##............#............................
.........#.#...#...#........................................#...............................................#....................#
.......................#...................#.............................................................#.......................#
................#............................#........#..........#.......................##....#..................................
.#...................#......................#.......................................#............................#................
..#..##.......#......#..........#..#..................................................#...........................................
..............#..........#...........................................#.........##.................................................
....#..............................#.........#...#.................#......#.#.......#.............................................
#.................................#........#.....................................#...##...................#..#...........#........
.......#.....#.............................................#..................#...................#...........#..#........#.......
.......................#................#.............#.#.........#..............................................................#
......................................................#....................#..........#................................#..........
#...............#...#.............#.................#.................................................#...........................
..................................................................#.........................#......#.........#............##......
#.................#........#.......#...#....................................#.#...................................................
.....................................#...#....#.........#................#.........................................#...#..........
............#............................#.............#.#........................................................................
......................................#.................................................#...............#.......#.................
.#.#..........#........#.......................#..................................................#....................#..........
....#...............................................................#...........#............#.......................#............
....#.......#.#..#...................#.........#..................................#....................................#..........
..............................................#...................................##.......#......................................
#...#.#............#...............................#.........#...........#..........#............................................#
..#...........#..#..........#.......................#..........##.................................................................
...#.....#..................................#................................................#....................................
`.trim();

const obstructionPositions = findObstructionPositions(mapInput);

console.log("Number of obstruction positions:", obstructionPositions.length);
