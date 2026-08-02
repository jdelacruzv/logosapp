/**
 * Prepara los versículos para su representación.
 *
 * Responsabilidad:
 * - Recibir los datos devueltos por la API.
 * - Normalizar únicamente los campos que necesita la interfaz.
 */
export function normalizeVerses(verses = []) {
  const normalizedVerses = [];

  for (const item of verses) {
    normalizedVerses.push({
      verse: item.verse,
      text: item.text,
    });
  }

  return normalizedVerses;
}
