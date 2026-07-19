/**
 * Ejecuta una función cuando la aplicación
 * termina de inicializarse.
 */
export function onLogosInit(callback: () => void): void {
  callback();
  document.addEventListener("logos:init", callback);
}
