function solution(numbers) {
  const result = Array(numbers.length).fill(-1);
  const stack = [];
  for (let i = numbers.length - 1; i >= 0; --i) {
    while (stack.length && stack.at(-1) <= numbers[i]) stack.pop();
    if (stack.length) result[i] = stack.at(-1);
    stack.push(numbers[i]);
  }
  return result;
}
