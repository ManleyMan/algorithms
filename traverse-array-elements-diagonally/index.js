// Traverse array elements diagonally : "https://www.codewars.com/kata/5968fb556875980bd900000f/train/javascript"

function diagonal(arr) {
 
  let result = [];
  let yLength =arr.length;
  let xLength = arr[0].length;
  var maxLength = Math.max(xLength,yLength);
    for( let i = 0; i <= 2 * (maxLength - 1); i++){
   for ( let j= yLength -1; j >= 0; j--){
    var x = i - j
    if(x >= 0 && x < xLength){
      result.push(arr[j][x])
    }
   }
  }
      if( result.length > 0){
        return result.reverse()
      }
}





/*
console.log(diagonal([[7]]), [7], "Oops! Wrong");
console.log(diagonal([[4, 5, 7],[3, 9, 1],[7, 6, 2]]), [2, 1, 6, 7, 9, 7, 5, 3, 4], "Oops! Wrong");
*/