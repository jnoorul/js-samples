/*

// you can import all exported varaiables/methods using * and give an alias like "square"
import * as square from './ES6MyModule';

(function(){
    console.log(square.circumference(5));
})();*/


//you can selectively import individual exported members.
//you should know their exact name like area, circumference.
//you can put alias if needed.. import {area} as areaOfSquare
import {area,circumference} from './ES6MyModule';


(function(){
    console.log(circumference(5));
    console.log(area(5));
})();


//you can put alias if needed.. import {area} as areaOfSquare
import {area as myArea}  from './ES6MyModule';


(function(){
    // console.log(myCircum(5));
    console.log(myArea(5));
})();

// you can specify any names like "mySquare" when default export is used in exported module.
//
/*import mySquare from './ES6MyModule';


(function(){
    console.log(mySquare.circumference(5));
    console.log(mySquare.area(5));
})();*/

