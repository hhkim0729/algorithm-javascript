function solution(s) {
  const len = s.length;
  let result = len;
  for (let i = len; i > 0; --i) {
    let copy = s;
    let tmp = '';
    while (copy) {
      let cnt = 1;
      const str = copy.slice(0, i);
      while (copy.indexOf(str.repeat(++cnt)) === 0);
      tmp += (--cnt === 1 ? '' : String(cnt)) + str;
      copy = copy.slice(i * cnt);
    }
    result = Math.min(result, tmp.length);
  }
  return result;
}
