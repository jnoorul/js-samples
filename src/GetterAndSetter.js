var obj = {
    "hour" :0,
    "min" :0,
    "sec" :0,

    get time(){
        return this.hour+":"+this.min+":"+this.sec;
    },
    set time(timeObj){
        this.hour = timeObj.h;
        this.min = timeObj.m;
        this.sec = timeObj.s;
    }

};

console.log(obj.time);
obj.time = {h:1,m:2,s:3};
console.log(obj.time);
