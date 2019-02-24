// // -------- naive solution -------- //
// function findFirstSubstringOccurrence(s, x) {
//   const sLets = s.split('');
//   for (let i = 0; i < sLets.length; i += 1) {
//     if (sLets[i] === x[0]) {
//       const sSub = sLets.slice(i, i + x.length).join('');
//       if (sSub === x) return i;
//     }
//   }
//   return -1;
// }

// // -------- sliding window -------- //
// function findFirstSubstringOccurrence(s, x) {
//   let sLets = s.split('');
//   let window = sLets.slice(0, x.length);
//   let i = 0
//   while (i + x.length <= s.length) {
//     if (window.join('') === x) return i;
//     window.shift();
//     window.push(sLets[i + x.length]);
//     i += 1;
//   }
//   return -1;
// }


// -------- optimized sliding window -------- //
function findFirstSubstringOccurrence(s, x) {
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === x[0]) {
      let sub = s.slice(i, i + x.length);
      if (sub === x) return i
    }
  }
  return -1;
}

// -------- test case workaround -------- //
// find if last character mataches, slice backwards, compare to x
function findFirstSubstringOccurrence(s, x) {
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === x[x.length - 1]) {
      let sub = s.slice(i - x.length + 1, i + 1);
      if (sub === x) {
        return i - x.length + 1
      }
    }
  }
  return -1;
}
