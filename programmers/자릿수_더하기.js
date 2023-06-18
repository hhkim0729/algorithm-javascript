function solution(n) {
  return [...n.toString()].reduce((result, c) => result + Number(c), 0);
}
