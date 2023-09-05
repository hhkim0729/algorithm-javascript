const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N, M;
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
  [N, M] = input[0];
  if (input.length === M + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  const obj = {};
  for (let i = 1; i <= M; ++i) {
    const [a, b] = input[i];
    if (!obj[a]) obj[a] = [];
    if (!obj[b]) obj[b] = [];
    obj[a].push(b);
    obj[b].push(a);
  }

  const visited = Array(N + 1).fill(0);
  const lengths = {};
  let num = 0;
  for (let i = 1; i <= N; ++i) {
    if (!obj[i] || visited[i]) continue;
    const q = [i];
    ++num;
    while (q.length) {
      const curr = q.pop();
      visited[curr] = num;
      if (!obj[curr]) continue;
      for (const next of obj[curr]) {
        if (visited[next]) continue;
        q.push(next);
        lengths[num] = (lengths[num] || 0) + 1;
      }
    }
  }

  const result = Array(num)
    .fill(0)
    .map((_, i) => [[i + 1], []]);
  for (let i = 1; i < visited.length; ++i) {
    if (visited[i] === 0) continue;
    result[visited[i] - 1][1].push(i);
  }
  const getDensity = ([num, arr]) => lengths[num] / arr.length;
  result.sort(
    (a, b) =>
      getDensity(b) - getDensity(a) ||
      a[1].length - b[1].length ||
      a[1][0] - b[1][0]
  );
  console.log(result[0][1].join(' '));
});
