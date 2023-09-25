function solution(prices) {
  const len = prices.length;
  const result = Array(len).fill(0);
  const stack = [];
  for (let i = len - 1; i >= 0; --i) {
    while (stack.length && stack.at(-1)[0] >= prices[i]) stack.pop();
    result[i] = stack.length ? stack.at(-1)[1] - i : len - i - 1;
    stack.push([prices[i], i]);
  }
  return result;
}
