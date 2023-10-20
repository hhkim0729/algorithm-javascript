function solution(m, musicinfos) {
  let result = '';
  let maxDuration = 0;
  m = replaceSharp(m);
  for (const music of musicinfos) {
    const [s, e, title, orgMelody] = music.split(',');
    const melody = replaceSharp(orgMelody);
    const duration = getDuration(s, e);
    const length = melody.length;
    const played =
      melody.repeat(Math.trunc(duration / length)) +
      melody.slice(0, duration % length);
    if (played.includes(m) && duration > maxDuration) {
      result = title;
      maxDuration = duration;
    }
  }
  return result ? result : '(None)';
}

function replaceSharp(str) {
  return str.replace(/\w#/g, (w) => w[0].toLowerCase());
}

function getDuration(s, e) {
  const [sh, sm] = s.split(':').map(Number);
  const [eh, em] = e.split(':').map(Number);
  return eh * 60 + em - (sh * 60 + sm);
}
