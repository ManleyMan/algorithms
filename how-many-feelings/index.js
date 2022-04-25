 //How many feelings? : "https://www.codewars.com/kata/5a33ec23ee1aaebecf000130/train/javascript"

 function countFeelings(string, array) {
 
    // One way to solve using forEach.
    let output = [];
    let tally = 0;
    array.forEach(word => {
      for(let i = 0; i < word.length; i++){
          if(string.includes(word.charAt(i))) tally++;
      }
      if(tally == word.length) {
        output.push(word);
        }
      tally = 0;
    })
    return output.length == 1 ? `${output.length} feeling.` : `${output.length} feelings.`;
    
      // one way to solve using .filter , .every
  let result = array.filter(word => [...word].every(el => string.includes(el))).length
  return result == 1 ? `${result} feeling.` : `${result} feelings.`;

  
  //tests
  
  Test.assertEquals(countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief']), '3 feelings.');
  Test.assertEquals(countFeelings('angerw', ['anger', 'awe', 'joy', 'love', 'grief']), '2 feelings.');
  Test.assertEquals(countFeelings('griefgriefgrief', ['anger', 'awe', 'joy', 'love', 'grief']), '1 feeling.');
  Test.assertEquals(countFeelings('abcdkasdfvkadf', ['desire', 'joy', 'shame', 'longing', 'fear']), '0 feelings.');
  
}