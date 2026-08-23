const STORAGE_KEY = "logosapp:last-position";

/**
 * Guarda la última posición de lectura.
 */
export function saveLastPosition(version, book, chapter) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: String(version).toLowerCase(),
        book: String(book).toLowerCase(),
        chapter: Number(chapter),
      })
    );
  } catch (error) {
    console.error("Error al guardar la última posición:", error);
  }
}

/**
 * Recupera la última posición de lectura.
 */
export function getLastPosition() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return null;
    }

    const position = JSON.parse(stored);

    if (
      !position?.version ||
      !position?.book ||
      !Number.isInteger(position?.chapter) ||
      position.chapter < 1
    ) {
      return null;
    }

    return position;
  } catch (error) {
    console.error("Error al recuperar la última posición:", error);
    return null;
  }
}
