function solution(progresses, speeds) {
  const days = progresses.map((e, i) => Math.ceil((100 - e) / speeds[i]));
  const result = [];
  let tmp = [];
  for (const day of days) {
    if (tmp[0] < day) {
      result.push(tmp.length);
      tmp = [];
    }
    tmp.push(day);
  }
  if (tmp.length) result.push(tmp.length);
  return result;
}
