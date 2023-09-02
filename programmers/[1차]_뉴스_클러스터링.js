const N = 65536;

function solution(str1, str2) {
  const arr1 = sliceStr(str1);
  const arr2 = sliceStr(str2);
  const arr = Array.from(new Set(arr1.concat(arr2)));
  if (!arr.length) return N;

  let inter = '';
  let union = '';
  for (const e of arr) {
    const cnt1 = countElement(arr1, e);
    const cnt2 = countElement(arr2, e);
    inter = inter + e.repeat(Math.min(cnt1, cnt2));
    union = union + e.repeat(Math.max(cnt1, cnt2));
  }
  return Math.trunc((inter.length / union.length) * N);
}

function sliceStr(str) {
  const arr = [];
  for (let i = 0; i < str.length - 1; ++i) {
    const tmp = [...str]
      .slice(i, i + 2)
      .join('')
      .toUpperCase();
    if (!/^[A-Z]*$/g.test(tmp)) continue;
    arr.push(tmp);
  }
  return arr;
}

function countElement(arr, el) {
  return arr.filter((c) => c === el).length;
}
