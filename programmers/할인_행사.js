function solution(want, number, discount) {
  let result = 0;
  for (let i = 0; i + 10 <= discount.length; ++i) {
    const sliced = discount.slice(i, i + 10);
    let isOk = true;
    for (let j = 0; j < want.length; ++j) {
      if (sliced.filter((e) => e === want[j]).length < number[j]) {
        isOk = false;
        break;
      }
    }
    if (isOk) ++result;
  }
  return result;
}
