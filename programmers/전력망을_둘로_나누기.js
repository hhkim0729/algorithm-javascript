function solution(n, wires) {
  let result = Infinity;
  const obj = {};
  wires.forEach(([k, v]) => {
    if (!obj[k]) obj[k] = [];
    if (!obj[v]) obj[v] = [];
    obj[k].push(v);
    obj[v].push(k);
  });

  const countNodes = (start, cut) => {
    const visited = Array(n + 1).fill(false);
    const q = [start];
    let count = 0;
    while (q.length) {
      const curr = q.pop();
      if (curr === cut || visited[curr]) continue;
      visited[curr] = true;
      ++count;
      for (const el of obj[curr]) q.push(el);
    }
    return count;
  };

  for (const k of Object.keys(obj)) {
    for (const v of obj[k]) {
      const gap = Math.abs(countNodes(k, v) - countNodes(v, Number(k)));
      if (gap < result) result = gap;
    }
  }

  return result;
}
