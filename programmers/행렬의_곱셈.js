function solution(arr1, arr2) {
  const result = Array(arr1.length)
    .fill(0)
    .map((_) => []);
  for (let i = 0; i < arr1.length; ++i) {
    for (let j = 0; j < arr2[0].length; ++j) {
      let tmp = 0;
      for (let k = 0; k < arr1[0].length; ++k) {
        tmp += arr1[i][k] * arr2[k][j];
      }
      result[i].push(tmp);
    }
  }
  return result;
}
