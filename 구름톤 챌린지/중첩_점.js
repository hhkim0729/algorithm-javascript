const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let N, M;
const DIR = {
  U: { y: -1, x: 0, l: 'v' },
  D: { y: 1, x: 0, l: 'v' },
  L: { y: 0, x: -1, l: 'h' },
  R: { y: 0, x: 1, l: 'h' },
};

rl.on('line', (line) => {
  input.push(line.split(' '));
  [N, M] = input[0].map(Number);
  if (input.length === M + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  const arr = Array(N)
    .fill(0)
    .map((_) =>
      Array(N)
        .fill([])
        .map((_) => ({ h: 0, v: 0 }))
    );
  for (let i = 1; i <= M; ++i) {
    let [y, x, d] = input[i];
    [y, x] = [y, x].map((n) => Number(n) - 1);
    const dir = DIR[d];
    while (y >= 0 && y < N && x >= 0 && x < N) {
      arr[y][x][dir.l] += 1;
      y += dir.y;
      x += dir.x;
    }
  }

  let result = 0;
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
      result += arr[i][j].h * arr[i][j].v;
    }
  }

  console.log(result);
  process.exit();
});
