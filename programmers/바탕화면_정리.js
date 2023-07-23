function solution(wallpaper) {
  let [lux, luy, rdx, rdy] = [Infinity, Infinity, -1, -1];
  wallpaper.forEach((str, x) => {
    const [first, last] = [str.indexOf('#'), str.lastIndexOf('#')];
    if (first < 0) return;
    if (x < lux) lux = x;
    if (first < luy) luy = first;
    if (x > rdx) rdx = x;
    if (last > rdy) rdy = last;
  });
  return [lux, luy, rdx + 1, rdy + 1];
}
