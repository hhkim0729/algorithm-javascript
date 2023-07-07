function solution(dartResult) {
  const result = [];
  let i = 0;
  while (i < dartResult.length) {
    let num = '';
    while (!isNaN(dartResult[i])) {
      num += dartResult[i];
      ++i;
    }
    result.push(Number(num));
    while (i < dartResult.length && isNaN(dartResult[i])) {
      const c = dartResult[i];
      ++i;
      if (c === 'D') result[result.length - 1] = result.at(-1) ** 2;
      else if (c === 'T') result[result.length - 1] = result.at(-1) ** 3;
      else if (c === '*') {
        result[result.length - 1] *= 2;
        if (result.length > 1) result[result.length - 2] *= 2;
      } else if (c === '#') result[result.length - 1] *= -1;
    }
  }
  return result.reduce((total, n) => total + n, 0);
}
