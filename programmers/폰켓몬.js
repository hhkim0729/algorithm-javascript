function solution(nums) {
  const arr = [...new Set(nums)];
  return Math.min(nums.length / 2, arr.length);
}
