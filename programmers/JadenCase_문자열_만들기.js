function solution(s) {
  return s
    .split(' ')
    .map((str) =>
      [...str]
        .map((c, i) => (i === 0 ? c.toUpperCase() : c.toLowerCase()))
        .join('')
    )
    .join(' ');
}
