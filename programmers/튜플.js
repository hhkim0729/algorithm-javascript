function solution(s) {
  const result = [];
  const arr = s
    .slice(2, -2)
    .split('},{')
    .map((e) => e.split(',').map(Number));
  arr.sort((a, b) => a.length - b.length);
  for (const a of arr) {
    for (const b of a) {
      if (!result.includes(b)) result.push(b);
    }
  }
  return result;
}
