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
  let str = input[1];
  const set = new Set();
  for (let i = 0; i < str.length; ++i) {
    for (let j = 1; j <= str.length - 2; ++j) {
      set.add(str.slice(i, i + j));
    }
  }
  const arr = [...set];
  arr.sort();

  const obj = {};
  arr.forEach((e, i) => (obj[e] = i + 1));

  let result = 0;
  for (let i = 1; i < str.length; ++i) {
    for (let j = i + 1; j < str.length; ++j) {
      let tmp = obj[str.slice(0, i)];
      tmp += obj[str.slice(i, j)];
      tmp += obj[str.slice(j)];
      result = Math.max(result, tmp);
    }
  }
  console.log(result);
  process.exit();
});
