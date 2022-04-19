// Custom Array Filters : "https://www.codewars.com/kata/53fc954904a45eda6b00097f/solutions/javascript/me/best_practice"


Array.prototype.even = function(){
    return this.filter( num => num % 2 === 0).filter(Number.isInteger);
    }
    Array.prototype.odd = function(){
    return this.filter( num => num % 2 !== 0).filter(Number.isInteger);
    }
    Array.prototype.under = function(x){
    return this.filter( num => num < x).filter(Number.isInteger);
    }
    Array.prototype.over = function(x){
    return this.filter( num => num > x).filter(Number.isInteger);
    }
    Array.prototype.inRange = function(min,max){
    return this.filter( num => num <= max && num >= min).filter(Number.isInteger);
    }

    // tests

//     Test.assertSimilar([1,2,3,4,5].even(),[2,4])
// Test.assertSimilar([1,2,3,4,5].odd() ,[1,3,5])
// Test.assertSimilar([1,2,3,4,5].under(4),[1,2,3])
// Test.assertSimilar([1,2,3,4,5].over(4) ,[5])
// Test.assertSimilar([1,2,3,4,5].inRange(1,3),[1,2,3])

// Test.assertSimilar([1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30), [18, 20, 22, 30])
// Test.assertSimilar(["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even(),[300, 122])
