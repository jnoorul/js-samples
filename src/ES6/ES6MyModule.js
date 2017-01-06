//sample one using individual export
 var sides = 4;

 export function area(side){
 return side * side;
 }

 export function circumference(side){
 return sides * side;
 }

//sample 2- using single function export which returns objects with members
//like expresss style. var app = express();
/*
export default (function square() {
    var sides = 4;
    return {
        "area" : function(side) {
            return side * side;
        },
        "circumference" : function(side) {
            return sides * side;
        }
    }
})();*/
