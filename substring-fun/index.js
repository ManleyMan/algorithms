// Substring fun : "https://www.codewars.com/kata/565b112d09c1adfdd500019c/train/javascript"

function nthChar(words){
    let newWord = []
    let i = 0;
    let eachWord =  words.map(word => {
        for(i; i < word.length; i++){
          newWord.push(word[i])
         word++
          }
      })
    
     return newWord.join('')
    }


     
        console.log(nthChar([]),'');
        console.log(nthChar(['yoda', 'best', 'has']), 'yes');
         