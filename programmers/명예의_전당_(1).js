function solution(k, score) {
  return score.reduce((result, _, i) => {
    const arr = score.slice(0, i + 1).sort((a, b) => b - a);
    const len = arr.length;
    return [...result, len < k ? arr[len - 1] : arr[k - 1]];
  }, []);
}
