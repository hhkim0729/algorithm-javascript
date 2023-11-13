function solution(w, h) {
  const [big, small] = [Math.max(w, h), Math.min(w, h)];
  let cnt = 0;
  for (let i = 1; i <= small; ++i) {
    cnt += Math.ceil((big * i) / small) - Math.floor((big * (i - 1)) / small);
  }
  return w * h - cnt;
}
