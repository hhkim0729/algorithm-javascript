function solution(n) {
  let i = 1;
  let sum = 0;
  while (true) {
    const next = 3 ** i;
    if (sum + next >= n) break;
    sum += next;
    ++i;
  }
  let result = '';
  for (let j = 1; j <= i; ++j) {
    let rest = n % 3;
    if (rest === 1) result = '1' + result;
    else if (rest === 2) result = '2' + result;
    else if (rest === 0) result = '4' + result;
    n = Math.floor(n / 3);
    if (rest === 0) --n;
  }
  return result;
}
