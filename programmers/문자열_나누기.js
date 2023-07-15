function solution(s) {
  let result = 0;
  let cnt = 0;
  let x = s[0];
  for (let i = 0; i < s.length; ++i) {
    if (x === s[i]) ++cnt;
    else --cnt;

    if (cnt === 0 || i === s.length - 1) {
      ++result;
      x = s[i + 1];
      cnt = 0;
    }
  }
  return result;
}
