exports.printHeader = function(message){
    console.log("                                              ");
    console.log(message);
    var dashLine="";
    for(var i=0; i<message.split("").length;i++){
        dashLine += "-";
    }
    console.log(dashLine);
};

