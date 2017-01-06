/*
 JavaScript objects with property begins with number cannot be accessed like
 obj.1 or obj.1stprop. it should be accessed like obj[1] or obj[1stprop]

 Arrays are internally stored as object with property
 var fruits = ['apple','mango'] will be internally represented as
 var fruits = {
 "1" : "apple",
 "2"  : "mango"
 }

 but can only accessed by obj[] not obj.

 */

//Array length

var numbers = ['zero','one','two'];

console.log(numbers.length);
console.log(Object.keys(numbers));

numbers.length = 2; // reducing length of the array removes elements.
console.log(Object.keys(numbers));

numbers.length = 5; //increasing lenght of the array does not bring back deleted items
console.log(Object.keys(numbers));

numbers[7] = "seven";
console.log(numbers.length); //assigning new elements to an index will increase array length
console.log(Object.keys(numbers));


//for each

numbers.forEach(function(item,index,array){
    console.log("item:"+item+ " index:"+index+" array size "+array.length);
});

//filter
var newArray = numbers.filter(function(item){
    return (item==="one" || item === "zero");
});

console.log("new array size after filtering"+newArray.length);

//sort
numbers.sort().forEach(
    function(item,index,array){
        console.log("item after sorting:"+item);
    }
);

//map
var arrayAfterMapping = numbers.map(function(item){
   return item+" after mapping";
});

arrayAfterMapping.forEach(function(item,index,array){
    console.log("mapping:"+item);
});

//push
numbers.push("eight");
console.log(numbers);

//pop
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);

//shift  -- opposite of pop
numbers.shift();
console.log(numbers);

//unshift  -- opposite of push - insert item in the begining
numbers.unshift("one");
console.log(numbers);
console.log(Object.keys(numbers));

//slice -- creates a new subset array
numbers.push("1");
numbers.push("7");
numbers.push("0");
console.log(numbers);
var slicedArray = numbers.slice(3,numbers.length);
console.log("original array: "+numbers);
console.log("sliced array: "+slicedArray);

//slice to copy an array
var newArrayCopy = numbers.slice();
console.log("new copy of array using slice: "+newArrayCopy);

//splice -- deletes elements from array and returns deleted item. it is like splitting 1 array in to 2
var splicedArray = numbers.splice(3,3); //from position 3, remove 3 items
console.log("original array: "+numbers);
console.log("spliced array: "+splicedArray);

//delete an item from array
delete splicedArray[0];
console.log("array of deleting one item"+splicedArray);
console.log(Object.keys(splicedArray));
