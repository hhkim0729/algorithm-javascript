function solution(topping) {
  let result = 0;
  const older = {};
  let olderCnt = 0;
  const younger = {};
  let youngerCnt = 0;

  topping.forEach((t) => {
    older[t] = (older[t] || 0) + 1;
    if (older[t] === 1) ++olderCnt;
  });

  topping.forEach((t) => {
    younger[t] = (younger[t] || 0) + 1;
    older[t] = older[t] - 1;
    if (younger[t] === 1) ++youngerCnt;
    if (older[t] === 0) --olderCnt;
    if (olderCnt === youngerCnt) ++result;
  });

  return result;
}
