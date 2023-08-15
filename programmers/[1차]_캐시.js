function solution(cacheSize, cities) {
  let cache = [];
  let result = 0;
  for (const city of cities) {
    const i = cache.indexOf(city.toLowerCase());
    result += i >= 0 ? 1 : 5;
    if (i >= 0) cache = [...cache.slice(0, i), ...cache.slice(i + 1)];
    cache.push(city.toLowerCase());
    if (cache.length > cacheSize) cache = cache.slice(1);
  }
  return result;
}
