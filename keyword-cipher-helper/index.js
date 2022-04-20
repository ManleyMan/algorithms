// Keyword Cipher Helper : "https://www.codewars.com/kata/535c1c80cdbf5011e600030f/train/javascript"

// given 2 strings (one for abcs) and (one for keyword) in the parent function
// encode the given the string input
// and also decode the given string input
// cancatentae the 2 params
// filter thru for repeated letters
// return the cipher

function KeywordCipher(abc, key) {
    key = key.split('')
    abc = abc.split('')
    let newAbc = abc.filter(el => !key.includes(el))
    let keyArr = key.concat(newAbc)
  this.encode = function (str) {
      let result = str.split('').map(el => {
     if(abc.includes(el)){return abc.indexOf(el)}
     })
  
    let newResult = result.map(el =>  keyArr[el])
    return newResult.join('')
    }
  this.decode = function (str) {
   let answer = str.split('').map(el => {
     if(keyArr.includes(el)){return keyArr.indexOf(el)}
     })
    
    let newAnswer = answer.map(el =>  abc[el])
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