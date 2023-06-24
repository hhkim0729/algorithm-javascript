function solution(d, budget) {
  let result = 0;
  let sum = 0;
  d.sort((a, b) => a - b);
  while (sum < budget) {
    sum += d[result];
    if (sum <= budget) {
      ++result;
    }
  }
  return result;
}
