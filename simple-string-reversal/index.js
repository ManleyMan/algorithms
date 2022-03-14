// simple string reversal 2 - "https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac/train/javascript"

const solve = (st,a,b) => st.slice(0,a) +st.split('').slice(a,b+1).reverse().join("")+ st.slice(b+1)

   // Sample tests
  {
   console.log(solve("codewars",1,5))  //,"cawedors");
   console.log(solve("codingIsFun",2,100)) //,"conuFsIgnid");
   console.log(solve("FunctionalProgramming", 2,15)) //,"FuargorPlanoitcnmming");
   console.log(solve("abcdefghijklmnopqrstuvwxyz",0,20)) //,"utsrqponmlkjihgfedcbavwxyz");
   console.log(solve("abcdefghijklmnopqrstuvwxyz",5,20)) //,"abcdeutsrqponmlkjihgfvwxyz");
  }