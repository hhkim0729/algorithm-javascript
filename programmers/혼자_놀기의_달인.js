function solution(cards) {
  let result = 0;
  for (let i = 0; i < cards.length; ++i) {
    const groups = [[]];
    const visited = Array(cards.length).fill(false);
    let curr = cards[i] - 1;

    while (curr >= 0) {
      visited[curr] = true;
      groups.at(-1).push(cards[curr]);
      curr = cards[curr] - 1;
      if (visited[curr]) {
        groups.push([]);
        curr = visited.findIndex((v) => v === false);
      }
    }

    groups.sort((a, b) => b.length - a.length);
    result = Math.max(result, groups[0].length * groups[1].length);
  }
  return result;
}
