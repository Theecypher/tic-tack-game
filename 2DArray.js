let MathScore = [
  ["John Doe", 20, 60, "A"],
  ["Jane Doe", 10, 52, "B"],
  ["Petr Chess", 5, 24, "F"],
  ["Ling Jess", 28, 43, "A"],
  ["Ben Liard", 16, 51, "B"],
];

console.table(MathScore);

console.log(MathScore[0][0]); // returns 'John Doe'
console.log(
  MathScore[MathScore.length - 1][MathScore[MathScore.length - 1].length - 1],
);

let numberArr = [
  [10, 20, 60],
  [8, 10, 52],
  [15, 5, 24],
  [26, 28, 43],
  [12, 16, 51],
];

var sum = 0;
numberArr.forEach((row) => {
  row.forEach((element) => {
    sum += element;
  });
});

console.log("The sum of all elements in the array is:" + sum);







// function Cell() {
//   let value = 0;

//   const addToken = (player) => {
//     value = player;
//   };

//   const getValue = () => value;

//   return {
//     addToken,
//     getValue,
//   };
// }

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

// const game = GameController();

// game.playRound(0, 2); // X
// game.playRound(1, 0); // O
// game.playRound(0, 1); // X
// game.playRound(1, 1); // O
// game.playRound(0, 0); // X wins





