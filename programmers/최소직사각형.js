function solution(sizes) {
  const switched = sizes.map((arr) =>
    arr[0] > arr[1] ? [arr[1], arr[0]] : arr
  );
  const maxSmall = switched.sort((a, b) => b[0] - a[0])[0][0];
  const maxBig = switched.sort((a, b) => b[1] - a[1])[0][1];
  return maxSmall * maxBig;
}
