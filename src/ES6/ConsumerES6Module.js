/*

// you can import all exported varaiables/methods using * and give an alias like "square"
import * as square from './ES6MyModule';

(function(){
    console.log(square.circumference(5));
})();*/


//you can selectively import individual exported members.
//you should know their exact name like area, circumference.
//you can put alias if needed.. import {area} as areaOfSquare
import {circumference, setSides} from './ES6MyModule.js';
import { circumference as anotherConsumerCircumference} from './another-consumer.js';



(function(){
    console.log('inside first consumer module');
    setSides(6);
    console.log('Circumference : ',circumference(5));
    console.log('call circumference through another consumer');
    console.log(anotherConsumerCircumference(5));
})();



//you can put alias if needed.. import {area} as areaOfSquare
// import {circumference as myCircum}  from './ES6MyModule';


// (function(){
//    console.log(myCircum(5));

// })();

// you can specify any names like "mySquare" when default export is used in exported module.
//
/*import mySquare from './ES6MyModule';


(function(){
    console.log(mySquare.circumference(5));
})();*/

