import { byId } from "../lib/ui.js";
import { getBibleVersions, getBibleBooks } from "../services/bibleApi.js";
import { BIBLE_CHAPTERS } from "../utils/bible_chapters.js";

/**
 * Inicializa el formulario de navegación bíblica.
 */
export function initBibleNavigatorForm() {
  const container = byId("bible-selector-container");

  if (!container) {
    return;
  }

  const currentVersion = container.dataset.version || "rv1960";
  const currentBook = container.dataset.book || "genesis";
  const currentChapter = container.dataset.chapter || "1";

  const versionSelect = byId("version-select");
  const bookSelect = byId("book-select");
  const chapterInput = byId("chapter-input");
  const goButton = byId("go-btn");
  const closeButton = byId("close-selector-btn");

  console.log("BibleNavigatorForm inicializado");

  async function loadVersions() {
    try {
      const versions = await getBibleVersions();

      if (!versionSelect) {
        return;
      }

      versionSelect.innerHTML = versions
        .filter((version) => version != null)
        .map((version) => {
          const value =
            typeof version === "object"
              ? version.table || version.name || Object.values(version)[0]
              : String(version);

          const selected =
            String(value).toLowerCase() === currentVersion.toLowerCase() ? "selected" : "";

          return `
            <option value="${value}" ${selected}>
              ${String(value).toUpperCase()}
            </option>
          `;
        })
        .join("");
    } catch (error) {
      console.error("Error en versiones:", error);
    }
  }

  async function loadBooks() {
    try {
      const books = await getBibleBooks(currentVersion);

      if (!bookSelect) {
        return;
      }

      bookSelect.innerHTML = books
        .filter((book) => book != null)
        .map((book) => {
          const bookName = String(book);

          const selected = bookName.toLowerCase() === currentBook.toLowerCase() ? "selected" : "";

          return `
            <option value="${bookName.toLowerCase()}" ${selected}>
              ${bookName}
            </option>
          `;
        })
        .join("");
    } catch (error) {
      console.error("Error en libros:", error);
    }
  }

  function getMaxChapters(book) {
    return Object.entries(BIBLE_CHAPTERS).find(([key]) => key === book.toLowerCase())?.[1] || 50;
  }

  function validateChapterLimit() {
    if (!bookSelect || !chapterInput) {
      return;
    }

    const selectedBook = bookSelect.value.toLowerCase();
    const maxChapters = getMaxChapters(selectedBook);

    chapterInput.setAttribute("max", String(maxChapters));

    let value = parseInt(chapterInput.value, 10) || 1;

    if (value > maxChapters) {
      value = maxChapters;
    }

    if (value < 1) {
      value = 1;
    }

    chapterInput.value = String(value);
  }

  function goToChapter() {
    if (!versionSelect || !bookSelect || !chapterInput) {
      return;
    }

    const version = versionSelect.value;
    const book = bookSelect.value;

    const maxChapters = getMaxChapters(book);

    let chapter = parseInt(chapterInput.value, 10) || 1;

    if (chapter > maxChapters) {
      chapter = maxChapters;
    }

    if (chapter < 1) {
      chapter = 1;
    }

    window.location.href = `/?version=${version}&book=${book}&chapter=${chapter}`;
  }

  if (chapterInput) {
    chapterInput.value = currentChapter;
  }

  bookSelect?.addEventListener("change", validateChapterLimit);

  chapterInput?.addEventListener("input", validateChapterLimit);

  chapterInput?.addEventListener("change", validateChapterLimit);

  goButton?.addEventListener("click", goToChapter);

  closeButton?.addEventListener("click", () => {
    const overlay = byId("overlay-bible-navigator");

    if (overlay) {
      overlay.classList.add("hidden");
    }
  });

  loadVersions();
  loadBooks();
  validateChapterLimit();
}
