function solution(sequence, k) {
  const result = [0, 0];
  let resultLen = Infinity;
  let [s, e, sum] = [0, 0, 0];
  while (e < sequence.length) {
    sum += sequence[e];
    while (sum > k) sum -= sequence[s++];
    if (sum === k && e - s + 1 < resultLen) {
      [result[0], result[1]] = [s, e];
      resultLen = e - s + 1;
    }
    ++e;
  }
  return result;
}
