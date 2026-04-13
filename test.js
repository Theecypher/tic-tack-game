function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => board;

  const placeToken = (row, column, player) => {
    if (board[row][column].getValue() !== 0) return false;

    board[row][column].addToken(player);
    return true;
  };

  const printBoard = () => {
    const b = board.map((row) => row.map((cell) => cell.getValue()));
    console.log(b);
  };

  const checkWinner = () => {
    const b = board.map((row) => row.map((cell) => cell.getValue()));

    // rows
    for (let i = 0; i < 3; i++) {
      if (b[i][0] && b[i][0] === b[i][1] && b[i][1] === b[i][2]) {
        return b[i][0];
      }
    }

    // columns
    for (let i = 0; i < 3; i++) {
      if (b[0][i] && b[0][i] === b[1][i] && b[1][i] === b[2][i]) {
        return b[0][i];
      }
    }

    // diagonals
    if (b[0][0] && b[0][0] === b[1][1] && b[1][1] === b[2][2]) return b[0][0];
    if (b[0][2] && b[0][2] === b[1][1] && b[1][1] === b[2][0]) return b[0][2];

    return null;
  };

  return { getBoard, placeToken, printBoard, checkWinner };
}

function Cell() {
  let value = 0;

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addToken,
    getValue,
  };
}

// function GameController(playerOneName = "X", playerTwoName = "O") {
//   const board = Gameboard();

//   const players = [
//     { name: playerOneName, token: "X" },
//     { name: playerTwoName, token: "O" },
//   ];

//   let activePlayer = players[0];

//   const switchPlayerTurn = () => {
//     activePlayer = activePlayer === players[0] ? players[1] : players[0];
//   };

//   const getActivePlayer = () => activePlayer;

//   const playRound = (row, column) => {
//     const success = board.placeToken(row, column, activePlayer.token);

//     if (!success) {
//       console.log("Invalid move!");
//       return;
//     }

//     const winner = board.checkWinner();

//     if (winner) {
//       board.printBoard();
//       console.log(`${activePlayer.name} wins!`);
//       return;
//     }

//     switchPlayerTurn();
//     board.printBoard();
//     console.log(`${activePlayer.name}'s turn`);
//   };

//   board.printBoard();

//   return {
//     playRound,
//     getActivePlayer,
//   };
// }


function GameController() {
  const gameboard = Gameboard();

  const players = [
    { name: "Player 1", mark: "X" },
    { name: "Player 2", mark: "O" },
  ];

  let activePlayerIndex = 0;
  let gameOver = false;

  const switchPlayerTurn = () => {
    activePlayerIndex = activePlayerIndex === 0 ? 1 : 0;
  };

  const playRound = (row, col) => {
    if (gameOver) {
      console.log("Game over");
      return;
    }

    const player = players[activePlayerIndex];

    const success = gameboard.placeToken(row, col, player.mark);

    if (!success) {
      console.log("Invalid move");
      return;
    }

    const result = gameboard.checkWinner();

    if (result.winner) {
      console.log(`${player.name} wins`);
      gameOver = true;
      return;
    }

    if (result.isDraw) {
      console.log("It's a draw!");
      gameOver = true;
      return;
    }

    switchPlayerTurn();
  };

  const getBoard = () => gameboard.getBoard();
  const getCurrentPlayer = () => players[activePlayerIndex];

  return {
    playRound,
    getBoard,
    getCurrentPlayer,
  };
}






























function checkWinner(board) {
  const b = board;
  let player

  for (let i = 0; i < 3; i++) {
    if (b[i][0] !== 0 && b[i][0] === b[i][1] && b[i][1] === b[i][2]) {
    return b[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (b[0][i] !== 0 && b[0][i] === b[1][i] && b[1][i] === b[2][i]) {
      return  b[0][i];
    }
  }

  // digonal
  if (b[0][0] !== 0 && b[0][0] === b[1][1] && b[1][1] === b[2][2]) {
    return b[0][0];
  }

  if (b[0][2] !== 0 && b[0][2] === b[1][1] && b[1][1] === b[2][0]) {
    return b[0][2];
  }
}

console.log(
  checkWinner([
    ["X", "X", "X"],
    [0, 0, 0],
    [0, 0, 0],
  ]),
);