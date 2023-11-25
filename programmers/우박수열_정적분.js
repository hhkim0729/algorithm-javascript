function solution(k, ranges) {
  const collatz = [k];
  const area = [];
  while (k > 1) {
    if (k % 2 === 0) k /= 2;
    else k = k * 3 + 1;
    collatz.push(k);
    const [small, big] = [collatz.at(-1), collatz.at(-2)];
    area.push(small + (big - small) / 2);
  }

  const result = [];
  for (const r of ranges) {
    const [start, end] = [r[0], area.length + r[1]];
    if (start > end) {
      result.push(-1);
      continue;
    }
    let tmp = 0;
    for (let i = start; i < end; ++i) {
      tmp += area[i];
    }
    result.push(tmp);
  }
  return result;
}
