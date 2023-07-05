function solution(cards1, cards2, goal) {
  let i1 = 0;
  let i2 = 0;
  for (const word of goal) {
    if (word === cards1[i1]) {
      ++i1;
    } else if (word === cards2[i2]) {
      ++i2;
    } else {
      return 'No';
    }
  }
  return 'Yes';
}
