import { emit, Events } from "../../lib/events.js";
import { byId } from "../../lib/ui.js";
import { getBibleBooks, getBibleVersions } from "../../services/bibleApi.js";
import {
  BOOK_FILTER_OPTIONS,
  filterBooksByCategory,
  getBookChapterCount,
  normalizeBookName,
} from "../../utils/bible_chapters.js";

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
  const bookFilterSelect = byId("book-filter-select");
  const bookSelect = byId("book-select");
  const chapterInput = byId("chapter-input");
  const goButton = byId("go-btn");
  const closeButton = byId("close-selector-btn");

  if (bookFilterSelect) {
    bookFilterSelect.innerHTML = BOOK_FILTER_OPTIONS.map(
      (filterOption) => `<option value="${filterOption}">${filterOption}</option>`
    ).join("");
    bookFilterSelect.value = "Todos";
  }

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

  async function loadBooks(version = currentVersion) {
    try {
      const books = await getBibleBooks(version);

      if (!bookSelect) {
        return;
      }

      const selectedCategory = bookFilterSelect?.value || "Todos";
      const availableBooks = books.filter((book) => book != null).map(String);
      const filteredBooks = filterBooksByCategory(availableBooks, selectedCategory);
      const bookOptions = filteredBooks.length > 0 ? filteredBooks : availableBooks;
      const preferredBook = bookSelect.value || currentBook;
      const selectedBook =
        bookOptions.find((book) => normalizeBookName(book) === normalizeBookName(preferredBook)) ||
        bookOptions[0];

      if (!selectedBook) {
        bookSelect.innerHTML = '<option value="">Sin libros disponibles</option>';
        return;
      }

      bookSelect.innerHTML = bookOptions
        .map((bookName) => {
          const bookValue = bookName.toLowerCase();
          const selected =
            normalizeBookName(bookValue) === normalizeBookName(selectedBook) ? "selected" : "";

          return `
            <option value="${bookValue}" ${selected}>
              ${bookName}
            </option>
          `;
        })
        .join("");

      validateChapterLimit();
    } catch (error) {
      console.error("Error en libros:", error);
    }
  }

  function getMaxChapters(book) {
    return getBookChapterCount(book);
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

    chapterInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        goToChapter();
      }
    });
  }

  bookSelect?.addEventListener("change", validateChapterLimit);

  bookFilterSelect?.addEventListener("change", () => {
    loadBooks(versionSelect?.value || currentVersion);
  });

  versionSelect?.addEventListener("change", () => {
    loadBooks(versionSelect.value);
  });

  chapterInput?.addEventListener("input", validateChapterLimit);

  chapterInput?.addEventListener("change", validateChapterLimit);

  goButton?.addEventListener("click", goToChapter);

  closeButton?.addEventListener("click", () => {
    emit(Events.CLOSE_BIBLE_NAVIGATOR);
  });

  loadVersions();
  loadBooks();
  validateChapterLimit();
}
