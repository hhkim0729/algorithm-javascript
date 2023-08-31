const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N, M, K;
rl.on('line', (line) => {
  input.push(line.trim());
  [N, M, K] = input[0].split(' ').map(Number);
  if (input.length === M + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  const visited = Array(N + 1).fill(false);
  const edges = [];
  for (let i = 1; i <= M; ++i) {
    edges.push(input[i].split(' ').map(Number));
  }
  const nodes = {};
  for (const [n1, n2] of edges) {
    nodes[n1] = nodes[n1] ? [...nodes[n1], n2] : [n2];
    nodes[n2] = nodes[n2] ? [...nodes[n2], n1] : [n1];
  }
  for (let i = 1; i <= N; ++i) {
    if (!nodes[i]) continue;
    nodes[i].sort((a, b) => a - b);
  }

  let curr = K;
  let count = 0;

  while (true) {
    ++count;
    visited[curr] = true;
    const prev = curr;
    if (!nodes[curr]) break;
    for (const node of nodes[curr]) {
      if (visited[node]) continue;
      curr = node;
      break;
    }
    if (prev === curr) break;
  }

  console.log(count, curr);
  process.exit();
});
