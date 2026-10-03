// Mapa estático oficial de capítulos de los 66 libros de la Biblia
export function normalizeBookName(book) {
  return String(book)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function formatBookNameForApi(book) {
  return String(book).replace(/\p{L}/u, (letter) => letter.toLocaleUpperCase("es"));
}

export function getBookChapterCount(book) {
  return BIBLE_CHAPTERS[normalizeBookName(book)] ?? 50;
}

export const BOOK_FILTER_OPTIONS = [
  "Todos",
  "Antiguo Testamento",
  "Nuevo Testamento",
  "Evangelios",
  "Epístolas",
  "Pentateuco",
  "Historia",
  "Libros Proféticos",
  "Profetas Mayores",
  "Profetas Menores",
];

export const BOOK_FILTER_GROUPS = {
  "Antiguo Testamento": [
    "genesis",
    "exodo",
    "levitico",
    "numeros",
    "deuteronomio",
    "josue",
    "jueces",
    "rut",
    "1 samuel",
    "2 samuel",
    "1 reyes",
    "2 reyes",
    "1 cronicas",
    "2 cronicas",
    "esdras",
    "nehemias",
    "ester",
    "job",
    "salmos",
    "proverbios",
    "eclesiastes",
    "cantares",
    "isaias",
    "jeremias",
    "lamentaciones",
    "ezequiel",
    "daniel",
    "oseas",
    "joel",
    "amos",
    "abdias",
    "jonas",
    "miqueas",
    "nahum",
    "habacuc",
    "sofonias",
    "hageo",
    "zacarias",
    "malaquias",
  ],
  "Nuevo Testamento": [
    "mateo",
    "marcos",
    "lucas",
    "juan",
    "hechos",
    "romanos",
    "1 corintios",
    "2 corintios",
    "galatas",
    "efesios",
    "filipenses",
    "colosenses",
    "1 tesalonicenses",
    "2 tesalonicenses",
    "1 timoteo",
    "2 timoteo",
    "tito",
    "filemon",
    "hebreos",
    "santiago",
    "1 pedro",
    "2 pedro",
    "1 juan",
    "2 juan",
    "3 juan",
    "judas",
    "apocalipsis",
  ],
  Evangelios: ["mateo", "marcos", "lucas", "juan"],
  Epístolas: [
    "romanos",
    "1 corintios",
    "2 corintios",
    "galatas",
    "efesios",
    "filipenses",
    "colosenses",
    "1 tesalonicenses",
    "2 tesalonicenses",
    "1 timoteo",
    "2 timoteo",
    "tito",
    "filemon",
    "hebreos",
    "santiago",
    "1 pedro",
    "2 pedro",
    "1 juan",
    "2 juan",
    "3 juan",
    "judas",
  ],
  Pentateuco: ["genesis", "exodo", "levitico", "numeros", "deuteronomio"],
  Historia: [
    "josue",
    "jueces",
    "rut",
    "1 samuel",
    "2 samuel",
    "1 reyes",
    "2 reyes",
    "1 cronicas",
    "2 cronicas",
    "esdras",
    "nehemias",
    "ester",
    "hechos",
  ],
  "Libros Proféticos": [
    "isaias",
    "jeremias",
    "lamentaciones",
    "ezequiel",
    "daniel",
    "oseas",
    "joel",
    "amos",
    "abdias",
    "jonas",
    "miqueas",
    "nahum",
    "habacuc",
    "sofonias",
    "hageo",
    "zacarias",
    "malaquias",
  ],
  "Profetas Mayores": ["isaias", "jeremias", "ezequiel", "daniel"],
  "Profetas Menores": [
    "lamentaciones",
    "oseas",
    "joel",
    "amos",
    "abdias",
    "jonas",
    "miqueas",
    "nahum",
    "habacuc",
    "sofonias",
    "hageo",
    "zacarias",
    "malaquias",
  ],
};

export function getBookCategory(book) {
  const key = normalizeBookName(book);

  const category = BOOK_FILTER_OPTIONS.find(
    (option) => option !== "Todos" && BOOK_FILTER_GROUPS[option]?.includes(key)
  );

  return category ?? "Todos";
}

export function filterBooksByCategory(books, category = "Todos") {
  const availableBooks = (books ?? []).filter(Boolean).map(String);

  if (!category || category === "Todos") {
    return availableBooks;
  }

  const groupBooks = BOOK_FILTER_GROUPS[category] ?? [];

  return availableBooks.filter((book) => {
    const normalizedBook = normalizeBookName(book);

    return groupBooks.includes(normalizedBook);
  });
}

export const BIBLE_CHAPTERS = {
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
