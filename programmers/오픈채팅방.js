function solution(record) {
  const obj = {};
  for (const line of record) {
    const [flag, id, name] = line.split(' ');
    if (flag === 'Leave') continue;
    obj[id] = name;
  }
  const result = [];
  for (const line of record) {
    const [flag, id, _] = line.split(' ');
    if (flag === 'Change') continue;
    result.push(
      `${obj[id]}님이 ${flag === 'Enter' ? '들어왔습니다.' : '나갔습니다.'}`
    );
  }
  return result;
}
