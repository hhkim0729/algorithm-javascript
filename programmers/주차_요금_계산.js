function solution([baseM, baseFee, extraM, extraFee], records) {
  const objIn = {};
  const result = {};

  for (const record of records) {
    const [time, num, flag] = record.split(' ');
    const [h, m] = time.split(':').map(Number);
    const v = h * 60 + m;
    if (flag === 'IN') {
      objIn[num] = v;
    } else {
      result[num] = (result[num] || 0) + v - objIn[num];
      delete objIn[num];
    }
  }

  for (const [num, inTime] of Object.entries(objIn)) {
    const outTime = 23 * 60 + 59;
    result[num] = (result[num] || 0) + outTime - objIn[num];
  }

  for (const [num, time] of Object.entries(result)) {
    const duration = result[num] - baseM;
    result[num] =
      duration > 0
        ? baseFee + Math.ceil(duration / extraM) * extraFee
        : baseFee;
  }

  return Object.entries(result)
    .sort((a, b) => a[0] - b[0])
    .map((e) => e[1]);
}
