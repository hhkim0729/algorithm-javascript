function solution(arr) {
  for (let i = arr.length - 1; i > 0; --i) {
    if (arr[i] === arr[i - 1]) {
      arr[i] = null;
    }
  }
  return arr.filter((e) => e !== null);
}
