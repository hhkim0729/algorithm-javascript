function solution(s) {
  let result = 0;
  for (let i = 0; i < s.length; ++i) {
    const stack = [];
    for (const c of s) {
      const last = stack.at(-1);
      if (last === '(' && c === ')') stack.pop();
      else if (last === '[' && c === ']') stack.pop();
      else if (last === '{' && c === '}') stack.pop();
      else stack.push(c);
    }
    if (!stack.length) ++result;
    s = s.slice(1) + s[0];
  }
  return result;
}
