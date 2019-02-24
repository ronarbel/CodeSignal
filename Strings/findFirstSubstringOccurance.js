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
