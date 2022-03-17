// "Largest pair sum in array" : "https://www.codewars.com/kata/556196a6091a7e7f58000018";

// Given a sequence of numbers, find the largest pair sum in the sequence.


function largestPairSum (numbers) {
    numbers.sort(function(a, b){return b-a}) 
   return numbers[0] + numbers[1]
}

//    function doTest (array, expected) {
//     const actual = largestPairSum(array);
//     strictEqual(actual, expected, `for array [${array.join(', ')}]:\n`);
//   }
  
  
      console.log([10,14,2,23,19], 42);
      console.log([-100,-29,-24,-19,19], 0);
      console.log([1,2,3,4,6,-1,2], 10);
      console.log([-10, -8, -16, -18, -19], -18);
