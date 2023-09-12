function solution(msg) {
  const dict = {};
  [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].forEach((c, i) => (dict[c] = i + 1));

  let arr = [...msg];
  const result = [];
  while (arr.length) {
    for (let i = arr.length - 1; i >= 0; --i) {
      const str = arr.slice(0, i + 1).join('');
      const index = dict[str];
      if (index && i != arr.length - 1) {
        dict[str + arr[i + 1]] = Object.keys(dict).length + 1;
      }
      if (index) {
        result.push(index);
        arr = arr.slice(i + 1);
        break;
      }
    }
  }
  return result;
}
