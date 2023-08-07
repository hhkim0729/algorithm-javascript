function solution(n) {
  const arr = [1, 1];
  for (let i = 2; i <= n; ++i) {
    arr.push((arr.at(i - 2) + arr.at(i - 1)) % 1234567);
  }
  return arr[n];
}
