function solution(x, y, n) {
  if (x === y) return 0;
  const dp = {};
  dp[x] = 0;
  let q = [x];
  while (q.length) {
    const tmp = [];
    for (const curr of q) {
      for (const next of [curr + n, curr * 2, curr * 3]) {
        if (next > y || dp[next]) continue;
        if (next === y) return dp[curr] + 1;
        dp[next] = dp[curr] + 1;
        q.push(next);
      }
    }
    q = tmp;
  }
  return -1;
}
