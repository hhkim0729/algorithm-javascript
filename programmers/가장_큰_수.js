function solution(numbers) {
  const result = numbers
    .map((n) => String(n))
    .sort((a, b) => b + a - (a + b))
    .join('');
  return Number(result) === 0 ? '0' : result;
}
