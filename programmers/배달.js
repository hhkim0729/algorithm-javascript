function solution(N, road, K) {
  const g = Array.from(Array(N + 1), () => []);
  const arr = Array(N + 1).fill(Infinity);

  for (const [a, b, c] of road) {
    g[a].push({ to: b, cost: c });
    g[b].push({ to: a, cost: c });
  }

  const q = [{ to: 1, cost: 0 }];
  arr[1] = 0;
  while (q.length) {
    const { to, cost } = q.pop();
    for (const next of g[to]) {
      const tmp = arr[to] + next.cost;
      if (arr[next.to] < tmp) continue;
      arr[next.to] = tmp;
      q.push(next);
    }
  }

  return arr.filter((c) => c <= K).length;
}
