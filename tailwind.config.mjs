/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	darkMode: "class", // Vital para el modo oscuro
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				serif: ["Merriweather", "serif"],
			},
			colors: {
				darkBg: "#121212",
				darkPaper: "#1e1e1e",
			},
		},
	},
	plugins: [],
};
