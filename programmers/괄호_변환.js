function solution(p) {
  if (isCorrect(p)) return p;

  const recursion = (str) => {
    if (!str) return str;
    const [u, v] = splitBalanced(str);
    if (isCorrect(u)) return u + recursion(v);
    else
      return (
        '(' +
        recursion(v) +
        ')' +
        u.slice(1, -1).replace(/\(|\)/g, (c) => (c === '(' ? ')' : '('))
      );
  };

  return recursion(p);
}

function isCorrect(str) {
  const s = [];
  for (const c of str) {
    if (c === '(') s.push(c);
    else s.pop();
  }
  return s.length ? false : true;
}

function splitBalanced(str) {
  let [open, close] = [0, 0];
  for (const c of str) {
    if (c === '(') ++open;
    else ++close;
    if (open && open === close) break;
  }
  const i = open + close;
  return [str.slice(0, i), str.slice(i)];
}
