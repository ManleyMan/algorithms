Thinkful - List and Loop Drills: Inverse Slicer : "https://www.codewars.com/kata/586ec0b8d098206cce001141/solutions/javascript/me/newest"

const inverseSlice = (items, a, b)=> items.slice(0,a).concat(items.slice(b))


// tests

// ("Basic tests", function(){
//     Test.assertDeepEquals(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4), [12, 14, 55, 24]);
//     Test.assertDeepEquals(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3), [72, 55, 24]);
//     Test.assertDeepEquals(inverseSlice(['Intuition', 'is', 'a', 'poor', 'guide', 'when', 'facing', 'probabilistic', 'evidence'], 5, 13), ['Intuition', 'is', 'a', 'poor', 'guide']);
//   });