function solution(arr1, arr2) {
  return arr1.map((arr, i) => arr.map((n, j) => n + arr2[i][j]));
}
