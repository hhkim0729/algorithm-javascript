function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(false);
  let result = 0;
  const dfs = (k, cnt, dungeons, visited) => {
    for (let i = 0; i < dungeons.length; ++i) {
      const [min, use] = dungeons[i];
      if (visited[i] || min > k) continue;
      visited[i] = true;
      dfs(k - use, cnt + 1, dungeons, visited);
      visited[i] = false;
    }
    result = Math.max(result, cnt);
  };
  dfs(k, 0, dungeons, visited);
  return result;
}
