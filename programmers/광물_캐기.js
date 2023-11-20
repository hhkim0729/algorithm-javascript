function solution(picks, minerals) {
  let result = Infinity;
  const recursion = (picks, fatigue, i) => {
    if (picks[0] + picks[1] + picks[2] === 0 || i >= minerals.length) {
      result = Math.min(result, fatigue);
      return;
    }
    const arr = Array(3).fill(0);
    for (let j = i; j < i + 5; ++j) {
      if (j === minerals.length) break;
      if (minerals[j] === 'diamond') {
        arr[0] += 1;
        arr[1] += 5;
        arr[2] += 25;
      } else if (minerals[j] === 'iron') {
        arr[0] += 1;
        arr[1] += 1;
        arr[2] += 5;
      } else {
        arr[0] += 1;
        arr[1] += 1;
        arr[2] += 1;
      }
    }
    for (let j = 0; j < 3; ++j) {
      if (picks[j] <= 0) continue;
      recursion(
        picks.map((e, i) => (i === j ? --e : e)),
        fatigue + arr[j],
        i + 5
      );
    }
  };
  recursion(picks, 0, 0);
  return result;
}
