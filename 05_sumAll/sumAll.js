const sumAll = function(min, max) {
    // inputs must be positive integers
    if (typeof min !== 'number' || typeof max !== 'number') return 'ERROR';
    if (Math.floor(min) !== min || Math.floor(max) !== max) return 'ERROR';
    if (min < 0 || max < 0) return 'ERROR';

    if (max < min) {
        [min, max] = [max, min];
    }

    total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;
