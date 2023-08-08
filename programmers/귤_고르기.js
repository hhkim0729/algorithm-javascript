function solution(k, tangerine) {
  const obj = {};
  tangerine.forEach((n) => (obj[n] = (obj[n] || 0) + 1));
  const arr = Object.values(obj);
  arr.sort((a, b) => b - a);

  let result = 0;
  for (const n of arr) {
    ++result;
    k -= n;
    if (k <= 0) break;
  }
  return result;
}
