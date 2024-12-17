function runProgram(initialA, initialB, initialC, program) {
  // Registers
  let A = initialA,
    B = initialB,
    C = initialC;

  // Instruction Pointer
  let ip = 0;

  // Output Storage
  let output = [];

  // Combo operand resolution
  function resolveCombo(operand) {
    if (operand >= 0 && operand <= 3) return operand; // Literal values 0-3
    if (operand === 4) return A;
    if (operand === 5) return B;
    if (operand === 6) return C;
    throw new Error("Invalid combo operand: " + operand);
  }

  // Run the program
  while (ip < program.length) {
    const opcode = program[ip];
    const operand = program[ip + 1];

    switch (opcode) {
      case 0: // adv: Division, result stored in A
        A = Math.floor(A / Math.pow(2, resolveCombo(operand)));
        break;

      case 1: // bxl: B XOR literal operand
        B = B ^ operand;
        break;

      case 2: // bst: Combo operand mod 8 -> B
        B = resolveCombo(operand) % 8;
        break;

      case 3: // jnz: Jump if A != 0
        if (A !== 0) {
          ip = operand;
          continue; // Do not increment ip by 2
        }
        break;

      case 4: // bxc: B XOR C
        B = B ^ C;
        break;

      case 5: // out: Output combo operand mod 8
        output.push(resolveCombo(operand) % 8);
        break;

      case 6: // bdv: Division, result stored in B
        B = Math.floor(A / Math.pow(2, resolveCombo(operand)));
        break;

      case 7: // cdv: Division, result stored in C
        C = Math.floor(A / Math.pow(2, resolveCombo(operand)));
        break;

      default:
        throw new Error("Unknown opcode: " + opcode);
    }

    // Move instruction pointer to the next instruction
    ip += 2;
  }

  // Return the output as a comma-separated string
  return output.join(",");
}

// Example Usage
const initialA = 27334280;
const initialB = 0;
const initialC = 0;
const program = [2, 4, 1, 2, 7, 5, 0, 3, 1, 7, 4, 1, 5, 5, 3, 0];

const result = runProgram(initialA, initialB, initialC, program);
console.log("Output:", result);
