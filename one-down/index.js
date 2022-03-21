// One Down : "https://www.codewars.com/kata/56419475931903e9d1000087/train/javascript"

//we are given a string of letters to decode
//we are to decode the string and return the decoded word/words
//if the input is not a string we are to return "Input is not a string"
function oneDown(str) {
    let alphabet = 'zABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    if(typeof str != 'string') return "Input is not a string"
    for(let char of str){
      alphabet.includes(char) == false ? result += char : result += alphabet[alphabet.lastIndexOf(char) - 1];
    }
    return result;
  }


 /* 
  console.log(oneDown("Ifmmp"), "Hello");
  console.log(oneDown("Uif usjdl up uijt lbub jt tjnqmf"), "The trick to this kata is simple");
  console.log(oneDown(45), "Input is not a string");
 */
  