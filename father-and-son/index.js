// Coding 3min: Father and Son : "https://www.codewars.com/kata/56fe9a0c11086cd842000008/solutions/javascript/me/best_practice"

function sc(s){
    //Good Lucksd
    //we are given a string
    //we want to check if a letter is matched with the same letter, if it does not remove the letter
    //output: return the string of matched characters
    
    
    let strArr = s.split('').filter(letter => {
    if(s.includes(letter.toUpperCase()) && s.includes(letter.toLowerCase())){
    return true
    }
    });
    
    console.log(strArr);
    return strArr.join('')
    }

    //tests

//     Test.assertSimilar(sc("Aab"), "Aa");  
// Test.assertSimilar(sc("AabBc"), "AabB"); 
// Test.assertSimilar(sc("AaaaAaab"), "AaaaAaa");  
// Test.assertSimilar(sc("aAAAaAAb"), "aAAAaAA"); 
// Test.assertSimilar(sc("SONson"), "SONson");  
// Test.assertSimilar(sc("FfAaTtHhEeRr"), "FfAaTtHhEeRr");  
// Test.assertSimilar(sc("SONsonfather"), "SONson");  
// Test.assertSimilar(sc("sonfather"), ""); 
// Test.assertSimilar(sc("DONKEYmonkey"), "ONKEYonkey"); 
// Test.assertSimilar(sc("monkeyDONKEY"), "onkeyONKEY"); 
// Test.assertSimilar(sc("BANAna"), "ANAna"); 
//   });