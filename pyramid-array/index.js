// Pyramid Array : "https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript"

function pyramid(n) {  
    let array = []; 
    for(let i = 1; i <= n; i++){
      array.push(Array(i).fill(1))
      }return array
  }  


   console.log("Testing for 0", () => assert.deepEqual(pyramid(0), []));
   console.log("Testing for 1", () => assert.deepEqual(pyramid(1), [[1]]));
   console.log("Testing for 2", () => assert.deepEqual(pyramid(2), [[1], [1, 1]]));
   console.log("Testing for 3", () => assert.deepEqual(pyramid(3), [[1], [1, 1], [1, 1, 1]]));
