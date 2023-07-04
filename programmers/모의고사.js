function solution(answers) {
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [
    [1, 0],
    [2, 0],
    [3, 0],
  ];
  for (let i = 0; i < answers.length; ++i) {
    for (let j = 0; j < students.length; ++j) {
      if (students[j][i % students[j].length] === answers[i]) {
        scores[j][1] += 1;
      }
    }
  }
  scores.sort((a, b) => b[1] - a[1]);
  const maxScore = scores[0][1];
  return scores
    .filter((e) => e[1] === maxScore)
    .map((e) => e[0])
    .sort((a, b) => a - b);
}
