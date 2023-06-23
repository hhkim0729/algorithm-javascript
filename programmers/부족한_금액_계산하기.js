function solution(price, money, count) {
  const result = (count * (price + price * count)) / 2 - money;
  return result > 0 ? result : 0;
}
