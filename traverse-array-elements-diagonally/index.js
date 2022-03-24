// Traverse array elements diagonally : "https://www.codewars.com/kata/5968fb556875980bd900000f/train/javascript"

function diagonal(arr) {
    // given a matrix (n x n array) of numbers
    // create an empty array to return values
    // for loop thru the main array to access the nested artraverserays
    // nested for loop to iterate thru the sub arrays
    // if rows + columns of index are equal then push to array
    // 
    // return an array with elements in diagonal order from bottom right to top left
      
    let result = []
    let yLength =arr.length
    let xLength = arr[0].length
    
      for( let i = 0; i < arr.length; i++){
        let row = arr[i];
     for ( let j=0; j < row.length; j++){
      
     }
    }
}





/*
console.log(diagonal([[7]]), [7], "Oops! Wrong");
console.log(diagonal([[4, 5, 7],[3, 9, 1],[7, 6, 2]]), [2, 1, 6, 7, 9, 7, 5, 3, 4], "Oops! Wrong");
*/