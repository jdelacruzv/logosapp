import { byId, show, hide } from "../../lib/ui.js";
import { Events, on, emit } from "../../lib/events.js";
import { searchBible } from "../../services/bibleApi.js";

let debounceTimer = null;

export function initSearchModal() {
  const searchOverlay = byId("search-modal-overlay");
  const searchInput = byId("search-modal-input");
  const statsContainer = byId("search-modal-stats");
  const countElement = byId("results-count");
  const searchResults = byId("search-modal-results");
  const loading = byId("search-modal-loading");
  const closeBtn = byId("btn-close-search-modal");

  if (!searchOverlay || !searchInput) {
    return;
  }

  const version = searchOverlay.dataset.version || "rv1960";

  console.log("SearchModal inicializado");

  function openSearch() {
    console.log("OPEN_SEARCH recibido");

    show(searchOverlay);

    requestAnimationFrame(() => {
      searchInput.focus();
    });
  }

  function closeSearch() {
    console.log("CLOSE_SEARCH recibido");

    resetSearch();
    hide(searchOverlay);
  }

  on(Events.OPEN_SEARCH, openSearch);
  on(Events.CLOSE_SEARCH, closeSearch);

  function resetSearch() {
    searchInput.value = "";

    hide(statsContainer);

    if (countElement) {
      countElement.textContent = "0";
    }

    if (searchResults) {
      searchResults.innerHTML = `
				<p class="text-gray-500 text-center mt-10 text-sm italic">
					Empieza a escribir para buscar en ${version.toUpperCase()}...
				</p>
			`;
    }
  }

  async function performSearch(query) {
    const cleanQuery = query.trim();

    if (cleanQuery.length < 3) {
      hide(statsContainer);

      if (searchResults) {
        searchResults.innerHTML = `
          <p class="text-gray-500 text-center mt-10 text-sm italic">
            Escribe al menos 3 letras...
          </p>
        `;
      }

      return;
    }

    show(loading);

    try {
      const results = await searchBible(version, cleanQuery);

      renderResults(results);
    } catch (error) {
      console.error("Error en la búsqueda:", error);

      if (searchResults) {
        searchResults.innerHTML = `
          <p class="text-red-400 text-center mt-10 text-sm">
            Error al conectar con el servidor.
          </p>
        `;
      }

      hide(statsContainer);
    } finally {
      hide(loading);
    }
  }

  function renderResults(data) {
    const results = Array.isArray(data) ? data : data.results || [];

    if (results.length > 0 && countElement) {
      countElement.textContent = results.length;
      show(statsContainer);
    } else {
      hide(statsContainer);
    }

    if (results.length === 0) {
      searchResults.innerHTML = `
				<div class="text-center mt-20 px-6">
					<p class="text-gray-400 text-lg mb-2">
						Sin resultados
					</p>

					<p class="text-gray-600 text-sm italic">
						No se encontraron versículos para esta búsqueda.
					</p>
				</div>
			`;

      return;
    }

    searchResults.innerHTML = results
      .map((item) => {
        const book = item.book || item.book_name || "Libro";

        const chapter = item.chapter || 0;
        const verse = item.verse || 0;

        const text = item.text || item.verse_text || item.content || "Sin contenido";

        const href =
          `/?version=${version}` +
          `&book=${book.toLowerCase()}` +
          `&chapter=${chapter}` +
          `#v${verse}`;

        return `
					<a
						href="${href}"
						class="block p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all active:scale-[0.98] group"
					>
						<div class="flex items-center justify-between mb-2">
							<span class="text-blue-400 text-[12px] font-bold uppercase tracking-[0.1em]">
								${book} ${chapter}:${verse}
							</span>
						</div>

						<p class="text-gray-300 text-[18px] leading-relaxed font-serif opacity-80 group-hover:opacity-100">
							${text}
						</p>
					</a>
				`;
      })
      .join("");
  }

  // Búsqueda en tiempo real
  function handleSearchInput(event) {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      performSearch(event.target.value);
    }, 400);
  }

  searchInput.addEventListener("input", handleSearchInput);

  // Cerrar modal con el botón de cerrar
  closeBtn?.addEventListener("click", () => {
    emit(Events.CLOSE_SEARCH);
  });

  // Cerrar modal con la tecla ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !searchOverlay.classList.contains("hidden")) {
      emit(Events.CLOSE_SEARCH);
    }
});
}
