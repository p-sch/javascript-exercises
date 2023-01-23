const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    else {
        let value = string
        let result = ''
        for (let i = 0; i < num; i++){
            result = result.concat(value)
        }
        return result
    }
};



// Do not edit below this line
module.exports = repeatString;
