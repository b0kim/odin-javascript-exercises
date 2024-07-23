
// const removeFromArray = function(nums, ...args) {
//     return nums.filter( num => !args.includes(num));
// }

const removeFromArray = function(nums, ...toBeRemoved) {
    res = []

    nums.forEach ( num => {
        if (!toBeRemoved.includes(num)) {
            res.push(num);
        }
    });

    return res
};

// Do not edit below this line
module.exports = removeFromArray;
