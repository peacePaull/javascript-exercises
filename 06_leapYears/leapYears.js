const leapYears = function(year) {
    let isLeapYear = true;
    if(year % 4 == 0){
        return isLeapYear
    } else if(year % 100 == 0 && year % 400 ==0){
        return isLeapYear
    }else{
        isLeapYear = false;
    }
    return isLeapYear
};

// Do not edit below this line
module.exports = leapYears;
