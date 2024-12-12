function simulateStones(initialStones, blinks) {
    let stoneCounts = new Map(); 

    for (const stone of initialStones) {
        stoneCounts.set(stone, (stoneCounts.get(stone) || 0) + 1);
    }

    for (let i = 0; i < blinks; i++) {
        const nextStoneCounts = new Map();

        for (const [stone, count] of stoneCounts) {
            if (stone === 0) {
                nextStoneCounts.set(1, (nextStoneCounts.get(1) || 0) + count); // Rule 1
            } else if (stone.toString().length % 2 === 0) {
                const strStone = stone.toString();
                const mid = Math.floor(strStone.length / 2);
                const left = parseInt(strStone.slice(0, mid), 10);
                const right = parseInt(strStone.slice(mid), 10);
                nextStoneCounts.set(left, (nextStoneCounts.get(left) || 0) + count); // Rule 2
                nextStoneCounts.set(right, (nextStoneCounts.get(right) || 0) + count);
            } else {
                const newStone = stone * 2024;
                nextStoneCounts.set(newStone, (nextStoneCounts.get(newStone) || 0) + count); // Rule 3
            }
        }

        stoneCounts = nextStoneCounts; 
    }

    let totalStones = 0;
    for (const count of stoneCounts.values()) {
        totalStones += count;
    }

    return totalStones;
}

const initialStones = [4, 4841539, 66, 5279, 49207, 134, 609568, 0];
const blinks = 75;

const result = simulateStones(initialStones, blinks);
console.log(`Number of stones after ${blinks} blinks:`, result);
