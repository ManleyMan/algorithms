// Convert a linked list to a string : "https://www.codewars.com/kata/582c297e56373f0426000098/train/javascript"

function stringify(list) {
    //input : linked list
    // create empty array to hold node values
    // if list is null return null
    // use while loop to iterate thru the linked list
    // if list is not null
    // push node values into array
    // join the array down to string with " -> "
    // output : return that list in string form
    let arr = [];
      while( list ){
        arr.push(list.data)
        list = list.next
      }
      arr.push("null") 
      return arr.join(' -> ')  
    }

    //tests

    it("should pass the example tests as shown in the Description", () => {
        assert.strictEqual(stringify(new Node(1, new Node(2, new Node(3)))), "1 -> 2 -> 3 -> null");
        assert.strictEqual(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))), "0 -> 1 -> 4 -> 9 -> 16 -> null");
        assert.strictEqual(stringify(null), "null");
      });