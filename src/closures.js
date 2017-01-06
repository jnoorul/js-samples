// count cannot be used outside.
//only public methods are accessible outside.

function counter(){
    var count = 0;

    return {
        "increment":function(){
            count += 1;
        },
        "decrement":function(){
            count -= 1;
        },
        "getCounter":function(){
            return count;
        }
    }
}

var myCounter = counter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.decrement();
console.log(myCounter.getCounter());