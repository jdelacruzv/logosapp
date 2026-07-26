/**
 * Obtener elemento por ID.
 */
export function byId(id) {
	return document.getElementById(id);
}

/**
 * Mostrar elemento.
 */
export function show(element) {
	element?.classList.remove("hidden");
}

/**
 * Ocultar elemento.
 */
export function hide(element) {
  element?.classList.add("hidden");
}
