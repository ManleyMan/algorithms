// Training JS #38: Regular Expression--"^","$", "." and test() : "https://www.codewars.com/kata/573975d3ac3eec695b0013e0/solutions/javascript/me/best_practice"

function findSimilarity(str,word){
    var regstr = word[0]+word.slice(1,-1).replace(/./g,".")+word.slice(-1);                     
    return str.split(' ').filter(word => word.match(new RegExp("^"+regstr+"$"))).join(' ')  
    }

    // tests

    // Test.assertSimilar(findSimilarity("bag dog dig dot doog dogs","dog") , "dog dig");
    // Test.assertSimilar(findSimilarity("bag dog dig dot doog dogs","dig") , "dog dig");
    // Test.assertSimilar(findSimilarity("bag dog dig dot doog dogs","dot") , "dot");
    // Test.assertSimilar(findSimilarity("bag dog dig dot doog dogs","god") , "");
    // Test.assertSimilar(findSimilarity("vRllN QRo cUz gdI SImLC fyQhN Gzi PWzja SxTdC VlQ SdmKC ImF","SWyfC") , "SImLC SxTdC SdmKC");
    