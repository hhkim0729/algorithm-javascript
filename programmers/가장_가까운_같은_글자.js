function solution(s) {
  return [...s].map((c, i) => {
    const index = s.slice(0, i).lastIndexOf(c);
    return index === -1 ? -1 : i - index;
  }, []);
}
