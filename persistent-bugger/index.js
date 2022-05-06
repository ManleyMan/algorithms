// Persistent Bugger. : "https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript"

function persistence(num) {
    let numArr = num.toString().split('')
    let count = 0;
    while(numArr.length > 1 ){
    let newNum = numArr.reduce((a,b) => a*b)
    numArr = newNum.toString().split('')
    count++
    }
    return count
    }
    
    // tests 

    // assert.strictEqual(persistence(39),3);
    // assert.strictEqual(persistence(4),0);
    // assert.strictEqual(persistence(25),2);
    //  assert.strictEqual(persistence(999),4);