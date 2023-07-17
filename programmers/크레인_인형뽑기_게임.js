function solution(board, moves) {
  const basket = [];
  return moves.reduce((result, move) => {
    let doll;
    for (let i = 0; i < board.length; ++i) {
      if (board[i][move - 1] !== 0) {
        doll = board[i][move - 1];
        board[i][move - 1] = 0;
        break;
      }
    }
    if (!doll) return result;
    if (doll === basket.at(-1)) {
      basket.pop();
      return result + 2;
    }
    basket.push(doll);
    return result;
  }, 0);
}
