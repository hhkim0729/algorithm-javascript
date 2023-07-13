function solution(participant, completion) {
  // participant.sort();
  // completion.sort();
  // let i = 0;
  // for (; i < participant.length; ++i) {
  //     if (i === participant.length - 1 || participant[i] !== completion[i]) {
  //         break;;
  //     }
  // }
  // return participant[i];

  const map = new Map();
  participant.forEach((e) => map.set(e, (map.get(e) || 0) + 1));
  completion.forEach((e) => map.set(e, map.get(e) - 1));
  return [...map].map((arr) => (arr[1] > 0 ? arr[0] : '')).join('');
}
