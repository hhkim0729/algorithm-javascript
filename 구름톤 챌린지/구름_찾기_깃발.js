const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
  if (input.length === Number(input[0].split(' ')[0]) + 1) {
    rl.close();
  }
});

const DIR = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

rl.on('close', () => {
  const [N, K] = input[0].split(' ').map(Number);
  const arr = [];
  for (let i = 1; i <= N; ++i) {
    arr.push(input[i].split(' '));
  }

  let result = 0;
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
      if (arr[i][j] === '1') continue;
      let cnt = 0;
      for (let k = 0; k < DIR.length; ++k) {
        const nextI = i + DIR[k][0];
        const nextJ = j + DIR[k][1];
        if (nextI < 0 || nextI >= N) continue;
        if (nextJ < 0 || nextJ >= N) continue;
        if (arr[nextI][nextJ] === '1') ++cnt;
      }
      if (cnt === K) ++result;
    }
  }
  console.log(result);
  process.exit();
});
