function solution(keymap, targets) {
  return targets.map((target) =>
    [...target].reduce((result, c) => {
      if (result < 0) return -1;
      let i;
      keymap.forEach((key) => {
        const tmp = key.indexOf(c);
        if (i === undefined || i < 0) i = tmp;
        else if (tmp >= 0 && tmp < i) i = tmp;
      });
      return i < 0 ? -1 : result + i + 1;
    }, 0)
  );
}
