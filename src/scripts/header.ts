import { byId } from "../lib/ui";
import { emit, Events } from "../lib/events";

export function initHeader() {
  console.log("Header inicializado");

  const btnOpenBibleNavigator = byId("btn-open-bible-navigator");
  const btnOpenSearch = byId("btn-open-search");

  if (btnOpenBibleNavigator) {
    btnOpenBibleNavigator.addEventListener("click", () => {
      console.log("Click Header");
      
      emit(Events.OPEN_BIBLE_NAVIGATOR);
    });
  }

  if (btnOpenSearch) {
    btnOpenSearch.addEventListener("click", () => {
      emit(Events.OPEN_SEARCH);
    });
  }
}
