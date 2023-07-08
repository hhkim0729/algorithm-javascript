function solution(number, limit, power) {
  let result = 0;
  for (let i = 1; i <= number; ++i) {
    const tmp = countDevisor(i);
    result += tmp > limit ? power : tmp;
  }
  return result;
}

function countDevisor(n) {
  let result = 0;
  const sqrt = Math.sqrt(n);
  for (let i = 1; i <= sqrt; ++i) {
    if (n % i === 0) {
      result += i === sqrt ? 1 : 2;
    }
  }
  return result;
}
