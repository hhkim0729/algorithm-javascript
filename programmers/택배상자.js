function solution(order) {
  const mainCont = Array(order.length)
    .fill(0)
    .map((_, i) => order.length - i);
  const tempCont = [];
  let result = 0;
  for (const box of order) {
    while (mainCont.at(-1) < box) tempCont.push(mainCont.pop());
    if (mainCont.at(-1) === box) {
      mainCont.pop();
      ++result;
    } else if (tempCont.at(-1) === box) {
      tempCont.pop();
      ++result;
    } else {
      break;
    }
  }
  return result;
}
