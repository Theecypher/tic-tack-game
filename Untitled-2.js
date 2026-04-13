/ function Gameboard() {
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
