const reverseString = function(string) {
    splitStr = string.split("");
    reverseStr = splitStr.reverse();
    joinStr = reverseStr.join("");
    return joinStr
};

// Do not edit below this line
module.exports = reverseString;
