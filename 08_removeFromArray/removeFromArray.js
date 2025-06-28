/**
 * iterate over arr to check if the value equal to argument (how if the argument not just one)
 * iterate multiple time, as the many of argument?
 * if the the value is equal delete that value
 * but if the value is deleted it effect the index of each element
 * because if the value get deleted the index in queue step forward the iterate value must get decrement by one
 * 
 */

const removeFromArray = function(arr) {
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arguments[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
};

console.log(removeFromArray(["a", "b", "c", "d", "e", "b"], "b", "c"));

// Do not edit below this line
module.exports = removeFromArray;