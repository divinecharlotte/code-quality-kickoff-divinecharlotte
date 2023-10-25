//exercesise4.1
function getNestingLevel(arr) {
    if (!Array.isArray(arr))  return 0;
    let nestingLevel = 0;

    for (let element of arr) {
        if (Array.isArray(element)) {
             nestingLevel = getNestingLevel(element) + 1;
            if (nestingLevel > 0) {
                nestingLevel = nestingLevel;
            }
        }
    }

    return nestingLevel;
}
let a = getNestingLevel([1, 2, 3, [1, 2, 3, [1, 2, [1, 3]]]])
console.log([1, 2, 3, [1, 2, 3, [1, 2, [1, 3]]]].flat(a));

//exercesise4.2
function prime(number_) {
    if (number_ <= 1) return false;
    for (let index = 2; index < number_; index++) {
        if (number_ % index == 0) return false;
    }
    return true;
}
//exercesise4.3
const sum = (arr) => {
    if(arr.length===0) return 0

     return arr[0]+sum(arr.slice(1))
}
console.log(sum([1, 2, 3]));

//exercesise4.4
function removeDuplicatesRecursive(arr, index = 0, result = []) {
    if (index === arr.length)  return result;
    if (!result.includes(arr[index])) {
        result.push(arr[index]);
    }
    return removeDuplicatesRecursive(arr, index + 1, result);
}
console.log(removeDuplicatesRecursive([1, 2, 1, 5, 2, 3]));