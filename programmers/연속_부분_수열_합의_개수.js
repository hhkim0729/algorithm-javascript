function solution(elements) {
  const set = new Set();
  for (let i = 1; i <= elements.length; ++i) {
    const circle = elements.concat(elements.slice(0, i));
    for (let j = 0; j < circle.length; ++j) {
      set.add(circle.slice(j, j + i).reduce((total, n) => total + n, 0));
    }
  }
  return set.size;
}
