const removeFromArray = function(array, ...values) {
    let filteredArray = array.filter(item => !values.includes(item))
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
