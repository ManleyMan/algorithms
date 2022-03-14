// simple string reversal 2 - "https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac/train/javascript"

function solve(st,a,b){
    // split the string to the number of characters from a and b
     // use the reverse method on the characters 
     // then join them back to a string
     let stArr = st.split('')
     let splitArr = [];
    let newArr =  stArr.slice(a,b)
     console.log(newArr)
     let reversedArr = newArr.reverse()
     
    console.log(reversedArr)
     
     
     
   //   console.log(splitArr)
   //   let newStr = "";
   //   for(let i = a ; i <= b; i++){
   //      splitArr.push(st[i])
   //   }
   //   // console.log(splitArr);
   //   let reversedArr = splitArr.reverse();
   //   let resultArr = stArr.slice(1,b,"reversedArr")
     
   //  console.log(resultArr);
   }

   // Sample tests
  
   console.log(solve("codewars",1,5))  //,"cawedors");
   console.log(solve("codingIsFun",2,100)) //,"conuFsIgnid");
   console.log(solve("FunctionalProgramming", 2,15)) //,"FuargorPlanoitcnmming");
   console.log(solve("abcdefghijklmnopqrstuvwxyz",0,20)) //,"utsrqponmlkjihgfedcbavwxyz");
   console.log(solve("abcdefghijklmnopqrstuvwxyz",5,20)) //,"abcdeutsrqponmlkjihgfvwxyz");
    