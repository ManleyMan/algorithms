// Training JS #37: Unlock new weapon---RegExp Object ; "https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript"
function countAnimals(animals,count){
let result = []
  for(var word of count){
    var reg = new RegExp(word)
    var match = (animals.match(new RegExp(word,"g"))||[]).length
  result.push(match)
 }
return result
}

// tests

// Test.assertSimilar(countAnimals("dog,cat",["dog","cat"]) , [1,1]);
// Test.assertSimilar(countAnimals("dog,cat",["dog","cat","pig"]) , [1,1,0]);
// Test.assertSimilar(countAnimals("dog,dog,cat",["dog","cat"]) , [2,1]);
// Test.assertSimilar(countAnimals("dog,dog,cat",["pig","cow"]) , [0,0]);

