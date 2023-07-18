function solution(numbers, hand) {
  let left = 10;
  let right = 11;
  hand = hand === 'left' ? 'L' : 'R';

  return numbers
    .map((n) => {
      if (n % 3 === 1) {
        left = n;
        return 'L';
      } else if (n && n % 3 === 0) {
        right = n;
        return 'R';
      }
      const distL = getDistance(n, left);
      const distR = getDistance(n, right);
      if (distL === distR) {
        left = hand === 'L' ? n : left;
        right = hand === 'R' ? n : right;
        return hand;
      } else if (distL < distR) {
        left = n;
        return 'L';
      } else {
        right = n;
        return 'R';
      }
    })
    .join('');
}

function getDistance(num1, num2) {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    10: [3, 0],
    0: [3, 1],
    11: [3, 2],
  };

  return (
    Math.abs(keypad[num1][0] - keypad[num2][0]) +
    Math.abs(keypad[num1][1] - keypad[num2][1])
  );
}
