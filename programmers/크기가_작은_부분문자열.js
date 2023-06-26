function solution(t, p) {
  const len = p.length;
  const np = Number(p);
  let result = 0;
  for (let i = 0; i < t.length - len + 1; ++i) {
    if (Number(t.slice(i, i + len)) <= np) {
      ++result;
    }
  }
  return result;
}
