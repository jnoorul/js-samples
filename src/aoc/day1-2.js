function calculateSimilarity(leftList, rightList) {
    const frequencyMap = {};
    rightList.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });

    let similarityScore = 0;
    leftList.forEach(num => {
        similarityScore += num * (frequencyMap[num] || 0);
    });

    return similarityScore;
}

const input = `3   4
4   3
2   5
1   3
3   9
3   3
`;

const lines = input.trim().split('\n');
console.log('lines', lines);

const leftList = [];
const rightList = [];

lines.forEach(line => {
    const [num1, num2] = line.split('   ').map(Number);
    leftList.push(num1);
    rightList.push(num2);
});

const result = calculateSimilarity(leftList, rightList);
console.log("Similarity Score:", result);
