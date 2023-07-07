function solution(n, m, section) {
  let result = 0;
  let last = 0;
  section.forEach((s) => {
    if (s > last) {
      ++result;
      last = s + m - 1;
    }
  });
  return result;
}
