function solution(nums) {
  let result = 0;
  for (let i = 0; i < nums.length - 2; ++i) {
    for (let j = i + 1; j < nums.length - 1; ++j) {
      for (let k = j + 1; k < nums.length; ++k) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          ++result;
        }
      }
    }
  }
  return result;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
