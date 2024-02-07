var testObj = {
    "hat":"ballcap",
    "shirt":"jersey",
    "shoes":"cleats",
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue);
console.log(shirtValue);
console.log("END OF FIRST CODE");
console.log("\n")

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed : "sleigh",
};
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
} else{
    return "not found";
}
}
console.log(checkObj("gift"));
console.log("END OF SECOND CODE")
console.log("\n")

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.outside.p["passenger seat"];
console.log(gloveBoxContents);
console.log("END OF THIRD CODE")
console.log("\n")

var collection = {
    "2548":{
        "album": "Slipery when wet",
        "artist": "bon jovi",
        "tracks": [
            "let it rock",
            "you give love a bad name",
        ]
    },
    "2468":{
        "album":"1999",
        "artist":"prince",
        "tracks": [
            "1999",
            "little red corvette "
        ]
    },
    "1245":{
        "artist":"robert palmer",
        "tracks": []
    },
    "5439":{
        "album":"ABBA Gold",
    }
    };
    var collectionCopy = JSON.parse(JSON.stringify(collection));
    function updateRecords(id, prop, value) {
        if (value === "") {
            delete collection[id][prop];
        }else if (prop === "tracks") {
            collection[id][prop] = collection[id][prop] || [];
            collection[id][prop].push(value);
        }else{
            collection[id][prop] = value;
        }
        return collection;
    }
   console.log( updateRecords(5439,"artist","ABBA"));

// END OF THE THIRD CODE//
 console .log("END OF THE FOURTH CODE");
 var myArray = [];
 var i = 0;
 while (i<5 ) {
     myArray.push(i);
i++;
 }console.log(myArray);