import { initHeader } from "./features/header";
import { initBibleNavigator } from "./features/bibleNavigator";
import { initSearchModal } from "./features/searchModal";

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
