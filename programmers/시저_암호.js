function solution(s, n) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const len = alphabet.length;
  return [...s]
    .map((c) => {
      const upper = c.toUpperCase();
      const i = alphabet.indexOf(upper);
      if (i === -1) return c;
      const changed = alphabet[(i + n) % alphabet.length];
      return c === upper ? changed : changed.toLowerCase();
    })
    .join('');
}
