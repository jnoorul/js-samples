function sumValidMulInstructions(memory) {
  // Regular expression to match valid mul(X,Y) instructions
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
  let match;
  let sum = 0;

  // Iterate over all matches in the corrupted memory
  while ((match = regex.exec(memory)) !== null) {
    // Extract the numbers and compute their product
    const num1 = parseInt(match[1], 10); // First number
    const num2 = parseInt(match[2], 10); // Second number
    sum += num1 * num2;
  }

  return sum;
}

// Test the function with the given corrupted memory
const corruptedMemory = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
const result = sumValidMulInstructions(corruptedMemory);
console.log("The sum of all valid mul instructions is:", result);
