function solution(n, words) {
  const obj = {};
  words.forEach((word) => (obj[word] = 0));
  obj[words[0]]++;

  for (let i = 1; i < words.length; ++i) {
    if (words[i - 1].at(-1) !== words[i].at(0) || obj[words[i]] > 0) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }
    obj[words[i]]++;
  }
  return [0, 0];
}
