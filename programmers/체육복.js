function solution(n, lost, reserve) {
  const map = new Map();
  for (let i = 1; i <= n; ++i) map.set(i, 1);
  lost.sort();
  reserve.sort();
  lost.forEach((n) => map.set(n, 0));
  reserve.forEach((n) => map.set(n, map.get(n) + 1));
  reserve.forEach((n) => {
    const mine = map.get(n);
    if (mine < 2) return;
    if (map.get(n - 1) === 0) map.set(n - 1, 1);
    else if (map.get(n + 1) === 0) map.set(n + 1, 1);
    map.set(n, 1);
  });
  return [...map].filter((arr) => arr[1] === 1).length;
}
