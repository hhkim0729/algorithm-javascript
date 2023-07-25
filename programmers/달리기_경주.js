function solution(players, callings) {
  const obj = {};
  players.forEach((player, i) => (obj[player] = i));
  callings.forEach((name) => {
    const i = obj[name];
    const prev = players[i - 1];
    [obj[prev], obj[name]] = [i, i - 1];
    [players[i - 1], players[i]] = [players[i], players[i - 1]];
  });
  return players;
}
