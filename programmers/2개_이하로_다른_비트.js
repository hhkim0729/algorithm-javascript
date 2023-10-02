function solution(numbers) {
  const result = [];
  for (const num of numbers) {
    if (num % 4 !== 3) {
      result.push(num + 1);
      continue;
    }
    let str = num.toString(2);
    if (str.indexOf('0') < 0) str = '0' + str;
    const i = str.lastIndexOf('01');
    const nextStr = str.slice(0, i) + '10' + str.slice(i + 2);
    result.push(parseInt(nextStr, 2));
  }
  return result;
}
