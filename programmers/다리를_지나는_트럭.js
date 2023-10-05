function solution(bridge_length, weight, trucks) {
  let result = 0;
  const q = [];
  let totalWeight = 0;
  while (true) {
    if (q.length === bridge_length) totalWeight -= q.shift();
    if (trucks.length && totalWeight + trucks[0] <= weight) {
      q.push(trucks.shift());
      totalWeight += q.at(-1);
    } else {
      q.push(0);
    }
    ++result;
    if (totalWeight === 0) break;
  }
  return result;
}
