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
