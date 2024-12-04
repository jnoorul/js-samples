function calculateSimilarityWithConditions(memory) {
    const mulRegex = /mul\((\d+),(\d+)\)/;
    const doRegex = /do\(\)/g;
    const dontRegex = /don't\(\)/g;

    let total = 0;
    let mulEnabled = true; 

    const instructions = memory.match(/(mul\(\d+,\d+\)|do\(\)|don't\(\))/g);

    if (!instructions) {
        console.log("No valid instructions found.");
        return 0;
    }

    console.log('inst', instructions);

    instructions.forEach(instruction => {
        if (doRegex.test(instruction)) {
            mulEnabled = true; 
        } else if (dontRegex.test(instruction)) {
            mulEnabled = false; 
        } else if (mulEnabled && mulRegex.test(instruction)) {
            const match = instruction.match(mulRegex)
            if (match) {
                const num1 = parseInt(match[1], 10);
                const num2 = parseInt(match[2], 10);
                total += num1 * num2; 
            }
        }
    });

    return total;
}

const corruptedMemory = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

const result = calculateSimilarityWithConditions(corruptedMemory);
console.log("Total Similarity Score:", result);
