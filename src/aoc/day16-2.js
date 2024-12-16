function findBestPathsAndUniqueTiles(map) {
  const directions = [
    { dx: 1, dy: 0 }, // East
    { dx: 0, dy: 1 }, // South
    { dx: -1, dy: 0 }, // West
    { dx: 0, dy: -1 }, // North
  ];

  const rows = map.length;
  const cols = map[0].length;

  let start, end;

  // Parse the map to find start (S) and end (E) positions
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (map[y][x] === "S") start = { x, y };
      if (map[y][x] === "E") end = { x, y };
    }
  }

  // Min-Heap Priority Queue (to process least-cost paths first)
  const queue = new MinHeap();
  queue.push([start.x, start.y, 0, 0, new Set([`${start.x},${start.y}`])]); // [x, y, direction, score, pathSet]

  // To track the minimum score for each state (x, y, direction)
  const minScores = new Map();
  let minScore = Infinity;
  let uniqueTiles = new Set();

  while (!queue.isEmpty()) {
    const [x, y, dir, score, pathSet] = queue.pop();
    const stateKey = `${x},${y},${dir}`;

    // If we reached a state with a higher score, skip it
    if (minScores.has(stateKey) && minScores.get(stateKey) < score) {
      continue;
    }

    minScores.set(stateKey, score);

    // If we reached the end, check the score
    if (x === end.x && y === end.y) {
      if (score < minScore) {
        // Found a new minimum score
        minScore = score;
        uniqueTiles = new Set(pathSet); // Reset unique tiles for the best path
      } else if (score === minScore) {
        // Add to unique tiles if this path has the same minimum score
        for (const tile of pathSet) {
          uniqueTiles.add(tile);
        }
      }
      continue; // Explore more paths with the same score
    }

    // Move forward
    const nx = x + directions[dir].dx;
    const ny = y + directions[dir].dy;
    if (nx >= 0 && nx < cols && ny >= 0 && ny < rows && map[ny][nx] !== "#") {
      const newPathSet = new Set(pathSet);
      newPathSet.add(`${nx},${ny}`);
      queue.push([nx, ny, dir, score + 1, newPathSet]);
    }

    // Rotate clockwise
    queue.push([x, y, (dir + 1) % 4, score + 1000, new Set(pathSet)]);

    // Rotate counterclockwise
    queue.push([x, y, (dir + 3) % 4, score + 1000, new Set(pathSet)]);
  }

  return {
    minScore,
    uniqueTileCount: uniqueTiles.size,
    uniqueTiles: [...uniqueTiles],
  };
}

// MinHeap implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown(0);
    return top;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _bubbleUp(index) {
    const parent = Math.floor((index - 1) / 2);
    if (parent >= 0 && this.heap[index][3] < this.heap[parent][3]) {
      // Compare scores
      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];
      this._bubbleUp(parent);
    }
  }

  _bubbleDown(index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;

    if (left < this.heap.length && this.heap[left][3] < this.heap[smallest][3])
      smallest = left;
    if (
      right < this.heap.length &&
      this.heap[right][3] < this.heap[smallest][3]
    )
      smallest = right;

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this._bubbleDown(smallest);
    }
  }
}

// Example usage:
const inputMap = [
  "###############",
  "#.......#....E#",
  "#.#.###.#.###.#",
  "#.....#.#...#.#",
  "#.###.#####.#.#",
  "#.#.#.......#.#",
  "#.#.#####.###.#",
  "#...........#.#",
  "###.#.#####.#.#",
  "#...#.....#.#.#",
  "#.#.#.###.#.#.#",
  "#.....#...#.#.#",
  "#.###.#.#.#.#.#",
  "#S..#.....#...#",
  "###############",
];

const result = findBestPathsAndUniqueTiles(
  inputMap.map((row) => row.split(""))
);
console.log("Minimum Score:", result.minScore);
console.log("Unique Tile Count:", result.uniqueTileCount);
console.log("Unique Tiles:", result.uniqueTiles);
