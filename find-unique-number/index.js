// Find unique number : "https://www.codewars.com/kata/5822d900b81f701dd40002c9/solutions/javascript/me/best_practice"

function findUnique(arr){
    //input: an array that contains some numbers (positive, negative, int, float)
    // all numbers will have something in common (odd, even, negative, float, decimals, etc) except for one unique number
    // output: the unique number in the array
    // use the filter method (creates a new array with all elements that pass the test implemented by the provided function)
    // Priority level: float/integer > positive/negative > odd/even > diffrent value with.filter
    // first check if all numbers are floats or integers, check for the opposite with .filter
    // then check if all nums are positive, look for the negative and vise versa with .filter
    // then check if all nums are odd, look for the even and visa versa with .filter
    // then check in there is a unique different value
    // float or int
    let intArr = arr.filter(num => Number.isInteger(num));
    let floatArr = arr.filter(num => num % 1 != 0);
    if (intArr.length === 1) {
    return intArr[0]
    } else if (floatArr.length === 1) {
    return floatArr[0]
    }
    // positive or negative
    let posArr = arr.filter(num => Math.sign(num) == 1);
    
    let negArr = arr.filter(num => Math.sign(num) == -1);
    
    if (posArr.length === 1) {
    return posArr[0]
    } else if (negArr.length === 1) {
    return negArr[0]
    }
    // even or odd
    let evenArr = arr.filter(num => num % 2 == 0);
    
    let oddArr = arr.filter(num => num % 2 != 0);
    
    if (evenArr.length === 1) {
    return evenArr[0]
    } else if (oddArr.length === 1) {
    return oddArr[0]
    }
    // different values
    let uniqueArr = arr.filter(num => arr.lastIndexOf(num) == arr.indexOf(num));
    if (uniqueArr.length === 1) {
    return uniqueArr[0]
    }
    
    }

    //tests

//     Test.assertEquals(findUnique([1,2,3,5,7]) , 2)
// Test.assertEquals(findUnique([2,4,6,8,9]) , 9)
// Test.assertEquals(findUnique([2,-4,6,8]) , -4)
// Test.assertEquals(findUnique([-2,-4,-6,8]) , 8)
// Test.assertEquals(findUnique([2,4.4,6,8]) , 4.4)
// Test.assertEquals(findUnique([2.2,4.4,6.6,8]) , 8)
// Test.assertEquals(findUnique([2,2,2,4]) , 4)
// Test.assertEquals(findUnique([-2,-4,-6.6,8]) , -6.6)
// Test.assertEquals(findUnique([-2,-4,-7, 8]) , 8)