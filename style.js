
var myArray = [];
var i = 0;
while (i<5 ) {
    myArray.push(i);
i++;
}
console.log(myArray);
console.log("END OF THE FIRST CODE");

var another = [];
var x = 0;
while(x<10) {
    another.push(x);
    x++;
}
console.log(another);
console.log("END OF THE SECOND CODE");

var ourArray = [];
var y;
for( y = 0; y < 20; y++ ) {
    ourArray.push(y);
}
console.log(ourArray);
console.log("END OF THE THIRD CODE");
var Name = []
var z;
    if((z %2)==0) {
for(z = 0; z < 10; z++) { 
    
    Name.push(z);

        console.log(Name);
    }
}
console.log("END OF THE FOUTH CODE");

var OurArr = [12 ,13 ,24, 56 ,78];
var sum = 0;
var x;
for (x = 0; x < OurArr.length; x++) {
    sum += OurArr[x];
}
console.log(sum);
console.log("END OF THE FOUTH CODE");
 var randomNumber = Math.floor(Math.random()*20);
 function randomWholenum() {
 return Math.floor(Math.random()*10);
}
console.log(randomWholenum());
console.log("END OF THE FOUTH CODE");

 function convertToInteger(str) {
    return parseInt(str, 2);
 }
 convertToInteger("10011")
console.log(convertToInteger("10011"));
console.log("END OF THE FIFTH CODE");
function checkEqual(a,b) {
    return a==b;
}
checkEqual(1,2);
console.log(checkEqual(1,2));
console.log("END OF THE SIXTH CODE");
// ternary operator//
function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(12))
console.log("END OF THE SEVENTH CODE");
function freezeobj(){
    "use strict";
    const math = {
        PI :3.14
    };
    Object.freeze(math);
    try {
        math.PI = 70;
    } catch (ex) {
        console.log(ex);

    }
    return math.PI;
}
const PI = freezeobj();
console.log(PI);

console.log("END OF THE EIGHTH CODE");

//arrow functions//
var myconcat = (arr1, arr2) =>arr1.concat(arr2);
console.log(myconcat([1, 2], [3, 4]));
// end of arrow functions//
var myContainer = [];
var x;
for( x = 0; x < 10; x++ ) {
    myContainer.push(x);
}
console.log(myContainer);

object = {
    gift:"hat",
    clothes:"trousers",
    household:"utensils",
}

delete object.gift;
console.log(object);

function add(num1,num2) {
    return num1+num2;
}
console.log(add(12,34));

 var arr = [[12,34], [45,78]];
 var number = arr.pop();
 console.log(arr);
 var myconcat = function(arr1, arr2) {
    return arr1.concat(arr2);
 };
 console.log(myconcat([44,66], [45,78]));

 var myconcat = (arr1, arr2) => arr1.concat(arr2);
 console.log(myconcat([44,66], [45,78]))
 console.log("\n")
 const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));
console.log("\n")
// rest operator//
const total= (function() {
    return function total(...args) { //...this is the rest operator//
        return args.reduce((a,b) => a +b,0);
    };
})();
console.log(total(1,2,3,4));

console.log("\n")
const ray1 = ['jan','feb','mar','apr','may','jun','jul']
let ray2;
(function() {
    ray2 =[...ray1];
    ray1[0] ='potato';
})();
console.log(ray2);
console.log("\n")
const avg_temperature = {
    today : 77.5,
    tommorow : 79

};
function getTemp(avgtemperature) {
    "use strict";
    const{tommorow:tempoftommorow} = avgtemperature;
    return tempoftommorow;
}
console.log(getTemp(avg_temperature));