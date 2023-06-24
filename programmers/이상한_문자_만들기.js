function solution(s) {
  return s
    .split(' ')
    .map((e) =>
      [...e].map((c, i) => (i % 2 ? c.toLowerCase() : c.toUpperCase())).join('')
    )
    .join(' ');
}
