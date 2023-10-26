function solution(rows, columns, queries) {
  const arr = Array(rows)
    .fill(0)
    .map((_, i) =>
      Array(columns)
        .fill(i * columns + 1)
        .map((e, j) => e + j)
    );
  const result = [];
  for (const query of queries) {
    const [is, js, ie, je] = query.map((e) => e - 1);
    const copied = copyArray(arr);
    let min = Infinity;
    let [i, j] = [is, js];
    i = is;
    for (j = js + 1; j <= je; ++j) {
      // 오른쪽 이동
      arr[i][j] = copied[i][j - 1];
      if (arr[i][j] < min) min = arr[i][j];
    }
    j = je;
    for (i = is + 1; i <= ie; ++i) {
      // 아래쪽 이동
      arr[i][j] = copied[i - 1][j];
      if (arr[i][j] < min) min = arr[i][j];
    }
    i = ie;
    for (j = je - 1; j >= js; --j) {
      // 왼쪽 이동
      arr[i][j] = copied[i][j + 1];
      if (arr[i][j] < min) min = arr[i][j];
    }
    j = js;
    for (i = ie - 1; i >= is; --i) {
      // 위쪽 이동
      arr[i][j] = copied[i + 1][j];
      if (arr[i][j] < min) min = arr[i][j];
    }
    result.push(min);
  }
  return result;
}

function copyArray(arr) {
  const result = Array(arr.length)
    .fill(0)
    .map((_) => Array(arr[0].length).fill(0));
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr[0].length; ++j) {
      result[i][j] = arr[i][j];
    }
  }
  return result;
}
