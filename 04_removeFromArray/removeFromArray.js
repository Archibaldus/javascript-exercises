const removeFromArray = function(arr, ...args) {
    const result = arr.filter(item => !args.includes(item));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
