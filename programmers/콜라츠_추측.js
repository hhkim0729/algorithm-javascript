function solution(num) {
  let result = 0;
  while (num !== 1 && result < 500) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    ++result;
  }
  return result < 500 ? result : -1;
}
