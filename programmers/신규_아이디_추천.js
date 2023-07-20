function solution(new_id) {
  let result = new_id
    .toLowerCase()
    .match(/[a-z0-9-_\.]/g)
    .join('')
    .replaceAll(/[\.]+/g, '.')
    .replace(/^\./, '')
    .replace(/\.$/, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');
  if (result.length < 3)
    result = result + result.at(-1).repeat(3 - result.length);
  return result;
}
