function solution(priorities, location) {
  let arr = priorities.map((e, i) => [e, i]);
  const queue = [];
  while (arr.length) {
    const curr = arr.shift();
    if (arr.some((e) => e[0] > curr[0])) {
      arr.push(curr);
    } else {
      queue.push(curr);
    }
  }
  return queue.findIndex((e) => e[1] === location) + 1;
}
