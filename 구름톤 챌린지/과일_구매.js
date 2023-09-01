const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N, K;
rl.on('line', (line) => {
  input.push(line.trim());
  [N, K] = input[0].split(' ').map(Number);
  if (input.length === N + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  let fruits = [];
  for (let i = 1; i <= N; ++i) {
    fruits.push(input[i].split(' ').map(Number));
  }
  fruits = fruits.map(([p, c]) => [p, c / p]);
  fruits.sort((a, b) => b[1] - a[1]);

  let result = 0;
  for (const [p, c] of fruits) {
    const tmp = Math.min(K, p);
    K -= tmp;
    result += tmp * c;
    if (K === 0) break;
  }

  console.log(result);
  process.exit();
});
