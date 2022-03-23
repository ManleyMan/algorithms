// draw me a chessboard : "https://www.codewars.com/kata/56242b89689c35449b000059/solutions/javascript/me/best_practice"

function chessBoard(rows, columns) {
    let board = [];
    console.log(rows);
    for(let i=0; i<rows; i++){
      board.push([]);
      for(let j=0; j<columns; j++){
        if((i%2 != 0 && j%2 == 0)|| (i%2 == 0 && j%2 != 0)){
          board[i].push('X');
        }else {
          board[i].push('O');
        }
      }
    }
    return board;
  }

/*
    it('should have correct number of rows and columns', function() {
      for (let i=0; i<4; i++) {
        let rows = Math.floor(Math.random() * 20 + 1);
        let columns = Math.floor(Math.random() * 20 + 1);
        
        Test.assertEquals(chessBoard(rows, columns).length, rows,
          'make sure the board has the correct number of rows');
        Test.assertEquals(chessBoard(rows, columns)[0].length, columns,
          'make sure the board has the correct number of columns');
      }
    });
      
    it("O's and X's should alternate correctly", function() {
       
      for (let i=0; i<3; i++) {
  
        let rows = Math.floor(Math.random() * 10 + 2);
        let columns = Math.floor(Math.random() * 10 + 2);
        console.log(rows + " - rows, ",columns + " - columns");
        for (let j=0; j<rows; j+=2) {
          Test.assertEquals(chessBoard(rows, columns)[j][0], 'O');
          if (j+1 < rows) Test.assertEquals(chessBoard(rows, columns)[j+1][0], 'X');
        }
      }
    });
*/
