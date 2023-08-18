const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
  if (input.length === 2) {
    rl.close();
  }
});

rl.on('close', () => {
  const [N, K] = input[0].split(' ').map(Number);
  const arr = input[1]
    .split(' ')
    .map((e) => [
      Number(e),
      [...Number(e).toString(2)].filter((c) => c === '1').length,
    ]);
  arr.sort((a, b) => b[1] - a[1] || b[0] - a[0]);
  console.log(arr[K - 1][0]);
  process.exit();
});
