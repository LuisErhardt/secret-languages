export function isConsonant(zeichen: string): boolean {
  if (zeichen.length !== 1) {
    throw new Error("Input must be a single character.");
  }

  const letter = zeichen.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u", "ä", "ö", "ü"];

  return /[a-zäöüß]/i.test(letter) && !vowels.includes(letter);
}
