function solution(data, col, row_begin, row_end) {
  --col, --row_begin, --row_end;
  data.sort((a, b) => a[col] - b[col] || b[0] - a[0]);
  const s = data
    .map((d, i) => d.reduce((a, c) => a + (c % (i + 1)), 0))
    .slice(row_begin, row_end + 1);
  let result = s[0];
  for (let i = 1; i < s.length; ++i) result = result ^ s[i];
  return result;
}
