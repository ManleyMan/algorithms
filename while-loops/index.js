//  Training JS #9: loop statement --while and do..while : "https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript "

function padIt(str,n){
    let count = 0;
    while (count < n) {
    if(count %2 == 0) {
    str = '*' + str;
    count++;
    } else {
    str = str + '*';
    count++;
    }} 
      return str
    }

    // //tests
    // it("test", () => {
    //     Test.assertSimilar(padIt("a",1),"*a");
    //     Test.assertSimilar(padIt("a",2),"*a*");
    //     Test.assertSimilar(padIt("a",3),"**a*");
    //     Test.assertSimilar(padIt("a",4),"**a**");
    //     Test.assertSimilar(padIt("a",5),"***a**");
    //   });