function solution(numbers) {
  return Array(10)
    .fill(0)
    .map((_, i) => i)
    .reduce((result, n) => (numbers.includes(n) ? result : result + n), 0);
}
