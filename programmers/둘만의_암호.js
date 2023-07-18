function solution(s, skip, index) {
  const alphabets = [...'abcdefghijklmnopqrstuvwxyz'].filter(
    (c) => !skip.includes(c)
  );
  return [...s]
    .map((c) => alphabets[(alphabets.indexOf(c) + index) % alphabets.length])
    .join('');
}
