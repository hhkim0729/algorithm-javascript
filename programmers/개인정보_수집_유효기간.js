function solution(today, terms, privacies) {
  const [tYear, tMonth, tDate] = today.split('.').map((e) => Number(e));
  const termsObj = {};
  terms
    .map((e) => e.split(' '))
    .forEach((e) => (termsObj[e[0]] = Number(e[1])));

  const result = [];
  privacies.forEach((privacy, i) => {
    const [tmp, term] = privacy.split(' ');
    let [year, month, date] = tmp.split('.').map((e) => Number(e));
    month += termsObj[term];

    const todayTotal = tYear * 12 * 28 + tMonth * 28 + tDate;
    const expiredTotal = year * 12 * 28 + month * 28 + date;
    if (todayTotal >= expiredTotal) result.push(i + 1);
  });
  return result;
}
