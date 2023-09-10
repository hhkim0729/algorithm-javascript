function solution(phone_book) {
  phone_book.sort();
  let curr;
  for (const num of phone_book) {
    if (!num.startsWith(curr)) {
      curr = num;
      continue;
    } else {
      return false;
    }
  }
  return true;
}
