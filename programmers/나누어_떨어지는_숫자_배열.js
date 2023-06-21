function solution(arr, divisor) {
  const result = arr.filter((n) => n % divisor === 0);
  return result.length ? result.sort((a, b) => a - b) : [-1];
}
