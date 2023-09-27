function solution(files) {
  const arr = files.map((file) => {
    let i = 0;
    while (isNaN(file[i]) || file[i] === ' ') ++i;
    const head = file.slice(0, i);
    let j = i;
    while (!isNaN(file[j])) ++j;
    const number = file.slice(i, j);
    const tail = file.slice(j);
    return [head, number, tail];
  });

  arr.sort((a, b) => {
    const [ah, bh] = [a[0].toLowerCase(), b[0].toLowerCase()];
    const [an, bn] = [Number(a[1]), Number(b[1])];
    if (ah === bh && an === bn) return 0;
    if (ah < bh) return -1;
    if (ah === bh && an < bn) return -1;
    return 1;
  });
  return arr.map((a) => a.join(''));
}
