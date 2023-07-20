function solution(arr) {
  let result = 0;
  let burger = [];
  arr.forEach((e) => {
    burger.push(e);
    if (burger.slice(burger.length - 4).join('') === '1231') {
      burger.pop();
      burger.pop();
      burger.pop();
      burger.pop();
      ++result;
    }
  });
  return result;
}
