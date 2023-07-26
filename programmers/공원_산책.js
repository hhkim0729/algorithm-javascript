function solution(park, routes) {
  const obj = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  const start = park.join('').indexOf('S');
  let curr = [parseInt(start / park.length), start % park[0].length];
  routes.forEach((route) => {
    const [dir, cnt] = route.split(' ');
    let [x, y] = curr;
    for (let i = 0; i < Number(cnt); ++i) {
      x += obj[dir][0];
      y += obj[dir][1];
      if (
        x < 0 ||
        x >= park.length ||
        y < 0 ||
        y >= park[0].length ||
        park[x][y] === 'X'
      ) {
        return;
      }
    }
    curr = [x, y];
  });
  return curr;
}
