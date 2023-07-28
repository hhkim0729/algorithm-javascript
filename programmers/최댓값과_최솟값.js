function solution(s) {
  const arr = s
    .split(' ')
    .map((e) => Number(e))
    .sort((a, b) => a - b);
  return `${arr[0]} ${arr.at(-1)}`;
}
