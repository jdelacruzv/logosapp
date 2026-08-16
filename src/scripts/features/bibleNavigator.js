import { byId, show, hide } from "../../lib/ui.js";
import { Events, on } from "../../lib/events.js";

/**
 * Inicializa el navegador bíblico.
 *
 * Responsabilidades:
 * - Abrir el overlay.
 * - Cerrar el overlay.
 * - Cerrar al pulsar fuera.
 */
export function initBibleNavigator() {
  console.log("BibleNavigator inicializado");

  const overlay = byId("overlay-bible-navigator");

  if (!overlay) return;

  function openNavigator() {
    console.log("OPEN_BIBLE_NAVIGATOR");
    show(overlay);
  }

  function closeNavigator() {
    console.log("CLOSE_BIBLE_NAVIGATOR");
    hide(overlay);
  }

  function handleOverlayClick(event) {
    if (event.target === overlay) {
      closeNavigator();
    }
  }

  on(Events.OPEN_BIBLE_NAVIGATOR, openNavigator);
  on(Events.CLOSE_BIBLE_NAVIGATOR, closeNavigator);

  overlay.addEventListener("click", handleOverlayClick);
}
