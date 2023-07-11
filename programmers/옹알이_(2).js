function solution(babbling) {
  const ables = ['aya', 'ye', 'woo', 'ma'];
  return babbling.reduce((result, e) => {
    for (let i = 0; i < ables.length; ++i) {
      if (e.includes(ables[i].repeat(2))) return result;
    }

    for (let i = 0; i < ables.length; ++i) {
      e = e.replaceAll(ables[i], ' ');
    }
    if (e.replaceAll(' ', '')) return result;
    return result + 1;
  }, 0);
}
