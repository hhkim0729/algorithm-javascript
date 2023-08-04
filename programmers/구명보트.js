function solution(people, limit) {
  people.sort((a, b) => a - b);
  let i = 0;
  let j = people.length - 1;
  let result = 0;
  while (i <= j) {
    if (people[i] + people[j] > limit) {
      --j;
    } else {
      ++i;
      --j;
    }
    ++result;
  }
  return result;
}
