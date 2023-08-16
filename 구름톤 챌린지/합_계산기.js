const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
  if (input.length === Number(input[0]) + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  const T = Number(input[0]);
  let result = 0;
  for (let i = 1; i < input.length; ++i) {
    let [num1, op, num2] = input[i].split(' ');
    [num1, num2] = [Number(num1), Number(num2)];
    switch (op) {
      case '+':
        result += num1 + num2;
        break;
      case '-':
        result += num1 - num2;
        break;
      case '*':
        result += num1 * num2;
        break;
      case '/':
        result += Math.trunc(num1 / num2);
        break;
      default:
        throw new Error('유효하지 않은 연산자');
    }
  }
  console.log(result);
});
