const reverseString = function(string) {
    let strArray = string.split("");
    let reversedList = [];
    for (i = 0; i < string.length; i++){
        reversedList.push(strArray.pop())
    };
    return reversedList.join("")
};

// Do not edit below this line
module.exports = reverseString;
