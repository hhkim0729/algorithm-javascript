function solution(name, yearning, photo) {
  return photo.map((arr) =>
    arr.reduce((result, e) => {
      const i = name.indexOf(e);
      return result + (i < 0 ? 0 : yearning[i]);
    }, 0)
  );
}
