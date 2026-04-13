// const board = [
//   ["X", "O", "O"],
//   ["X", "X", "O"],
//   ["O", "X", "X"],
// ];

//   const patterns = [
//     [[0,0],[0,1],[0,2]],
//     [[1,0],[1,1],[1,2]],
//     [[2,0],[2,1],[2,2]],
//     [[0,0],[1,0],[2,0]],
//     [[0,1],[1,1],[2,1]],
//     [[0,2],[1,2],[2,2]],
//     [[0,0],[1,1],[2,2]],
//     [[0,2],[1,1],[2,0]],
//   ];

function checkWinner(board) {
  const n = board.length;
  const patterns = [];

  for (let r = 0; r < n; r++) {
    const row = [];
    for (let c = 0; c < n; c++) {
      row.push([r, c]);
    }
    patterns.push(row);
  }

  for (let c = 0; c < n; c++) {
    const column = [];
    for (let r = 0; r < n; r++) {
      column.push([c, r]);
    }
    patterns.push(column);
  }

  const diag1 = [];
  const diag2 = [];

  for (let i = 0; i < n; i++) {
    diag1.push([i, i]);
    diag2.push([i, n - 1 - i]);
  }

  patterns.push(diag1, diag2);

  for (let pattern of patterns) {
    const values = pattern.map(([r, c]) => board[r][c]);

    if (values[0] !== 0 && values.every((v) => v === values[0])) {
      return {
        winner: values[0],
        pattern,
        isDraw: false,
      };
    }
  }

  return null;
}

// console.log(
//   checkWinner([
//     ["X", "X", "X"],
//     [0, 0, 0],
//     [0, 0, 0],
//   ]),
// );

// console.log(
//   checkWinner([
//     ["X", 0, 0],
//     ["X", 0, 0],
//     ["X", 0, 0],
//   ]),
// ); // column win

// console.log(
//   checkWinner([
//     ["X", 0, 0],
//     [0, "X", 0],
//     [0, 0, "X"],
//   ]),
// ); // diagonal win

console.log(
  checkWinner([
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "O"],
  ]),
); // no winner

console.log(
  checkWinner([
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "O"],
  ]),
); // should be "draw"

console.log(
  checkWinner([
    ["X", "O", "O"],
    ["X", "O", "O"],
    ["X", "X", "X"],
  ]),
);

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
    return true;
  };

  const printBoard = () => {
    console.log(board);
  };

  const checkWinner = () => {
    const n = board.length;
    const patterns = [];

    // rows
    for (let r = 0; r < n; r++) {
      const row = [];
      for (let c = 0; c < n; c++) {
        row.push([r, c]);
      }
      patterns.push(row);
    }

    // columns (FIXED: r,c not swapped)
    for (let c = 0; c < n; c++) {
      const col = [];
      for (let r = 0; r < n; r++) {
        col.push([r, c]); // ✅ FIX
      }
      patterns.push(col);
    }

    // diagonals
    const diag1 = [];
    const diag2 = [];

    for (let i = 0; i < n; i++) {
      diag1.push([i, i]);
      diag2.push([i, n - 1 - i]);
    }

    patterns.push(diag1, diag2);

    for (let pattern of patterns) {
      const values = pattern.map(([r, c]) => board[r][c]);

      if (values[0] !== 0 && values.every((v) => v === values[0])) {
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

  return { getBoard, placeToken, printBoard, checkWinner };
}

const game = Gameboard();

game.placeToken(0, 0, "X");
game.placeToken(1, 0, "X");
game.placeToken(2, 0, "X");

game.printBoard();

console.log(game.checkWinner());
