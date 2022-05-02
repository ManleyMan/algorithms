 // regex validation of 24 hours time : "https://www.codewars.com/kata/56a4a3d4043c316002000042/train/javascript"

 function validateTime(time) {
    let res =  /(^[01]?[\d]|2[0-3]):[0-5][\d]$/.test(time) 
   return res
   }

   // tests

//    assert.strictEqual(validateTime('01:00'), true);
//    assert.strictEqual(validateTime('1:00'), true);
//    assert.strictEqual(validateTime('1:00'), true);
//    assert.strictEqual(validateTime('00:00'), true);
//    assert.strictEqual(validateTime('13:1'), false);
//    assert.strictEqual(validateTime('12:60'), false);
//    assert.strictEqual(validateTime('12: 60'), false);
//    assert.strictEqual(validateTime('24:00'), false);
//    assert.strictEqual(validateTime('24o:00'), false);
//    assert.strictEqual(validateTime('24:000'), false);
//    assert.strictEqual(validateTime(''), false);
//    assert.strictEqual(validateTime('2400'), false);
//    assert.strictEqual(validateTime('foo12:00bar'), false);
//    assert.strictEqual(validateTime('010:00'), false);
//    assert.strictEqual(validateTime('1;00'), false);