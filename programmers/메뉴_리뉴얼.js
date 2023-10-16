function solution(orders, course) {
  const ordered = {};
  const result = {};
  const countMax = Array(10 + 1).fill(0);

  const recursion = (arr, start, len, str) => {
    if (len === 0) {
      ordered[str] = (ordered[str] || 0) + 1;
      if (ordered[str] > 1) result[str] = ordered[str];
      countMax[str.length] = Math.max(countMax[str.length], ordered[str]);
      return;
    }

    for (let i = start; i < arr.length; ++i) {
      recursion(arr, i + 1, len - 1, str + arr[i]);
    }
  };

  orders.forEach((order) => {
    const sorted = order.split('').sort();
    course.forEach((len) => {
      recursion(sorted, 0, len, '');
    });
  });

  return Object.keys(result)
    .filter((e) => countMax[e.length] === result[e])
    .sort();
}
