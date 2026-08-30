// const API_BASE_URL = "https://logosapi.onrender.com";
const API_BASE_URL = "https://logosapi.vercel.app";

/**
 * Obtiene las versiones bíblicas disponibles.
 */
export async function getBibleVersions() {
  const response = await fetch(`${API_BASE_URL}/info/versions`);

  if (!response.ok) {
    throw new Error(`Error en LogosAPI: ${response.status}`);
  }

  const data = await response.json();

  return Array.isArray(data) ? data : [];
}

/**
 * Obtiene los libros disponibles de una versión bíblica.
 */
export async function getBibleBooks(version) {
  const response = await fetch(`${API_BASE_URL}/info/${version}/books`);

  if (!response.ok) {
    throw new Error(`Error en LogosAPI: ${response.status}`);
  }

  const data = await response.json();

  return Array.isArray(data.books) ? data.books : [];
}

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
  const response = await fetch(`${API_BASE_URL}/read/${version}/${book}/${chapter}`);

  if (!response.ok) {
    throw new Error(`Error en LogosAPI: ${response.status}`);
  }

  const data = await response.json();

  return data.results || data.verses || (Array.isArray(data) ? data : []);
}
