function solution(board) {
  let result = 0;
  const [r, c] = [board.length, board[0].length];
  if (r < 2 || c < 2) return 1;

  for (let i = 1; i < r; ++i) {
    for (let j = 1; j < c; ++j) {
      if (board[i][j] === 0) continue;
      const cnt =
        Math.min(board[i - 1][j - 1], board[i][j - 1], board[i - 1][j]) + 1;
      board[i][j] = cnt;
      if (result < cnt) result = cnt;
    }
  }
  return result ** 2;
}
