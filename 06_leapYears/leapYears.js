/*
    IF year is divisible by 4 AND 
        either year is not divisible by 100 OR year is divisible by 400 THEN
      year is a leap year
    ELSE 
      year is not a leap year
    ENDIF
*/

const leapYears = function(year) {
    const isDivisibleByFour = !(year % 4); 
    const isCentury = !(year % 100);
    const isDivisibleByFourHundred = !(year % 400);

    if ((isDivisibleByFour) && 
        (!isCentury || isDivisibleByFourHundred)
    ) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
