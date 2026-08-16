import { byId, show, hide } from "../../lib/ui.js";
import { Events, on, emit } from "../../lib/events.js";

export function initCompareModal() {
  const overlay = byId("compare-overlay");
  const content = byId("compare-content");
  const loader = byId("compare-loader");
  const title = byId("compare-title");
  const closeButton = byId("close-compare");
  const compareButtons = document.querySelectorAll("[data-compare]");

  if (!overlay || !content || !loader || !title) {
    return;
  }

  console.log("CompareModal inicializado");

  async function openCompare(book, chapter, verse) {
    console.log("OPEN_COMPARE recibido:", book, chapter, verse);

    show(overlay);
    document.body.style.overflow = "hidden";

    content.innerHTML = "";
    content.appendChild(loader);

    show(loader);

    title.textContent = `${book} ${chapter}:${verse}`;

    try {
      const response = await fetch(
        `/api/compare?book=${encodeURIComponent(book)}&chapter=${chapter}&verse=${verse}`
      );

      if (!response.ok) {
        throw new Error("Error en el servidor local");
      }

      const data = await response.json();

      hide(loader);

      if (!data || data.length === 0) {
        const displayName = book.charAt(0).toUpperCase() + book.slice(1);

        content.innerHTML = `
          <div class="text-center mt-10">
            <p class="text-gray-500 text-sm">
              No se encontraron versiones para "${displayName}".
            </p>
          </div>
        `;

        return;
      }

      renderVerses(data);
    } catch (error) {
      console.error("Error al comparar versículo:", error);

      hide(loader);

      content.innerHTML = `
        <div class="text-center mt-10 text-red-400 text-xs uppercase tracking-widest">
          Error de sincronización
        </div>
      `;
    }
  }

  function closeCompare() {
    console.log("CLOSE_COMPARE recibido");

    hide(overlay);
    document.body.style.overflow = "";
  }

  function renderVerses(data) {
    content.innerHTML = data
      .map((item) => {
        const version = item.version_id || item.version_name || item.version || "VERSIÓN";

        const text = item.text || "Sin contenido";

        return `
          <div
            class="p-5 bg-white/[0.03] border border-white/5 rounded-3xl hover:bg-white/[0.06] transition-all group mb-4"
          >
            <div class="flex justify-between items-center mb-3">
              <span
                class="text-[12px] font-black text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2.5 py-1 rounded-full"
              >
                ${version}
              </span>
            </div>

            <p
              class="text-gray-300 text-[18px] leading-relaxed font-serif selection:bg-blue-500/30"
            >
              ${text}
            </p>
          </div>
        `;
      })
      .join("");
  }

  on(Events.OPEN_COMPARE, (event) => {
    const { book, chapter, verse } = event.detail;

    openCompare(book, chapter, verse);
  });

  compareButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const book = button.dataset.book;
      const chapter = Number(button.dataset.chapter);
      const verse = Number(button.dataset.verse);

      if (!book || !chapter || !verse) {
        return;
      }

      emit(Events.OPEN_COMPARE, {
        book,
        chapter,
        verse,
      });
    });
  });

  on(Events.CLOSE_COMPARE, closeCompare);

  closeButton?.addEventListener("click", () => {
    emit(Events.CLOSE_COMPARE);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.classList.contains("hidden")) {
      emit(Events.CLOSE_COMPARE);
    }
  });
}
