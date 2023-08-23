// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let input;
  for await (const line of rl) {
    input = Number(line.trim());
    rl.close();
  }

  let result = 0;
  for (let i = 2; i > 0; --i) {
    result += Math.trunc(input / (i * 7));
    input %= i * 7;
  }
  console.log(result + input);
  process.exit();
})();
