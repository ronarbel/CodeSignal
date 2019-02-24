// -------- initial solution -------- //
// function containsDuplicates(a) {
//   const seen = new Set();
//   for (let i = 0; i < a.length; i += 1) {
//     if (seen.has(a[i])) {
//       return true;
//     }
//     seen.add(a[i]);
//   }
//   return false;
// }

// -------- optimied syntax -------- //
const containsDuplicates = (a) => {
  return a.length > new Set(a).size;
};
