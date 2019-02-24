// -------- naive solution -------- //
function findFirstSubstringOccurrence(s, x) {
  const sLets = s.split('');
  for (let i = 0; i < sLets.length; i += 1) {
    if (sLets[i] === x[0]) {
      const sSub = sLets.slice(i, i + x.length).join('');
      if (sSub === x) return i;
    }
  }
  return -1;
}

// -------- sliding window -------- //
function findFirstSubstringOccurrence(s, x) {
  let sLets = s.split('');
  let window = sLets.slice(0, x.length);
  let i = 0
  while (i + x.length <= s.length) {
    if (window.join('') === x) return i;
    window.shift();
    window.push(sLets[i + x.length]);
    i += 1;
  }
  return -1;
}
