import { initHeader } from "./features/header.js";
import { initBibleNavigator } from "./features/bibleNavigator.js";
import { initSearchModal } from "./features/searchModal.js";

/**
 * Inicialización de la aplicación
 */

let initialized = false;

function initApp() {
  if (initialized) {
    return;
  }

  initialized = true;

  console.log("Inicializando LogosApp");

  initHeader();
  initBibleNavigator();
  initSearchModal();
}

document.addEventListener("astro:page-load", initApp);

initApp();
