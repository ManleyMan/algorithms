// Filter unused digits : "https://www.codewars.com/kata/55de6173a8fbe814ee000061/train/javascript"

function unusedDigits(...arr){
    let arrStr = arr.join('')
    let digits = [0,1,2,3,4,5,6,7,8,9];
    return digits.filter(num => !arrStr.includes(num)).join('');   
    }


    // tests 

    // describe('tests suite', () => {
    //     it("example tests", () => {
    //       assert.strictEqual(unusedDigits(12, 34, 56, 78), "09")
    //       assert.strictEqual(unusedDigits(2015, 8, 26), "3479")
    //     });