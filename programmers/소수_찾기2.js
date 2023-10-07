function solution(numbers) {
  const set = new Set();
  const q = [];
  const visited = Array(numbers.length).fill(false);
  const dfs = (str) => {
    if (str) q.push(Number(str));
    if (isPrime(Number(str))) set.add(Number(str));
    for (let i = 0; i < numbers.length; ++i) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(str + numbers[i]);
      visited[i] = false;
    }
  };
  dfs('');
  return set.size;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) return false;
  }
  return true;
}
