function countXMASOccurrences(grid) {
  const target = "XMAS";
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    { dr: 0, dc: 1 }, // Right
    { dr: 0, dc: -1 }, // Left
    { dr: 1, dc: 0 }, // Down
    { dr: -1, dc: 0 }, // Up
    { dr: 1, dc: 1 }, // Down-right
    { dr: -1, dc: -1 }, // Up-left
    { dr: 1, dc: -1 }, // Down-left
    { dr: -1, dc: 1 }, // Up-right
  ];

  let count = 0;

  // Helper function to check if "XMAS" can be found starting at (r, c) in a given direction
  function search(r, c, dr, dc) {
    for (let i = 0; i < target.length; i++) {
      const nr = r + i * dr;
      const nc = c + i * dc;
      if (
        nr < 0 ||
        nr >= rows ||
        nc < 0 ||
        nc >= cols ||
        grid[nr][nc] !== target[i]
      ) {
        return false;
      }
    }
    return true;
  }

  // Traverse the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Check all directions from the current cell
      for (const { dr, dc } of directions) {
        if (search(r, c, dr, dc)) {
          count++;
        }
      }
    }
  }

  return count;
}

// Example usage
const wordSearch = [
  "MMMSXXMASM",
  "MSAMXMSMSA",
  "AMXSXMAAMM",
  "MSAMASMSMX",
  "XMASAMXAMM",
  "XXAMMXXAMA",
  "SMSMSASXSS",
  "SAXAMASAAA",
  "MAMMMXMMMM",
  "MXMXAXMASX",
];

const grid = wordSearch.map((row) => row.split(""));
const result = countXMASOccurrences(grid);
console.log("Total occurrences of 'XMAS':", result);
