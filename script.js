// Write out the values
// loop through the array
// get the board
// place the token
// print Board
// checkWinner

// function Gameboard() {
//   const rows = 3;
//   const columns = 3;
//   const board = [
//     ["", "", ""],
//     ["", "", ""],
//     ["", "", ""],
//   ];

//   for (let i = 0; i < columns; i++) {
//     board[i] = [];
//     for (let j = 0; j < rows; j++) {
//       // board[i].push(Cell());
//       console.log(board[j][i]);
//     }
//   }

//   const getBoard = () => board;

//   const placeToken = (row, column, player) => {
//     if (board[row][column] !== 0) return false;

//     board[row][column] = player;
//     return true;
//   };

//   const printBoard = () => {
//     const b = board.map((row) => row.map((cell) => cell.getValue()));

//     console.log(b);
//   };

//   const checkWinner = (board) => {
//     const n = board.length;
//     const patterns = [];

//     for (let r = 0; r < n; r++) {
//       const row = [];
//       for (let c = 0; c < n; c++) {
//         row.push([r, c]);
//       }
//       patterns.push(row);
//     }

//     for (let c = 0; c < n; c++) {
//       const column = [];
//       for (let r = 0; r < n; r++) {
//         column.push([c, r]);
//       }
//       patterns.push(column);
//     }

//     const diag1 = [];
//     const diag2 = [];

//     for (let i = 0; i < n; i++) {
//       diag1.push([i, i]);
//       diag2.push([i, n - 1 - i]);
//     }

//     patterns.push(diag1, diag2);

//     for (let patterns of patterns) {
//       const values = patterns.map(([r, c]) => board[r][c]);

//       if (values[0] !== 0 && values.every((v) => v === values[0])) {
//         return {
//           winner: values[0],
//           pattern,
//           isDraw: false,
//         };
//       }
//     }

//     return null;
//   };

//   return { getBoard, placeToken, printBoard, checkWinner };
// }

// const game = Gameboard([
//   ["X", 0, 0],
//   ["X", 0, 0],
//   ["X", 0, 0],
// ]);

function Gameboard() {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const getBoard = () => board;

  const placeToken = (row, col, player) => {
    if (board[row][col] !== 0) return false;

    board[row][col] = player;
    console.log(player);

    return true;
  };

  const printBoard = () => {
    console.log(board);
  };

  const checkWinner = () => {
    const n = board.length;
    const patterns = [];

    console.log("checking winner!");

    // rows
    for (let r = 0; r < n; r++) {
      const row = [];
      for (let c = 0; c < n; c++) {
        row.push([r, c]);
      }
      patterns.push(row);
    }

    // col
    for (let c = 0; c < n; c++) {
      let col = [];
      for (let r = 0; r < n; r++) {
        col.push([r, c]);
      }
      patterns.push(col);
    }

    const diag1 = [];
    const diag2 = [];

    for (let i = 0; i < n; i++) {
      diag1.push([i, 1]);
      diag2.push([i, n - 1 - i]);
    }

    patterns.push(diag1, diag2);

    for (let pattern of patterns) {
      const values = pattern.map(([r, c]) => board[r][c]);

      if (values[0] !== 0 && values.every((v) => v === values[0])) {
        console.log(values[0]);

        return {
          winner: values[0],
          pattern,
          isDraw: false,
        };
      }
    }

    return {
      winner: null,
      pattern: null,
      isDraw: !board.flat().includes(0),
    };
  };

  return { placeToken, getBoard, printBoard, checkWinner };
}

// const game = Gameboard();

// game.placeToken(0, 0, "X");
// game.placeToken(1, 0, "X");
// game.placeToken(2, 0, "X");
// // game.placeToken(0, 0, "0");

// game.printBoard();
// console.log(game.checkWinner());

// GameController =
// - manages players (X / O)
// - tracks whose turn it is
// - calls Gameboard.placeToken()
// - calls Gameboard.checkWinner()
// - decides when game ends
// currentPlayer
// switch turns
// playRound(row, col)

function GameController() {
  const gameboard = Gameboard();

  const players = [
    { name: "Player 1", mark: "X" },
    { name: "Player 2", mark: "O" },
  ];

  let activePlayerIndex = 0;

  let gameOver = false;

  const switchPlayer = () => {
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
      console.log("Its a draw!");
      gameOver = true;
    }

    switchPlayer();
  };

  const getBoard = () => gameboard.getBoard();
  const getActivePlayer = () => players[activePlayerIndex];

  return {
    playRound,
    getBoard,
    getActivePlayer,
  };
}

const game = GameController();

game.playRound(0, 0); // X
game.playRound(0, 1); // O
game.playRound(1, 1); // X
game.playRound(0, 2); // O
game.playRound(2, 2); // X → WIN

function ScreenController() {
  const game = GameController();
  const activePlayerDiv = document.querySelector(".active-player");
  const boardDiv = document.querySelector(".board");

  const updateScreen = () => {
    boardDiv.textContent = "";

    const board = game.getBoard();
    const activePlayer = game.getActivePlayer();

    activePlayerDiv.textContent = `${activePlayer.mark}'s turn.....`;

    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = colIndex;
        cellButton.textContent = cell;
        boardDiv.appendChild(cellButton);
      });
    });
  };

  function clickHandlerBoard(e) {
    if (!e.target.classList.contains("cell")) return;

    const row = e.target.dataset.row;
    const column = e.target.dataset.column;

    game.playRound(Number(row), Number(column));
    updateScreen();
  }

  boardDiv.addEventListener("click", clickHandlerBoard);
  // const cell = document.querySelectorAll(".cell");

  // cell.forEach((cell, index) => {
  //   cell.addEventListener("click", (e) => {
  //     console.log(player.mark);
  //   });
  // });

  updateScreen();
}

ScreenController();
