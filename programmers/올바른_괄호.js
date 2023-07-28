function solution(s) {
  const arr = [];
  for (const e of s) {
    if (e === '(') arr.push(e);
    else {
      if (arr.length === 0) return false;
      if (arr.at(-1) === '(') arr.pop();
    }
  }
  return arr.length ? false : true;
}
