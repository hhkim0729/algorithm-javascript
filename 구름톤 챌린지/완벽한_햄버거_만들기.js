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
  const items = input[1].split(' ').map(Number);
  const max = Math.max(...items);
  let prev = 0;
  let isIncrease = true;
  let result = 0;
  for (const item of items) {
    if ((isIncrease && item < prev) || (!isIncrease && item > prev)) {
      result = 0;
      break;
    }
    result += item;
    prev = item;
    if (item === max) isIncrease = false;
  }
  console.log(result);
  process.exit();
});
