function solution(number, k) {
  const arr = [];
  const orgLen = number.length;
  const resultLen = orgLen - k;
  for (let i = 0; i < orgLen; ++i) {
    const [curr, last, restLen] = [number[i], arr.at(-1), orgLen - i];
    if (last && curr > last) {
      while (
        arr.length &&
        arr.length + restLen > resultLen &&
        arr.at(-1) < curr
      )
        arr.pop();
    }
    arr.push(curr);
  }
  return arr.join('').slice(0, resultLen);
}
