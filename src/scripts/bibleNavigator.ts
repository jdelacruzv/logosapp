import { byId, show, hide } from "../lib/ui";
import { Events, on } from "../lib/events";

export function initBibleNavigator() {
  console.log("BibleNavigator inicializado");

  const overlay = byId("overlay-bible-navigator");

  if (!overlay) return;

  function openNavigator() {
    console.log("OPEN_BIBLE_NAVIGATOR");
    show(overlay);
  }

  function closeNavigator() {
    hide(overlay);
  }

  function handleOverlayClick(event: MouseEvent) {
    if (event.target === overlay) {
      closeNavigator();
    }
  }

  on(Events.OPEN_BIBLE_NAVIGATOR, openNavigator);
  on(Events.CLOSE_BIBLE_NAVIGATOR, closeNavigator);

  overlay.addEventListener("click", handleOverlayClick);
}
