import { initHeader } from "./features/header.js";
import { initBibleNavigator } from "./features/bibleNavigator.js";
import { initSearchModal } from "./features/searchModal.js";

/**
 * Inicialización de la aplicación
*/
function initApp() {
  console.log("Inicializando LogosApp");

  initHeader();
  initBibleNavigator();
  initSearchModal();
}

document.addEventListener("astro:page-load", initApp);

initApp();
