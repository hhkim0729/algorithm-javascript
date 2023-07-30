function solution(n) {
  const cnt = [...n.toString(2)].filter((e) => e === '1').length;
  for (let i = ++n; ; ++i) {
    if (cnt === [...i.toString(2)].filter((e) => e === '1').length) {
      return i;
    }
  }
}
