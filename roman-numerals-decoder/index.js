// Roman Numerals Decoder : "https://www.codewars.com/kata/51b6249c4612257ac0000005/solutions/javascript/me/best_practice"

function solution (roman) {
    // Given a string that represents the Roman numerals
    // create a dictionary of the roman numeral key
    // split the string into an array
    // compare the first letter to next letter check if first is smaller
    // if true make it a pair
    
    // Return an integer that the Roman numerals represent
    
    let romanNum = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
  }
    let romanArray = roman.split('')
   // console.log(romanArray)
    let numArr = romanArray.map(numeral => romanNum[numeral])
  
    let result = numArr.reduce((previous,current,index,array) => {
      if(array[index + 1] > current){
       return previous - current
      }else{
       return previous + current
      }
    },0)
  
    console.log(numArr)
    return result
  }

  // tests

//   it("sample tests", () => {
//     doTest('XXI', 21);
//     doTest('I', 1);
//     doTest('IV', 4);
//     doTest('MMVIII', 2008);
//     doTest('MDCLXVI', 1666);
