// Sum two arrays :" https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6/train/javascript "


function addArrays(array1, array2){
    //console.log (array1 ,array2)
      if(array1.length == 0 && array2.length == 0){
        return [];
      }
      if(array1.length == 0){
        return array2;
      }
      if(array2.length == 0){
        return array1;
      }
    let arrayToNumber1 = parseInt(array1.join(''));
    let arrayToNumber2 = parseInt(array2.join(''));
    let sum = arrayToNumber1 + arrayToNumber2;
    let sumStr = sum.toString();
    let sumArr = sumStr.split('');
      console.log(sumArr)
    let result = sumArr.map(num => {
      Math.abs(array2[0]);
      parseInt(num)
    })
    console.log(result)
    }


// Tests

Test.assertDeepEquals(addArrays([6,7], [6,7]), [ 1, 3, 4 ])

