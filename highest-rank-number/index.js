// Highest Rank Number in an Array : "https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript"

function highestRank(arr){
    let obj = {};
    arr.forEach(num =>obj[num] = obj[num] ? obj[num]+1 : 1)
    const max = Object.keys(obj).reduce(function(a, b) {return obj[a] > obj[b] ? a : b });
    return parseInt(max)
    }

    //tests

    it("should test", function() {
        var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
        assert.strictEqual( highestRank(arr), 12);
      });