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
  const N = Number(input[0]);
  const nums = input[1].split(' ').map(Number);
  const [big, small] = [Math.max(...nums), Math.min(...nums)];
  let result = -1;
  for (let i = Math.trunc(N / big); i >= 0; --i) {
    const rest = N - big * i;
    if (rest % small === 0) {
      result = i + rest / small;
      break;
    }
  }
  console.log(result);
  process.exit();
});
