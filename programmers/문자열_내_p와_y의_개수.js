function solution(s) {
  const arr = [...s.toLowerCase()];
  let p = arr.filter((c) => c === 'p').length;
  let y = arr.filter((c) => c === 'y').length;
  return (!p && !y) || p === y ? true : false;
}
