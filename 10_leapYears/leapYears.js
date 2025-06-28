const leapYears = function(year) {
    return (year % 4 == 0) && (!(year % 100 == 0) || (year % 400 == 0))
};

/**
 * All 100 is divisable by 4 so the constructor is
 * year % 4 == 0
 *      if divisable by 100
 *          not
 *      else if divisable by 400
 */

// Do not edit below this line
module.exports = leapYears;
