function solution(s) {
  const result = [0, 0];
  while (s !== '1') {
    const prev = s.length;
    s = s.replaceAll('0', '');
    const curr = s.length;
    result[0] += 1;
    result[1] += prev - curr;
    s = curr.toString(2);
  }
  return result;
}
