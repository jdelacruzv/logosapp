/**
 * Obtener elemento por ID.
 */
export function byId<T extends HTMLElement = HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

/**
 * Mostrar elemento.
 */
export function show(element: HTMLElement | null): void {
  element?.classList.remove("hidden");
}

/**
 * Ocultar elemento.
 */
export function hide(element: HTMLElement | null): void {
  element?.classList.add("hidden");
}
