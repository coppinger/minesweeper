document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {

  cells:
  [
    {
      row: 0,
      col: 1,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 0,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      hidden: true
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      hidden: true
    },
    {
      row: 0,
      col: 0,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 1,
      isMine: true,
      hidden: true
    },
    {
      row: 1,
      col: 1,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 2,
      isMine: false,
      hidden: true
    }
  ]
}

// Code I'm working on for the mine/board generation

// 1. Define a variable (cellsAmount) for how many cells should exist

var cellsAmount = 9;

// 2. Execute some code that amount of times which will add the cells, with setting a random amount two isMine = true

/* 


for (x = 0; x < cellsAmount; x++){

  var emptyCell = {
    row: 0,
    col: 0,
    isMine: false,
    hidden: true }

  board.cells.push(emptyCell);
} */

function startGame () {

  for (x = 0; x < board.cells.length; x++){
    board.cells[x].surroundingMines = countSurroundingMines(board.cells[x]);
  }

  document.addEventListener("click", checkForWin)

  document.addEventListener("contextmenu", checkForWin)

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {


  // 1. Define how many cells there are and save as a variable (cellCountTotal)



  for (x = 0; x < board.cells.length; x++){

    if (!((!board.cells[x]['isMine'] && !board.cells[x]['hidden']) || board.cells[x]['isMarked'])){
      return;
    }

  }
  lib.displayMessage('You win!');
  // 3. If the amount of currentTotal === cellCountTotal, win message, else return;

}

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {

  var surrounding = lib.getSurroundingCells(cell.row, cell.col);

  function trueMineCount(val){
    return val.isMine != false;
  }

  console.log(surrounding);

  var count = surrounding.filter(trueMineCount).length;

  return count;
}

// object (board) > property (cell) > array [0] > object {} > property (i.e. isMine:) > value (i.e. false)