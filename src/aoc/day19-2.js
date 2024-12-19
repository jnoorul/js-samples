// Input: available towel patterns and desired designs
const towelPatterns = ["r", "wr", "b", "g", "bwu", "rb", "gb", "br"];
const designs = [
  "brwrr",
  "bggr",
  "gbbr",
  "rrbgbr",
  "ubwu",
  "bwurrg",
  "brgr",
  "bbrgwb",
];

// Recursive function to calculate the number of ways to form a design
function countWaysToFormDesign(design, towelPatterns, memo = {}) {
  // If we've already computed this design, return the result
  if (memo[design] !== undefined) return memo[design];

  // Base case: If the design is empty, there's one way (do nothing)
  if (design === "") return 1;

  // Initialize the number of ways to 0
  let ways = 0;

  // Try every towel pattern
  for (const pattern of towelPatterns) {
    // If the design starts with the current pattern, continue
    if (design.startsWith(pattern)) {
      // Recur with the remaining part of the design
      const remainingDesign = design.slice(pattern.length);
      ways += countWaysToFormDesign(remainingDesign, towelPatterns, memo);
    }
  }

  // Store the result in the memo object and return it
  memo[design] = ways;
  return ways;
}

// Calculate the total number of ways for all designs
let totalWays = 0;
designs.forEach((design) => {
  const ways = countWaysToFormDesign(design, towelPatterns);
  console.log(`Design "${design}" can be formed in ${ways} different way(s).`);
  totalWays += ways;
});

console.log(`\nTotal number of ways to form all designs: ${totalWays}`);
