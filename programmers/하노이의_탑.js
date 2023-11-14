function solution(n) {
  let result = [];
  const recursion = (n, src, through, dst) => {
    if (n === 1) {
      result.push([src, dst]);
      return;
    }

    recursion(n - 1, src, dst, through);
    result.push([src, dst]);
    recursion(n - 1, through, src, dst);
  };
  recursion(n, 1, 2, 3);
  return result;
}
