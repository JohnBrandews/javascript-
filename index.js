function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var results ="";
    results+= "the " + myAdjective + " " + myNoun  + " " + myVerb + "to the store " + myAdverb
    return results;
}
    console.log(wordBlanks("dog","big","ran","quickly"));
    var ourArray = ["steven", "jack", "cat"];
    ourArray.push(["happy", "joy"]);//add our array into the array(push)
    console.log(ourArray)
console.log("\n")
    var myArray = [["happy", 45],["cat", 4]];
    var remove = myArray.pop();
    console.log(myArray)
    console.log("\n")
    var myArrange =[["john", 55],["cat", 4]];
    var get = myArrange.shift();
    console.log(myArrange)
    console.log("\n")
    // functions
    function ourReusableFunction(){
        console.log("Heyy, world!");
    }
    ourReusableFunction();
    console.log("\n")
function additional(a,b){
    console.log(a*b);
}
additional(24,7);
console.log("\n")
function minusSeven(num) {
    return num-7;
}
console.log(minusSeven(10));
console.log("\n")
var changed = 0;
function change(num) {
    return(num + 5)/3;
}
changed = change(10);
console.log(changed);
console.log("\n");
// adding items in line
function nextInLine(arr,item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2 ,3,4,5];
console.log("Before:" + JSON.stringify(testArr));//change array into a string that can easily be printed out(JSON.stringify(testAr))
console.log(nextInLine(testArr,6));
console.log("After:" + JSON.stringify(testArr));
console.log("\n");
function number(number) {
    if(number) {
        return"it's a number";

    }
    return " no it's a number";
}
console.log(number(number))
console.log("\n")
function testEqual(val){
    if(val == 12) {
        return "equals";
    }
    return " not equals";
}
console.log(testEqual(10));
console.log("\n")
function testElseif(val){
    if(val > 10) {
        return "greater than 10"
    }else if (val < 5) {
        return "smaller than 5"
    }else{
        return "between 5 and 10"
    }
}
console.log(testElseif(20))
console.log("\n")
//golf game
var names = ("hole-in-one","eagle","birdie","par","bogey","double bogey","go home")
function golfScore(par,strokes) {
    if (strokes == 1) {
        return names[0]
    }else if (strokes <= par - 2) {
        return names[1]
        
    }else if (strokes == par - 1) {
        return names[2]
        
    }else if (strokes == par ) {
        return names[3]
        
    }else if (strokes == par + 1) {
        return names[4]
        
    }else if (strokes == par + 2) {
        return names[3]
        
    }else if (strokes >= par + 3) {
        return names[6]
    }
}
console .log(golfScore(5,4))
console.log("\n")
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
            case 2:
                answer = "beta";
                break;
                case 3:
                    answer = "gamma";
                    break;
                    case 4:
                        answer = "delta";
                        break;
    }
    return answer;
}
console.log(caseInSwitch(3))
console.log("\n")
function sequential(val) {
    var answer ="";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
            
        case 4:
            case 5:
            case 6:
                answer = "high";
                break;
    }
    return answer;
}
console.log(sequential(1))
console.log("\n")
//boolean//
function isLess(a, b) {
    return a < b;
}
console.log(isLess(7, 2))
// boolean//
console.log("\n")
//card 
var count = 0;
function cc(card) {
    switch(card) {
        case 2:
            case 3:
                case 4:
                    case 5:
                        case 6:
                            count++;
                            break;
                            case 10:
                                case "J":
                                    case "Q":
                                        case "k":
                                            case "A":
                                                count--;
                                                break;
    }
    var holdbet = "Hold"
    if (count > 0) {
        holdbet = "Bet"
    }
    return count + " " + holdbet;
}
cc(2); cc(3); cc("k"); cc("A"); cc("k"); cc("Q");
console.log(cc(4))