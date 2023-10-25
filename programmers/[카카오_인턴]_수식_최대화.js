function solution(expression) {
  const arr = expression.match(/\d+|[*+-]/g);
  const priors = [];
  const recursion = (src, len, str) => {
    if (len === 0) {
      priors.push(str);
      return;
    }
    for (let i = 0; i < src.length; ++i) {
      recursion(src.replace(src[i], ''), len - 1, str + src[i]);
    }
  };
  recursion('+-*', 3, '');

  let result = 0;
  for (const prior of priors) {
    const tmp = [...arr];
    for (const op of prior) {
      let i = tmp.indexOf(op);
      while (i >= 0) {
        tmp.splice(i - 1, 3, calc(tmp[i - 1], tmp[i + 1], op));
        i = tmp.indexOf(op);
      }
    }
    if (Math.abs(tmp[0]) > result) result = Math.abs(tmp[0]);
  }
  return result;
}

function calc(num1, num2, op) {
  const [n1, n2] = [num1, num2].map(Number);
  switch (op) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
  }
}
