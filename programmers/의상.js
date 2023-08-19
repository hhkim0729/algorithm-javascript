function solution(clothes) {
  const obj = {};
  clothes.forEach((e) => (obj[e[1]] = (obj[e[1]] || 1) + 1));
  return Object.values(obj).reduce((result, n) => result * n, 1) - 1;
}
