const repeatString = function(repeatedString, repeatCount) {
    let result = '';
    if (repeatCount < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < repeatCount; i++) {
        result += repeatedString;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
