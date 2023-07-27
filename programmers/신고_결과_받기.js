function solution(id_list, report, k) {
  const set = new Set(report);
  const obj = {};
  set.forEach((str) => {
    const [first, second] = str.split(' ');
    obj[second] = obj[second] === undefined ? [first] : [...obj[second], first];
  });

  const result = {};
  id_list.forEach((id) => (result[id] = 0));
  for (const key in obj) {
    if (obj[key].length < k) continue;
    obj[key].forEach((v) => (result[v] += 1));
  }
  return Object.values(result);
}
