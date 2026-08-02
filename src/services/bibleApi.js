const API_BASE_URL = "https://logosapi.onrender.com";

/**
 * Busca versículos en una versión bíblica.
 */
export async function searchBible(version, query) {
  const cleanQuery = query.trim();

  if (cleanQuery.length < 3) {
    return [];
  }

  const response = await fetch(
    `${API_BASE_URL}/search/${version}?q=${encodeURIComponent(cleanQuery)}`
  );

  if (!response.ok) {
    throw new Error(`Error en LogosAPI: ${response.status}`);
  }

  const data = await response.json();

  return Array.isArray(data) ? data : data.results || [];
}

/**
 * Obtiene los versículos de un capítulo bíblico.
 */
export async function getChapter(version, book, chapter) {
  const response = await fetch(
    `${API_BASE_URL}/read/${version}/${book}/${chapter}`
  );

  if (!response.ok) {
    throw new Error(`Error en LogosAPI: ${response.status}`);
  }

  const data = await response.json();

  return data.results || data.verses || (Array.isArray(data) ? data : []);
}
