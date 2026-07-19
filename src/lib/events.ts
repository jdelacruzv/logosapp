/**
 * Ejecuta una función cuando la aplicación
 * termina de inicializarse.
 */
export function onLogosInit(callback: () => void): void {
  callback();
  document.addEventListener("logos:init", callback);
}

/**
 * Emitir un evento personalizado.
 */
export function emit(eventName: string): void {
	document.dispatchEvent(new Event(eventName));
}

/**
 * Escuchar un evento personalizado.
 */
export function on(
	eventName: string,
	callback: EventListener,
): void {
	document.addEventListener(eventName, callback);
}
