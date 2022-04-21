// Keyword Cipher Helper : "https://www.codewars.com/kata/535c1c80cdbf5011e600030f/train/javascript"

// given 2 strings (one for abcs) and (one for keyword) in the parent function
// encode the given the string input
// and also decode the given string input
// cancatentae the 2 params
// filter thru for repeated letters
// return the cipher

function KeywordCipher(abc, key) {
  let newAbc = [...abc].filter(letter => !key.includes(letter))
  let keyArr = [...key].concat(newAbc)
  let newArr = keyArr.filter((letter,i) => keyArr.indexOf(letter) === i) 
  
  this.encode = function (str) {
  let result = str.split('').map(el =>  abc.includes(el) ? abc.indexOf(el) : el)
  let newResult = result.map(el  => newArr[el] && typeof el != 'string' ? newArr[el] : el)
  return newResult.join('')
  }
  this.decode = function (str) {
  let answer = str.split('').map(el => newArr.includes(el) ? newArr.indexOf(el) : el)
  let newAnswer = answer.map(el => abc[el] && typeof el != 'string' ? abc[el] : el)
  return newAnswer.join('')
  }
  }
  // tests

//   describe("Tests", () => {
//     it("test", () => {
//   var abc = "abcdefghijklmnopqrstuvwxyz";
//   var key = "keyword";
//   var cipher = new KeywordCipher(abc, key);
  
//   Test.assertEquals(cipher.encode("abc"), "key");
//   Test.assertEquals(cipher.encode("xyz"), "vxz");
//   Test.assertEquals(cipher.decode("key"), "abc");
//   Test.assertEquals(cipher.decode("vxz"), "xyz");
  
//     });
//   });