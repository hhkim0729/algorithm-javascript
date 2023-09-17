function solution(word) {
  const arr = 'AEIOU'.split('');
  let result = -1;
  const dfs = (str) => {
    ++result;
    if (str === word) return true;
    if (str.length === 5) return false;
    for (const a of arr) {
      if (dfs(str + a)) return true;
    }
  };
  dfs('');
  return result;
}
