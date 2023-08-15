const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === Number(input[0]) + 2) {
    rl.close();
  }
});

rl.on('close', () => {
  const N = Number(input[0]);
  const [T, M] = input[1].split(' ').map(Number);
  let total = T * 60 + M;
  for (let i = 2; i < input.length; ++i) {
    total += Number(input[i]);
  }
  console.log(Math.trunc((total / 60) % 24), total % 60);
});
