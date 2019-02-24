function amendTheSentence(s) {
  const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letters = s.split('');
  for (let i = 0; i < letters.length; i += 1) {
    if (uppers.includes(letters[i])) {
      letters[i] = ' '.concat(letters[i]);
    }
  }
  return letters.join('').toLowerCase().trim();
}
