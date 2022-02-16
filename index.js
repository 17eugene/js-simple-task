///////////////////////--TASK-01--/////////////////////

const array = [1, 3, -12, 5, -2, 8, 4, 11]

function maxDifference(arr) {
    if(arr.length < 2) {
        return 0;
    }

    const diff = Math.max(...arr) - Math.min(...arr);

    return diff;
}

// console.log(maxDifference(array))

////////////////////////////////////////////////////////

///////////////////////--TASK-02--/////////////////////

const string = "random string for second task"
const number = 4;

function compareLength(str, num) {
    if(!num || isNaN(num) || num == 0 ) {
        return str.split(" ")
    }

    let store = [];
    let splittedStr = str.split(" ");
    
    for(let i = 0; i < splittedStr.length; i++) {
        if(splittedStr[i].length > num) {
            store.push(splittedStr[i])
        }
    }

    return store;
}

// console.log(compareLength(string, number))

////////////////////////////////////////////////////////

///////////////////////--TASK-03--/////////////////////

const missNumArray = [4, 7, 2, 5, 9, 3, 1, 0, 6]

function getMissingElement(arr) {
    if(!arr.length) {
        return null
    }

    const sorted = [...arr].sort((a, b) =>  a - b);
    let missedNum;
    
    for(let i = 0; i < sorted.length; i++) {
        if(sorted[i] !== i) {
            missedNum = i;
            break;
        }

        if(missedNum === undefined && sorted.length <= 9) {
            missedNum = sorted[sorted.length - 1] + 1
        }
    }

    return missedNum;
}

// console.log(getMissingElement(missNumArray))

////////////////////////////////////////////////////////

///////////////////////--TASK-04--/////////////////////

function endBySubstring(str, ending) {
    if(!str || typeof str !== "string" || typeof ending !== "string") return null;

    let slicedStr = str.slice(-ending.length);

    return slicedStr === ending ? true : false;

}

// console.log(endBySubstring("window", "dow"))

////////////////////////////////////////////////////////

///////////////////////--TASK-05--/////////////////////

const collection = [1, 3, 5, 2, -3, -3, 7]

function average(arr) {
    let averageValue;
    const averageValuesStore = [];

    if(arr.length < 2) return null;

    for(let i = 1; i < arr.length; i++) {
        averageValue = (arr[i] + arr[i-1]) / 2;
        averageValuesStore.push(averageValue)
    }
    return averageValuesStore;
}

// console.log(average(collection))
////////////////////////////////////////////////////////

///////////////////////--TASK-06--/////////////////////

let baseNumber = 3187305;

function maxValue(num) {
    if(!baseNumber) return 0;

    let strFromNum = String(num).split('').sort((a,b) => b - a).join('');
    let result = Number(strFromNum);

    return result;

}

// console.log(maxValue(baseNumber));

////////////////////////////////////////////////////////

///////////////////////--TASK-07--/////////////////////

const scores = {
    "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, 
    "F": 12, "G": 3, "H": 10, "I": 200, "J": 100,  
    "K": 114, "L": 100, "M": 25, "N": 450, "O": 80, 
    "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405,  
    "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23
}

let personName = "Eugene"

function getScore(str) {
    if(!str) return 0;

    let data = Object.entries(scores)
    let scoresArr = [];
    let result;
    
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < data.length; j++) {
            if(str[i].toUpperCase() === data[j][0]) {
                scoresArr.push(data[j][1])
            }

            result = scoresArr.reduce((acc, score) => acc + score, 0)
        }
    }
    return result <= 60 ? "NOT TOO GOOD" 
    : result >= 61 && result <= 300 ? "PRETTY GOOD" 
    : result >= 301 && result <= 599 ? "VERY GOOD" 
    : result >= 600 ? "THE BEST" : undefined
}

// console.log(getScore(personName))

////////////////////////////////////////////////////////

///////////////////////--TASK-08--/////////////////////

const vowelsArr = ["a", "e", "i", "o", "u", "y"];
const baseStr = "anaesthetist"

function vowelsQuantity(str) {
    if(!str || typeof str !== "string") return 0;

    let store = {};

    for(let i = 0; i < str.length; i++) {
        
        let letter = str[i];

        if(vowelsArr.includes(letter)) {
           if(store[letter] != undefined) {
            store[letter] += 1;
            
           } else {
               store[letter] = 1
           }
        }
    }
    return quantity = Object.values(store).reduce((acc, item) => acc + item, 0)
}

// console.log(vowelsQuantity(baseStr))

////////////////////////////////////////////////////////

///////////////////////--TASK-09--/////////////////////

const needToDeleteArr = ["a", "b", "c"];
const deleteFromStr = "Random string for java script task"

function deleteLetters(str) {

    for(let i = 0; i < needToDeleteArr.length; i++) {
        if(str.includes(needToDeleteArr[i])) {
            return deleteFromStr.replace(/[a,b,c]/g, '')
        } else {
            return null
        }
    }
}

// console.log(deleteLetters(deleteFromStr))

////////////////////////////////////////////////////////

///////////////////////--TASK-10--/////////////////////

const firstArr = [2, 7, 3, 1];
const secondArr = [6, 12, 11, 7, 2];

function getUniqueValues(arr1, arr2) {
    let uniqueArrValues = [...new Set([...arr1, ...arr2])];
     
    return uniqueArrValues;
}

// console.log(getUniqueValues(firstArr, secondArr))

////////////////////////////////////////////////////////

///////////////////////--TASK-11--/////////////////////

const object = {
    name: "Hugo",
    age: 25,
    gender: "Male"
}

function modifyObj(obj) {
    let result = {};

    Object.entries(obj).forEach(([key, value]) => result[value] = key);

    return result;
}

// console.log(modifyObj(object))

////////////////////////////////////////////////////////

///////////////////////--TASK-12--/////////////////////

const stolenStuff = {
    shoes: 250,
    laptop: 500,
}

const insurance = 680;

function calculateDifference(stolen, ins) {
    for(let key in stolen) {
        if(!key) return null;
    }

    let totalCost = Object.values(stolen).reduce((acc, item) => acc + item, 0);

    if(totalCost <= ins) return null
    
    let difference = totalCost - ins;
    return difference;
}

// console.log(calculateDifference(stolenStuff, insurance))

////////////////////////////////////////////////////////

///////////////////////--TASK-13--/////////////////////

const rotateStr = "abcd"

function leftRotation(str) {
    let collection = [str];

    let arrFromStr = str.split('')
    
    for(let i = 1; i < arrFromStr.length; i++) {
        let firstChar = arrFromStr.shift();
        arrFromStr.push(firstChar)
        
        let newStr = arrFromStr.join('');
        collection.push(newStr)
    }
    return collection
}

function rightRotation(str) {
    let collection = [str];
    let arrFromStr = str.split('')
    
    for(let i = 1; i < arrFromStr.length; i++) {
        let lastChar = arrFromStr.pop();
        arrFromStr.unshift(lastChar)
        
        let newStr = arrFromStr.join('');
        collection.push(newStr)
    }
    return collection
}

// console.log(leftRotation(rotateStr), rightRotation(rotateStr))

////////////////////////////////////////////////////////

///////////////////////--TASK-14--/////////////////////

const brickSizes = {
    h: 1,
    w: 2,
    d: 2,
};

const holeSizes = {
   w: 2,
   h: 2,
}

function doesBrickFit(brick, hole) {
    if(brick.h <= hole.h && brick.w <= hole.w 
        || brick.d <= hole.w && brick.h <= hole.h 
        || brick.w <= hole.h && brick.d <= hole.w) {
        return true
    } else {
        return false
    }
}

console.log(doesBrickFit(brickSizes, holeSizes))

////////////////////////////////////////////////////////


