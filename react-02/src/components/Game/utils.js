
export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


// // //This is the main AI function which selects the first position that
// // //provides a winning result (or tie if no win possible)

// function findAiMove(board) {
//   var bestMoveScore = 100;
//   let move = null;
//   //Test Every Possible Move if the game is not already over.
//   if(winner(board, 'x') || winner(board, 'o' || tie(board))) {
//     return null;
//   }
//   for(var i = 0; i < board.length; i++){
//     let newBoard = validMove(i, minPlayer, board);
//     //If validMove returned a valid game board
//     if(newBoard) {
//       var moveScore = maxScore(newBoard);
//       if (moveScore < bestMoveScore) {
//         bestMoveScore = moveScore;
//         move = i;
//       }
//     }
//   }
//   return move;
// }

// function minScore(board) {
//   if (winner(board, 'x')) {
//     return 10;
//   } else if (winner(board, 'o')) {
//     return -10;
//   } else if (tie(board)) {
//     return 0;
//   } else {
//     var bestMoveValue = 100;
//     let move = 0;
//     for (var i = 0; i < board.length; i++) {
//       var newBoard = validMove(i, minPlayer, board);
//       if (newBoard) {
//         var predictedMoveValue = maxScore(newBoard);
//         if (predictedMoveValue < bestMoveValue) {
//           bestMoveValue = predictedMoveValue;
//           move = i;
//         }
//       }
//     }
//     //console.log("Best Move Value(minScore):", bestMoveValue);
//     return bestMoveValue;
//   }
// }

// function maxScore(board) {
//    if(winner(board, 'X')) {
//     return 10;
//   } else if(winner(board, 'O')) {
//     return -10;
//   } else if(tie(board)) {
//     return 0;
//   } else {
//     var bestMoveValue = -100;
//     let move = 0;
//     for (var i = 0; i < board.length; i++) {
//       var newBoard = validMove(i, maxPlayer, board);
//       if (newBoard) {
//         var predictedMoveValue = minScore(newBoard);
//         if (predictedMoveValue > bestMoveValue) {
//           bestMoveValue = predictedMoveValue;
//           move = i;
//         }
//       }
//     }
//     return bestMoveValue;
//   }
// }
