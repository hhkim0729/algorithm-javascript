function solution(n) {
  const result = Array(n)
    .fill()
    .map((_, i) => Array(i + 1).fill(0));
  const max = (n * (n + 1)) / 2;
  let [i, j, curr] = [0, 0, 1];
  while (curr <= max) {
    // 증가 세로 채우기
    while (i < n && !result[i][j]) {
      result[i++][j] = curr++;
    }
    --i, ++j;
    // 가로 채우기
    while (j < n && !result[i][j]) {
      result[i][j++] = curr++;
    }
    --i, (j -= 2);
    // 감소 세로 채우기
    while (i > 0 && j > 0 && !result[i][j]) {
      result[i--][j--] = curr++;
    }
    (i += 2), ++j;
  }
  return result.flat();
}
