function solution(absolutes, signs) {
  return absolutes.reduce((result, n, i) => result + (signs[i] ? n : -n), 0);
}
