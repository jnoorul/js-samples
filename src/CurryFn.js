function greet(language){
    var greetWord;
    switch(language){
        case "tamil":
            greetWord = "Vanakkam";
            break;
        case "english":
            greetWord = "Hello"
            break;
        default:
            greetWord = "Mr";
    }
    return function(name){
        return greetWord+" "+name;
    }
}

var greetInTamil = greet("tamil");
console.log(greetInTamil("Noorul"));

console.log(greet("english")("Ameen"));
console.log(greet("other")("NoorulAmeen"));