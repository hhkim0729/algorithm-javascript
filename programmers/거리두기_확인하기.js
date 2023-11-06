function solution(places) {
  const result = [];
  for (const place of places) {
    const ps = [];
    for (let i = 0; i < place.length; ++i) {
      for (let j = 0; j < place[0].length; ++j) {
        if (place[i][j] === 'P') ps.push([i, j]);
      }
    }

    let flag = true;
    for (let i = 0; i < ps.length - 1; ++i) {
      for (let j = i + 1; j < ps.length; ++j) {
        const [r1, c1] = ps[i];
        const [r2, c2] = ps[j];
        const d = Math.abs(r1 - r2) + Math.abs(c1 - c2);
        if (d > 2) continue;
        if (d < 2) {
          flag = false;
          break;
        }
        let partition = 1;
        if (r1 !== r2 && c1 !== c2) partition = 2;

        let cntX = 0;
        for (let y = Math.min(r1, r2); y <= Math.max(r1, r2); ++y) {
          for (let x = Math.min(c1, c2); x <= Math.max(c1, c2); ++x) {
            if (place[y][x] === 'X') ++cntX;
          }
        }
        if (partition !== cntX) flag = false;
      }
      if (!flag) break;
    }
    result.push(flag ? 1 : 0);
  }
  return result;
}
