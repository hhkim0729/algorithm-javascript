function solution(skill, skill_trees) {
  const arr = [...skill];
  let result = 0;
  for (const s of skill_trees) {
    const tmp = [];
    for (const c of s) {
      if (arr.includes(c)) tmp.push(c);
    }
    if (skill.startsWith(tmp.join(''))) ++result;
  }
  return result;
}
