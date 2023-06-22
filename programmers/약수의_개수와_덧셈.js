function countDevisor(n) {
  let count = 0;
  for (let i = 1; i <= n; ++i) {
    if (n % i === 0) ++count;
  }
  return count;
}

function solution(left, right) {
  return Array(right - left + 1)
    .fill(left)
    .map((n, i) => n + i)
    .reduce((result, n) => result + (countDevisor(n) % 2 ? -n : n), 0);
}
