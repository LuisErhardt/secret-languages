/**
 * Converts a given text to Gruefnisch language.
 * @param {string} text - The input text to be converted.
 * @returns {string} - The converted text in Gruefnisch.
 */
export function toGruefnisch(text: string): string {
  const replacements: Record<string, string> = {
    "a": "nafa",
    "e": "nefe",
    "i": "nifi",
    "o": "nofo",
    "u": "nufu",
    "ä": "näfä",
    "ö": "nöfö",
    "ü": "nüfü",
  };

  const vocals = ["a", "e", "i", "o", "u", "ä", "ö", "ü"];
  let isDiphtong = false;

  return text.replace(/./gi, (char, index, str) => {
    const lower = char.toLowerCase();
    const next = str[index + 1]?.toLowerCase();

    if (isDiphtong) {
      isDiphtong = false;
      return char;
    }

    if (vocals.includes(lower)) {
      isDiphtong = next && vocals.includes(next);
      return char + replacements[lower];
    }
    return char;
  });
}

export function fromGruefnisch(text: string): string {
  const replacements: string[] = ["anafa", "enefe", "inifi", "onofo", "unufu", "änäfä", "önöfö", "ünüfü"];

  const pattern = new RegExp(replacements.join("|"), "gi");

  return text.replace(pattern, (match) => {
    return match[0] === match[0].toUpperCase() ? match[0].toUpperCase() : match[0];
  });
}
