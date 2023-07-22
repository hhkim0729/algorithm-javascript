function solution(survey, choices) {
  const map = new Map();
  [...'RTCFJMAN'].forEach((c) => map.set(c, 0));

  for (let i = 0; i < survey.length; ++i) {
    if (choices[i] === 4) continue;
    const score = Math.abs(choices[i] - 4);
    if (choices[i] < 4) map.set(survey[i][0], map.get(survey[i][0]) + score);
    else map.set(survey[i][1], map.get(survey[i][1]) + score);
  }

  let result = '';
  result += map.get('T') > map.get('R') ? 'T' : 'R';
  result += map.get('F') > map.get('C') ? 'F' : 'C';
  result += map.get('M') > map.get('J') ? 'M' : 'J';
  result += map.get('N') > map.get('A') ? 'N' : 'A';
  return result;
}
