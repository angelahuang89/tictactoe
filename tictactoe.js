const prompt = require('prompt');

prompt.start();

console.log('Welcome to Tic Tac Toe');

// const makeBoard = () => {
  const board = [[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']];
  // return board;
// };

const schema = {
  properties: {
    input: {
      pattern: /['X', 'O']/,
      message: 'Only X or O',
      required: true
    },
    row: {
      pattern: /[1-3]/,
      message: 'Only 1, 2, or 3',
      required: true
    },
    column: {
      pattern: /[1-3]/,
      message: 'Only 1, 2, or 3',
      required: true
    }
  }
}

let lastInput = '';
let player = '';
let count = 0;

const renderBoard = () => {
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    console.log(row);
  }
};

const clearBoard = () => {
  board = [[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']];
};

const takeTurn = () => {
  prompt.get(schema, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      const { input, row, column } = result;
      board[row - 1][column - 1] = input;
      count++;
      renderBoard();
      if (lastInput === '') {
        lastInput = input;
        player = {input: input};
      }
      if (lastInput === 'X') {
        if (player.input !== 'X') {
          player = {input: input};
        }
      }
    }
  });
};

const checkForWin = () => {
  if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
    return true;
  }
  if (board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
    return true;
  }
  if (board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
    return true;
  }
  // if (board[0][0] === board[1][0] && board[1][0] === board[1][2]) {
  //   return true;
  // }
  // if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
  //   return true;
  // }
  // if (board[0][0] === board[1][0] && board[1][0] === board[1][2]) {
  //   return true;
  // }
  // if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
  //   return true;
  // }
  // if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
  //   return true;
  // }
  return false;
}

const playTTT = () => {
  // while (count < 9) {
    console.log(`${player.input}'s turn`);
    takeTurn();
  // }
};

playTTT();


