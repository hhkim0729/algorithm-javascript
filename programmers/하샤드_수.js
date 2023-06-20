function solution(x) {
  return x % [...x.toString()].reduce((sum, c) => sum + Number(c), 0)
    ? false
    : true;
}
