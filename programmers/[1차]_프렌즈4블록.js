function solution(m, n, board) {
  board = board.map((s) => [...s]);
  const d = [
    [0, 1],
    [1, 1],
    [1, 0],
  ]; // 오른, 대각, 아래
  let result = 0;
  while (true) {
    for (let i = 0; i < m - 1; ++i) {
      for (let j = 0; j < n - 1; ++j) {
        const curr = board[i][j];
        if (!curr) continue;
        const arr = [[i, j]];
        for (let k = 0; k < 3; ++k) {
          const ny = i + d[k][0];
          const nx = j + d[k][1];
          if (!board[ny][nx]) break;
          if (curr.toLowerCase() !== board[ny][nx].toLowerCase()) break;
          arr.push([ny, nx]);
        }
        if (arr.length !== 4) continue;
        for (const [y, x] of arr) {
          board[y][x] = board[y][x].toLowerCase();
        }
      }
    }

    let tmp = 0;
    for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
        const curr = board[i][j];
        if (!curr) continue;
        if (curr === curr.toLowerCase()) {
          board[i][j] = null;
          ++tmp;
        }
      }
    }
    if (!tmp) break;
    result += tmp;

    for (let i = 0; i < m - 1; ++i) {
      for (let j = 0; j < n; ++j) {
        if (board[i][j] && board[i + 1][j] === null) {
          for (let k = i + 1; k > 0; --k) {
            [board[k][j], board[k - 1][j]] = [board[k - 1][j], board[k][j]];
          }
        }
      }
    }
  }

  return result;
}
