function isPrime(num) {

    if (isPrime.answers[num]) {
        return isPrime.answers[num];
    }

    if(num ===1){
        isPrime.answers[num] = false;
        return false;
    }

    for (var i = 2; i < num; i++) {
        if((num % i)==0){
            isPrime.answers[num]= false;
            return false;
        }
    }

    isPrime.answers[num] = true;
    return true;
}

isPrime.answers = [];

console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(5));
console.log(isPrime.answers[5]);
console.log(isPrime.answers[6]);