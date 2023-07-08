function solution(lottos, win_nums) {
  const worst = lottos.filter((n) => win_nums.includes(n)).length;
  const best = worst + lottos.filter((n) => n === 0).length;
  return [7 - (best > 1 ? best : 1), 7 - (worst > 1 ? worst : 1)];
}
