function solution(n, t, m, p) {
  const result = [];
  const arr = [];
  let last = -1;
  for (let i = 0; result.length <= t; ++i) {
    arr.push(...i.toString(n).toUpperCase());
    result.push(...arr.filter((_, i) => i > last && i % m === p - 1));
    last = arr.length - 1;
  }
  return result.slice(0, t).join('');
}
