function solution(s) {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  return Number(
    numbers.reduce((result, num, i) => result.replaceAll(num, i.toString()), s)
  );
}
