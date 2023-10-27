function solution(storey) {
  const arr = [0, ...String(storey)].map(Number);
  let result = 0;
  for (let i = arr.length - 1; i >= 0; --i) {
    if (arr[i] > 5) {
      ++arr[i - 1];
      result += 10 - arr[i];
    } else if (arr[i] === 5 && i > 0) {
      if (arr[i - 1] >= 5) {
        ++arr[i - 1];
        result += 10 - arr[i];
      } else {
        result += arr[i];
      }
    } else {
      result += arr[i];
    }
  }
  return result;
}
