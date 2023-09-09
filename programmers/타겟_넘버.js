function solution(numbers, target) {
  let result = 0;

  const dfs = (sum, i) => {
    if (i === numbers.length) {
      if (sum === target) ++result;
      return;
    }
    dfs(sum + numbers[i], i + 1);
    dfs(sum - numbers[i], i + 1);
  };

  dfs(0, 0);

  return result;
}
