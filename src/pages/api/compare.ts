import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
	const bookParam = url.searchParams.get("book");
	const chapter = url.searchParams.get("chapter");
	const verse = url.searchParams.get("verse");

	if (!bookParam || !chapter || !verse) {
		return new Response(JSON.stringify({ error: "Faltan parámetros" }), {
			status: 400,
		});
	}

	// FUNCIÓN DE NORMALIZACIÓN PARA LA API
	// Convierte "génesis" -> "Génesis" o "1 juan" -> "1 Juan"
	const formatForAPI = (str: string) => {
		return str
			.split(" ")
			.map((word) => {
				if (!isNaN(parseInt(word))) return word; // Si es un número (1, 2), dejarlo igual
				return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
			})
			.join(" ");
	};

	const bookNameFixed = formatForAPI(bookParam.trim());

	try {
		// Usamos el nombre arreglado aquí
		const targetUrl = `https://logosapi.onrender.com/compare/${encodeURIComponent(bookNameFixed)}/${chapter}/${verse}`;

		console.log("🚀 Enviando a API Externa:", targetUrl);

		const response = await fetch(targetUrl);
		const data = await response.json();

		// La API devuelve { comparisons: [...] }
		const results = data.comparisons || [];

		return new Response(JSON.stringify(results), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (e) {
		return new Response(JSON.stringify({ error: "Error de red" }), {
			status: 500,
		});
	}
};
