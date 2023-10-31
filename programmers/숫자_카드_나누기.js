function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  const findCandidate = (curr, other) => {
    for (let i = curr[0]; i > 1; --i) {
      if (curr.every((n) => n % i === 0) && !other.some((n) => n % i === 0))
        return i;
    }
    return 0;
  };
  return Math.max(findCandidate(arrayA, arrayB), findCandidate(arrayB, arrayA));
}
