function solution(queue1, queue2) {
  let result = 0;
  const maxResult = queue1.length * 3;
  let [sum1, sum2] = [
    queue1.reduce((a, c) => a + c, 0),
    queue2.reduce((a, c) => a + c, 0),
  ];
  let [i1, i2] = [0, 0];
  while (sum1 !== sum2) {
    if (result >= maxResult) return -1;
    if (!queue1[i1] || !queue2[i2]) return -1;
    if (sum1 < sum2) {
      queue1.push(queue2[i2++]);
      sum1 += queue1.at(-1);
      sum2 -= queue1.at(-1);
    } else {
      queue2.push(queue1[i1++]);
      sum1 -= queue2.at(-1);
      sum2 += queue2.at(-1);
    }
    ++result;
  }
  return result;
}
