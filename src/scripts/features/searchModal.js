import { byId, show, hide } from "../../lib/ui";
import { Events, on } from "../../lib/events";

export function initSearchModal() {
  console.log("SearchModal inicializado");

  // const overlay = byId("search-overlay");
  // const input = byId<HTMLInputElement>("search-input");
  // const closeButton = byId("close-search");

  // if (!overlay || !input || !closeButton) return;

  const overlay = byId("search-overlay");
  if (!overlay) return;

  const input = byId<HTMLInputElement>("search-input");
  if (!input) return;

  const closeButton = byId("close-search");
  if (!closeButton) return;

  function resetSearch() {
    input.value = "";

    const stats = byId("search-stats");
    const count = byId("results-count");
    const results = byId("search-results");

    stats?.classList.add("hidden");

    if (count) count.textContent = "0";

    if (results) {
      results.innerHTML = `
			<p class="text-gray-500 text-center mt-10 text-sm italic">
				Empieza a escribir...
			</p>`;
    }
  }

  function openSearch() {
    show(overlay);

    requestAnimationFrame(() => {
      input.focus();
    });
  }

  function closeSearch() {
    resetSearch();
    hide(overlay);
  }

  on(Events.OPEN_SEARCH, openSearch);

  on(Events.CLOSE_SEARCH, closeSearch);

  closeButton.addEventListener("click", closeSearch);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.classList.contains("hidden")) {
      closeSearch();
    }
  });
}
