import { c as createComponent } from './astro-component_DN2QOEjp.mjs';
import 'piccolore';
import { n as createRenderInstruction, r as renderTemplate, o as renderSlot, p as renderHead, h as addAttribute, m as maybeRenderHead, q as renderComponent } from './entrypoint_iIWVNFs0.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="dark"> <head><meta charset="UTF-8"><meta name="description" content="LogosApp - Lector Bíblico Minimalista"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", '</head> <body class="bg-[#121212] text-[#E0E0E0] min-h-screen"> ', ' <script type="module" src="/src/scripts/app.js"><\/script> </body> </html> '])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/jose/Public/projects/web/logosapp/src/layouts/Layout.astro", void 0);

const $$SearchModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SearchModal;
  const { currentVersion = "rv1960" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="search-modal-overlay"${addAttribute(currentVersion, "data-version")} class="fixed inset-0 z-[60] bg-[#121212] hidden flex flex-col"> <div class="border-b border-white/10 bg-[#121212]"> <div class="max-w-screen-md mx-auto flex items-center gap-3 p-4"> <button id="btn-close-search-modal" class="p-2 -ml-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all active:scale-90" aria-label="Volver"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <input type="text" id="search-modal-input" placeholder="Buscar palabra o frase..." class="flex-1 bg-transparent text-white outline-none text-lg" autocomplete="off"> <div id="search-modal-loading" class="hidden animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div> </div> </div> <div class="flex-1 overflow-y-auto bg-[#121212]"> <div class="max-w-screen-md mx-auto px-3 md:px-6 py-10"> <div id="search-modal-stats" class="flex flex-col items-center justify-center mb-5 hidden"> <span class="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] bg-blue-500/10 px-4 py-1.5 rounded-full"> <span id="results-count">0</span> Versículos encontrados
</span> <div class="h-[1px] w-8 bg-white/10 mt-6"></div> </div> <div id="search-modal-results" class="space-y-6"> <p class="text-gray-500 text-center mt-10 text-sm italic">
Empieza a escribir para buscar en ${currentVersion.toUpperCase()}...
</p> </div> </div> </div> </div>`;
}, "/home/jose/Public/projects/web/logosapp/src/components/SearchModal.astro", void 0);

const $$CompareModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="compare-overlay" class="fixed inset-0 z-[70] bg-[#09090b]/95 backdrop-blur-sm hidden flex flex-col"> <!-- Header del Modal --> <div class="border-b border-white/10 bg-[#121212]"> <div class="max-w-screen-md mx-auto flex items-center justify-between p-4"> <div> <h3 id="compare-title" class="text-blue-400 font-bold uppercase tracking-widest text-[12px]">
Comparar Versículo
</h3> <p id="compare-subtitle" class="text-gray-500 text-[11px] uppercase tracking-tighter mt-0.5">
Múltiples versiones
</p> </div> <button id="close-compare" class="text-gray-400 hover:text-white p-2 transition-transform active:scale-90"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <div class="flex-1 overflow-y-auto bg-[#121212]"> <div class="max-w-screen-md mx-auto px-3 md:px-6 py-5"> <div id="compare-content" class="space-y-6"> <div id="compare-loader" class="flex flex-col items-center justify-center mt-20 gap-3"> <div class="animate-spin h-6 w-6 border-2 border-blue-500 border-t-transparent rounded-full"></div> <p class="text-gray-500 text-[10px] tracking-[0.2em] uppercase">
Buscando versiones...
</p> </div> </div> </div> </div> </div>`;
}, "/home/jose/Public/projects/web/logosapp/src/components/CompareModal.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const { version, book, chapter } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-[#121212]/90 backdrop-blur-md border-b border-gray-800"> <div class="max-w-screen-md mx-auto px-4 h-16 flex items-center justify-between"> <button id="btn-open-bible-navigator" class="flex flex-col sm:flex-row sm:items-center group gap-1 sm:gap-3 text-left cursor-pointer"> <!-- CONTENEDOR DE LA VERSIÓN --> <span class="text-[14px] sm:text-xs font-bold tracking-widest text-blue-400 uppercase leading-none"> ${version} </span> <!-- SEPARADOR 1: Se oculta en móvil y aparece en tablets/desktop --> <span class="text-gray-600 font-light leading-none hidden sm:block">|</span> <!-- CONTENEDOR DE LIBRO + CAPÍTULO --> <div class="flex items-center gap-1 sm:gap-3 leading-none"> <span class="text-[10px] sm:text-xs font-bold tracking-widest text-white/60 uppercase group-hover:text-white transition-colors"> ${book} </span> <span class="text-gray-600 font-light">|</span> <span class="text-[10px] sm:text-xs font-bold tracking-widest text-white/60 uppercase">
Capítulo ${chapter} </span> <span class="text-[8px] text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity ml-1">
▼
</span> </div> </button> <button id="btn-open-search" class="p-2 hover:bg-white/5 rounded-full transition-all cursor-pointer flex items-center justify-center" aria-label="Buscar"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> </div> </header>`;
}, "/home/jose/Public/projects/web/logosapp/src/components/Header.astro", void 0);

const $$SplashScreen = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Pantalla de carga persistente (Splash Screen) -->${maybeRenderHead()}<div id="splash-screen" class="fixed inset-0 z-[100] bg-[#09090b] flex flex-col items-center justify-center transition-opacity duration-500 ease-out"> <div class="relative flex items-center justify-center"> <!-- Animación del Spinner circular --> <div class="h-40 w-40 rounded-full border-t-2 border-b-2 border-blue-500 animate-spin"></div> <!-- Letra Logo central fija --> <div class="absolute text-blue-400 font-black text-lg select-none tracking-widest uppercase animate-pulse">
LogosAPP
</div> </div> <p class="text-xs text-gray-500 uppercase tracking-[0.35em] mt-6 select-none animate-pulse">
Preparando lectura...
</p> </div> ${renderScript($$result, "/home/jose/Public/projects/web/logosapp/src/components/SplashScreen.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jose/Public/projects/web/logosapp/src/components/SplashScreen.astro", void 0);

const $$BibleNavigatorForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BibleNavigatorForm;
  const { currentVersion = "rv1960", currentBook = "genesis", currentChapter = "1" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="bible-selector-container"${addAttribute(currentVersion, "data-version")}${addAttribute(currentBook, "data-book")}${addAttribute(currentChapter, "data-chapter")} class="flex flex-col gap-4 p-6 bg-[#1a1a1a] rounded-t-3xl shadow-2xl border-t border-white/10"> <div class="flex justify-between items-center mb-2"> <h2 class="text-xl font-bold text-white">Navegación</h2> <button id="close-selector-btn" type="button" class="p-2 text-gray-400 hover:bg-white/5 rounded-full cursor-pointer">
✕
</button> </div> <div class="flex flex-col gap-4"> <div class="flex flex-col gap-1"> <label class="text-[10px] font-bold uppercase opacity-50 text-white ml-1">Versión</label> <select id="version-select" class="w-full p-4 rounded-xl bg-[#2a2a2a] text-white outline-none border-2 border-transparent focus:border-blue-500 appearance-none"> <option${addAttribute(currentVersion, "value")}>${currentVersion.toUpperCase()}</option> </select> </div> </div> <div class="flex flex-col gap-1"> <label class="text-[10px] font-bold uppercase opacity-50 text-white ml-1">Libro</label> <select id="book-select" class="w-full p-4 rounded-xl bg-[#2a2a2a] text-white outline-none border-2 border-transparent focus:border-blue-500 appearance-none"> <option${addAttribute(currentBook, "value")}>${currentBook}</option> </select> </div> <div class="flex gap-3 mt-2"> <!-- Contenedor de Capítulo al 50% --> <div class="w-1/2"> <label class="text-[10px] font-bold uppercase opacity-50 text-white ml-1"> Capítulo </label> <input type="number" id="chapter-input"${addAttribute(currentChapter, "value")} min="1" class="w-full h-[58px] p-4 rounded-xl bg-[#2a2a2a] text-white outline-none border-2 border-transparent focus:border-blue-500"> </div> <!-- Botón Leer al 50% con cursor pointer --> <div class="w-1/2 flex items-end"> <button id="go-btn" type="button" class="w-full h-[58px] bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 active:scale-95 transition-all cursor-pointer">
LEER
</button> </div> </div> </div>`;
}, "/home/jose/Public/projects/web/logosapp/src/components/BibleNavigatorForm.astro", void 0);

const $$BibleNavigator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BibleNavigator;
  const { version, book, chapter } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="overlay-bible-navigator" class="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm hidden flex items-end justify-center transition-all" data-astro-cid-t6w5vooi> <div class="w-full max-w-screen-md animate-slide-up" data-astro-cid-t6w5vooi> ${renderComponent($$result, "BibleNavigatorForm", $$BibleNavigatorForm, { "version": version, "book": book, "chapter": chapter, "data-astro-cid-t6w5vooi": true })} </div> </div>`;
}, "/home/jose/Public/projects/web/logosapp/src/components/BibleNavigator.astro", void 0);

const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Pagination;
  const { version, book, prevChapter, nextChapter } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="mt-8 pt-6 border-t border-white/10"> <div class="flex flex-row justify-between items-center gap-2"> ${prevChapter ? renderTemplate`<a${addAttribute(`/?version=${version}&book=${book}&chapter=${prevChapter}`, "href")} class="inline-flex items-center gap-1 bg-[#1a1a1a] border border-white/10 text-white px-5 py-4 rounded-full text-[14px] font-sans font-medium hover:bg-[#222] transition-all active:scale-95 cursor-pointer group h-fit"> <span class="text-blue-400 font-bold text-xs leading-none group-hover:-translate-x-0.5 transition-transform">
←
</span> <span class="opacity-70 group-hover:opacity-100 leading-none">
Capítulo ${prevChapter} </span> </a>` : renderTemplate`<div></div>`} ${nextChapter ? renderTemplate`<a${addAttribute(`/?version=${version}&book=${book}&chapter=${nextChapter}`, "href")} class="inline-flex items-center gap-1 bg-[#1a1a1a] border border-white/10 text-white px-6 py-4 rounded-full text-[14px] font-sans font-medium hover:bg-[#222] transition-all active:scale-95 cursor-pointer group h-fit"> <span class="opacity-70 group-hover:opacity-100 leading-none">
Capítulo ${nextChapter} </span> <span class="text-blue-400 font-bold text-xs leading-none group-hover:translate-x-0.5 transition-transform">
→
</span> </a>` : renderTemplate`<div></div>`} </div> </nav>`;
}, "/home/jose/Public/projects/web/logosapp/src/components/Pagination.astro", void 0);

/**
 * Prepara los versículos para su representación.
 *
 * Responsabilidad:
 * - Recibir los datos devueltos por la API.
 * - Normalizar únicamente los campos que necesita la interfaz.
 */
function normalizeVerses(verses = []) {
  const normalizedVerses = [];

  for (const item of verses) {
    normalizedVerses.push({
      verse: item.verse,
      text: item.text,
    });
  }

  return normalizedVerses;
}

const $$VerseList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$VerseList;
  const { verses = [], book = "genesis", chapter = 1 } = Astro2.props;
  const normalizedVerses = normalizeVerses(verses);
  return renderTemplate`${maybeRenderHead()}<article class="bible-text text-xl md:text-2xl font-serif leading-tight md:leading-relaxed text-gray-200 space-y-4"> ${normalizedVerses.map((item) => renderTemplate`<div${addAttribute(`v${item.verse}`, "id")} class="verse-paragraph block group transition-all p-1 -mx-1 rounded-lg hover:bg-white/[0.02]"> <button type="button" data-compare${addAttribute(book, "data-book")}${addAttribute(chapter, "data-chapter")}${addAttribute(item.verse, "data-verse")} class="inline-block mr-2 text-blue-500/60 font-bold hover:text-blue-400 transition-colors cursor-pointer font-sans text-[1em] align-baseline border-b border-transparent hover:border-blue-400/30"> ${item.verse} </button> <span class="text-gray-300 selection:bg-blue-500/30">${item.text}</span> </div>`)} </article>`;
}, "/home/jose/Public/projects/web/logosapp/src/components/VerseList.astro", void 0);

// Mapa estático oficial de capítulos de los 66 libros de la Biblia
const BIBLE_CHAPTERS = {
	genesis: 50,
	exodo: 40,
	levitico: 27,
	numeros: 36,
	deuteronomio: 34,
	josue: 24,
	jueces: 21,
	rut: 4,
	"1 samuel": 31,
	"2 samuel": 24,
	"1 reyes": 22,
	"2 reyes": 25,
	"1 cronicas": 29,
	"2 cronicas": 36,
	esdras: 10,
	nehemias: 13,
	ester: 10,
	job: 42,
	salmos: 150,
	proverbios: 31,
	eclesiastes: 12,
	cantares: 8,
	isaias: 66,
	jeremias: 52,
	lamentaciones: 5,
	ezequiel: 48,
	daniel: 12,
	oseas: 14,
	joel: 3,
	amos: 9,
	abdias: 1,
	jonas: 4,
	miqueas: 7,
	nahum: 3,
	habacuc: 3,
	sofonias: 3,
	hageo: 2,
	zacarias: 14,
	malaquias: 4,
	mateo: 28,
	marcos: 16,
	lucas: 24,
	juan: 21,
	hechos: 28,
	romanos: 16,
	"1 corintios": 16,
	"2 corintios": 13,
	galatas: 6,
	efesios: 6,
	filipenses: 4,
	colosenses: 4,
	"1 tesalonicenses": 5,
	"2 tesalonicenses": 3,
	"1 timoteo": 6,
	"2 timoteo": 4,
	tito: 3,
	filemon: 1,
	hebreos: 13,
	santiago: 5,
	"1 pedro": 5,
	"2 pedro": 3,
	"1 juan": 5,
	"2 juan": 1,
	"3 juan": 1,
	judas: 1,
	apocalipsis: 22,
};

// const API_BASE_URL = "https://logosapi.onrender.com";
const API_BASE_URL = "https://logosapi.vercel.app";

/**
 * Obtiene los versículos de un capítulo bíblico.
 */
async function getChapter(version, book, chapter) {
  const response = await fetch(`${API_BASE_URL}/read/${version}/${book}/${chapter}`);

  if (!response.ok) {
    throw new Error(`Error en LogosAPI: ${response.status}`);
  }

  const data = await response.json();

  return data.results || data.verses || (Array.isArray(data) ? data : []);
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const url = new URL(Astro2.request.url);
  const version = (url.searchParams.get("version") || "rv1960").toLowerCase();
  const book = (url.searchParams.get("book") || "genesis").toLowerCase();
  const capitalizedBook = book.charAt(0).toUpperCase() + book.slice(1);
  const maxChapters = Object.entries(BIBLE_CHAPTERS).find(([key]) => key === book)?.[1] || 50;
  const chapterParam = url.searchParams.get("chapter") || "1";
  const chapter = parseInt(chapterParam, 10) || 1;
  const prevChapter = chapter > 1 ? chapter - 1 : null;
  const nextChapter = chapter < maxChapters ? chapter + 1 : null;
  let verses = [];
  let errorMsg = "";
  try {
    verses = await getChapter(version, book, chapter);
    if (verses.length === 0) {
      console.log("El capítulo no contiene versículos.");
    }
  } catch (error) {
    console.error("Error al cargar el capítulo:", error);
    errorMsg = "Error de conexión. Revisa si la API en Render está activa.";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `LogosApp | ${book} ${chapter}` }, { "default": async ($$result2) => renderTemplate`  ${renderScript($$result2, "/home/jose/Public/projects/web/logosapp/src/pages/index.astro?astro&type=script&index=0&lang.ts")}  ${renderComponent($$result2, "SplashScreen", $$SplashScreen, {})}  ${renderComponent($$result2, "BibleNavigator", $$BibleNavigator, { "version": version, "book": book, "chapter": chapter })}  ${renderComponent($$result2, "Header", $$Header, { "version": version, "book": capitalizedBook, "chapter": chapter })}  ${maybeRenderHead()}<main class="max-w-screen-md mx-auto px-3 md:px-6 py-5"> ${errorMsg && renderTemplate`<div class="p-4 mb-6 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-center"> ${errorMsg} </div>`} <!-- Bible text --> ${renderComponent($$result2, "VerseList", $$VerseList, { "verses": verses, "book": book, "chapter": chapter })} <!-- Paginación integrada al final del texto --> ${renderComponent($$result2, "Pagination", $$Pagination, { "version": version, "book": book, "prevChapter": prevChapter, "nextChapter": nextChapter })} <!-- Search modal --> ${renderComponent($$result2, "SearchModal", $$SearchModal, { "currentVersion": version })} <!-- Comparison Modal --> ${renderComponent($$result2, "CompareModal", $$CompareModal, {})} </main> ${renderScript($$result2, "/home/jose/Public/projects/web/logosapp/src/pages/index.astro?astro&type=script&index=1&lang.ts")} ` })}`;
}, "/home/jose/Public/projects/web/logosapp/src/pages/index.astro", void 0);

const $$file = "/home/jose/Public/projects/web/logosapp/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
