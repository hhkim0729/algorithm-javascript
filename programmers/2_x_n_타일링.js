function solution(n) {
  const arr = [0, 1, 2];
  for (let i = 3; i <= n; ++i) {
    arr.push((arr.at(-2) + arr.at(-1)) % 1000000007);
  }
  return arr[n] % 1000000007;
}
