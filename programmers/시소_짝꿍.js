function solution(weights) {
  weights.sort((a, b) => a - b);
  const obj = {};
  weights.forEach((w) => (obj[w] = (obj[w] || 0) + 1));

  let result = 0;
  for (const weight of weights) {
    if (obj[weight] > 1) result += obj[weight] - 1;
    if (obj[weight * (3 / 2)]) result += obj[weight * (3 / 2)];
    if (obj[weight * 2]) result += obj[weight * 2];
    if (obj[weight * (4 / 3)]) result += obj[weight * (4 / 3)];

    --obj[weight];
  }
  return result;
}
