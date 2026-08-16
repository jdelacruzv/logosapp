/**
 * Eventos globales de LogosApp.
 */
export const Events = {
  LOGOS_INIT: "logos:init",

  OPEN_BIBLE_NAVIGATOR: "logos:open-bible-navigator",
  CLOSE_BIBLE_NAVIGATOR: "logos:close-bible-navigator",

  OPEN_SEARCH: "logos:open-search",
  CLOSE_SEARCH: "logos:close-search",

  OPEN_COMPARE: "logos:open-compare",
  CLOSE_COMPARE: "logos:close-compare",
};

/**
 * Ejecuta una función cuando la aplicación
 * termina de inicializarse.
 */
export function onLogosInit(callback) {
  callback();
  document.addEventListener("logos:init", callback);
}

/**
 * Emitir un evento personalizado.
 *
 * @param {string} eventName
 * @param {object} detail
 */
export function emit(eventName, detail = {}) {
  document.dispatchEvent(
    new CustomEvent(eventName, {
      detail,
    })
  );
}

/**
 * Escuchar un evento personalizado.
 * Devuelve una función para cancelar la suscripción.
 */
export function on(eventName, callback) {
  document.addEventListener(eventName, callback);

  return () => {
    document.removeEventListener(eventName, callback);
  };
}
