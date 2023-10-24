function solution(book_time) {
  book_time.sort();

  const rooms = [];
  for (const [itStr, otStr] of book_time) {
    const [it, ot] = [calculateMin(itStr), calculateMin(otStr) + 10];
    let minOt = Infinity;
    let roomNumber;
    for (let i = 0; i < rooms.length; ++i) {
      if (!rooms[i].length) break;
      const last = rooms[i].at(-1);
      if (last < minOt) {
        minOt = last;
        roomNumber = i;
      }
    }
    if (minOt > it) rooms.push([ot]);
    else rooms[roomNumber].push(ot);
  }

  return rooms.length;
}

function calculateMin(str) {
  const [h, m] = str.split(':').map(Number);
  return h * 60 + m;
}
