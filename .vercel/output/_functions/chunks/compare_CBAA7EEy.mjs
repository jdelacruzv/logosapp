const GET = async ({ url }) => {
  let book = url.searchParams.get("book") || "";
  const chapter = url.searchParams.get("chapter");
  const verse = url.searchParams.get("verse");
  if (!book || !chapter || !verse) {
    return new Response(JSON.stringify({ error: "Missing params" }), {
      status: 400
    });
  }
  const normalizeBookForAPI = (name) => {
    const specialAccents = {
      genesis: "Génesis",
      exodo: "Éxodo",
      levitico: "Levítico",
      numeros: "Números",
      josue: "Josué",
      cronicas: "Crónicas",
      nehemias: "Nehemías",
      eclesiastes: "Eclesiastés",
      isaias: "Isaías",
      jeremias: "Jeremías",
      amos: "Amós",
      abdias: "Abdías",
      jonas: "Jonás",
      sofonias: "Sofonías",
      zacarias: "Zacarías",
      malaquias: "Malaquías",
      galatas: "Gálatas",
      filemon: "Filemón"
    };
    const lowerName = name.trim().toLowerCase();
    if (specialAccents[lowerName]) return specialAccents[lowerName];
    return lowerName.split(" ").map((word) => {
      if (!isNaN(parseInt(word))) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  };
  const bookNameFixed = normalizeBookForAPI(book);
  try {
    const targetUrl = `https://logosapi.onrender.com/compare/${encodeURIComponent(bookNameFixed)}/${chapter}/${verse}`;
    console.log("🚀 Petición a Render:", targetUrl);
    const response = await fetch(targetUrl);
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "API Error" }), {
        status: response.status
      });
    }
    const data = await response.json();
    const results = data.comparisons || [];
    return new Response(JSON.stringify(results), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (e) {
    console.error("❌ Error en compare.ts:", e);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
