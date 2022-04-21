// Keyword Cipher Helper : "https://www.codewars.com/kata/535c1c80cdbf5011e600030f/train/javascript"

// given 2 strings (one for abcs) and (one for keyword) in the parent function
// encode the given the string input
// and also decode the given string input
// cancatentae the 2 params
// filter thru for repeated letters
// return the cipher

function KeywordCipher(abc, key) {
  // console.log('abc',abc)
  // console.log('keyword',key)
  
  key = key.split('')
  abc = abc.split('')
  let newAbc = abc.filter(letter => !key.includes(letter))
  let keyArr = key.concat(newAbc)
  console.log('keyArr', keyArr.length)
    
    // encode 
  this.encode = function (str) {
  let strArr = str.split('')
  console.log(strArr)
  let result = str.split('').map(el => {
  if(abc.includes(el)){
    return abc.indexOf(el)
  }else{ return el}
  })
  console.log('encode result', result)
    let newResult = result.map(letter => {
     if(keyArr[letter] && typeof letter != 'string'){
      return keyArr[letter]
     }else {return letter}
    })
  console.log('encode newResult',newResult.join(''))
    return newResult.join('')
  }
    // decode
  this.decode = function (str) {
    let strArr = str.split('')
    console.log('decode strArr',strArr)
  let answer = str.split('').map(el => {
  if(keyArr.includes(el)){
    return keyArr.indexOf(el)
  }else { return el}
  })
  console.log('decode answer', answer)
    let newAnswer = answer.map(letter => {
      if(abc[letter] && typeof letter != 'string'){
        return abc[letter]
      }else {return letter}
    })
  console.log('decode newAnswer',newAnswer.join(''))
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