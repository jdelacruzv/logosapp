import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
	let book = url.searchParams.get("book") || "";
	const chapter = url.searchParams.get("chapter");
	const verse = url.searchParams.get("verse");

	if (!book || !chapter || !verse) {
		return new Response(JSON.stringify({ error: "Missing params" }), {
			status: 400,
		});
	}

	/**
	 * NORMALIZACIÓN PROFESIONAL
	 * Convierte "1 juan" -> "1 Juan", "genesis" -> "Genesis", "exodo" -> "Exodo"
	 * Esta función es compatible con todos los libros de la Biblia.
	 */
	const normalizeBookForAPI = (name: string) => {
		// Mapa de excepciones para libros que REQUIEREN tildes obligatoriamente en tu API
		const specialAccents: Record<string, string> = {
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
			filemon: "Filemón",
		};

		const lowerName = name.trim().toLowerCase();

		// Si es una de las excepciones con tilde, la devolvemos tal cual
		if (specialAccents[lowerName]) return specialAccents[lowerName];

		// Si no está en la lista de excepciones, aplicamos capitalización inteligente:
		// Separa por espacios, capitaliza cada palabra (excepto números) y vuelve a unir.
		return lowerName
			.split(" ")
			.map((word) => {
				if (!isNaN(parseInt(word))) return word; // Si es un número (1, 2, 3), se queda igual
				return word.charAt(0).toUpperCase() + word.slice(1);
			})
			.join(" ");
	};

	const bookNameFixed = normalizeBookForAPI(book);

	try {
		// El encodeURIComponent asegura que espacios y tildes viajen correctamente
		const targetUrl = `https://logosapi.onrender.com/compare/${encodeURIComponent(bookNameFixed)}/${chapter}/${verse}`;

		console.log("🚀 Petición a Render:", targetUrl);

		const response = await fetch(targetUrl);

		if (!response.ok) {
			return new Response(JSON.stringify({ error: "API Error" }), {
				status: response.status,
			});
		}

		const data = await response.json();
		const results = data.comparisons || [];

		return new Response(JSON.stringify(results), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		});
	} catch (e) {
		console.error("❌ Error en compare.ts:", e);
		return new Response(JSON.stringify({ error: "Internal Server Error" }), {
			status: 500,
		});
	}
};
