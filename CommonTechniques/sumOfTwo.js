function sumOfTwo(a, b, v) {
  const aSet = new Set(a);
  for (let i = 0; i < b.length; i += 1) {
    if (aSet.has(v - b[i])) return true;
  }
  return false;
}
