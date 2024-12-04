function sumValidMulInstructions(memory) {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
  let match;
  let sum = 0;

  while ((match = regex.exec(memory)) !== null) {
    const num1 = parseInt(match[1], 10); 
    const num2 = parseInt(match[2], 10); 
    sum += num1 * num2;
  }

  return sum;
}

const corruptedMemory = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
const result = sumValidMulInstructions(corruptedMemory);
console.log("The sum of all valid mul instructions is:", result);
