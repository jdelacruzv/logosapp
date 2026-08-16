import { initHeader } from "./features/header.js";
import { initBibleNavigator } from "./features/bibleNavigator.js";
import { initBibleNavigatorForm } from "./features/bibleNavigatorForm.js";
import { initSearchModal } from "./features/searchModal.js";
import { initCompareModal } from "./features/compareModal.js";

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
  initBibleNavigatorForm();
  initSearchModal();
  initCompareModal();
}

document.addEventListener("astro:page-load", initApp);

initApp();
