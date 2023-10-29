function solution(n, k) {
  const arr = Array(n)
    .fill(0)
    .map((_, i) => i + 1);
  let result = [];
  while (result.length !== n) {
    const part = factorial(arr.length) / arr.length;
    const i = Math.ceil(k / part) - 1;
    result.push(arr[i]);
    arr.splice(i, 1);
    k -= part * i;
  }
  return result;
}

function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}
