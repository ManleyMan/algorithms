// Check by Queen : "https://www.codewars.com/kata/5a1cae0832b8b99e2900000c/train/javascript"

function check(board) {
    let queenI = '', queenJ = '', kingI = '', kingJ = ''; 
    for(let i = 0; i < board.length; i++){
      let row = board[i];
      for(let j = 0; j < row.length; j++){
        if(board[j][i] === 'q'){
          queenI = i;
          queenJ = j;
        }else if(board[j][i] === 'k'){
          kingI = i;
          kingJ = j;
        }
      }
    }
    if(queenI == kingI){
        return true
    }else if(queenJ == kingJ){
        return true;
    }else if(Math.abs(queenI-kingI) === Math.abs(queenJ-kingJ)){
        return true;
    }else{
        return false;
    }
  }

 console.log(typeof check(board1), "boolean", "boolean expected");
 console.log(check(board1), true, "check to the right should return true");
 console.log(check(board2), true, "check to the left should return true");
 console.log(check(board3), true, "check to the top should return true");
 console.log(check(board4), true, "check to the bottom should return true");
 console.log(check(board5), true, "check to the top left should return true");
 console.log(check(board6), true, "check to the top right should return true");
 console.log(check(board7), true, "check to the bottom left should return true");
 console.log(check(board8), true, "check to the bottom right should return true");
 console.log(check(board9), false, "Expect 'false' when king not in check");
