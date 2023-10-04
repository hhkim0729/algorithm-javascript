function solution(arr) {
  const result = [0, 0];
  const recursion = (hs, he, ws, we) => {
    const tmp = arr[hs][ws];
    let flag = true;
    for (let i = hs; i < he; ++i) {
      for (let j = ws; j < we; ++j) {
        if (tmp !== arr[i][j]) {
          flag = false;
          break;
        }
      }
      if (!flag) break;
    }
    if (flag) {
      ++result[tmp];
      return;
    }
    const nh = hs + (he - hs) / 2;
    const nw = ws + (we - ws) / 2;
    recursion(hs, nh, ws, nw);
    recursion(hs, nh, nw, we);
    recursion(nh, he, ws, nw);
    recursion(nh, he, nw, we);
  };
  recursion(0, arr.length, 0, arr.length);
  return result;
}
