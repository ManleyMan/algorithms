// Concatenate sequential page numbers in an array : "https://www.codewars.com/kata/57d83dfc950d842dcb00005b/train/javascript"

function paginate(arr) {
    //given an array of numbers
    //return a string in ascending order amd seperated by commas of each pg in the array
    //with sequential pages represented with a hyphen
    //use sort() method to sort array in ascending order
    //use for loop to iterate through array
    //if the number in the index is equal to the number in the next index plus one
    //then push those numbers into new array the represents sequential order
    //try mapping through array and pushing values that fit the condition into new array
    //turn final arrays into strings and then concatenate them together
    let newArr = [];
    arr.sort(function(a, b){return a-b});
    for(let i=0; i < arr.length; i++){
      let currentIndex = arr[i];
      let nextIndex = currentIndex;
       while(arr[i] + 1 == arr[i + 1]){
         nextIndex = arr[i+1];
         i++;
        }
        newArr.push(currentIndex == nextIndex ? currentIndex + "" : currentIndex + "-" + nextIndex )
      }
      let final = newArr.join(", ");
      console.log("final", final)
      return final;
  }



  
      Test.assertEquals(paginate([1,3,4,5,7,9,10]), '1, 3-5, 7, 9-10');
      Test.assertEquals(paginate([10,12,13,14,15,16,17,20,22,23,27]), '10, 12-17, 20, 22-23, 27');
    
      it('should be ordered', function() 
      Test.assertEquals(paginate([9,1,8,4,7,3,5]), '1, 3-5, 7-9');
      Test.assertEquals(paginate([4, 20, 3, 19, 2, 23, 1]), '1-4, 19-20, 23');
  