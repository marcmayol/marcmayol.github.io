// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import { readdirSync, readFileSync } from 'node:fs';
import { slug } from 'github-slugger';

const SITE = 'https://marcmayol.com';

// Copias sin prefijo de idioma: su canonical apunta a la versión /es/, no van al sitemap
const DUPLICATES = ['/es/', '/about/', '/blog/', '/contacto/', '/archjourney/'].map((p) => SITE + p);

// lastmod de cada artículo a partir de su frontmatter (updatedDate o pubDate)
const lastmods = new Map();
for (const lang of ['es', 'en']) {
	const dir = `./src/content/blog/${lang}`;
	for (const file of readdirSync(dir)) {
		if (!/\.mdx?$/.test(file)) continue;
		const fm = readFileSync(`${dir}/${file}`, 'utf-8').split('---')[1] ?? '';
		const date = (fm.match(/^updatedDate:\s*['"]?([^'"\n]+)/m) ?? fm.match(/^pubDate:\s*['"]?([^'"\n]+)/m))?.[1];
		if (!date || isNaN(Date.parse(date))) continue;
		const id = slug(file.replace(/\.mdx?$/, ''));
		lastmods.set(`${SITE}/blog/${lang}/${id}/`, new Date(date).toLocaleDateString('sv-SE'));
	}
}

// Slugs antiguos (con tildes, mayúsculas o erratas) -> slug nuevo. Astro genera una página de redirección en cada ruta vieja
const REDIRECTS = Object.fromEntries(
	Object.entries(JSON.parse(readFileSync('./redirects.json', 'utf-8'))).map(([from, to]) => [from.replace(/\/$/, ''), to]),
);

// https://astro.build/config
export default defineConfig({
	site: SITE,
	// base:'test-astro',
	output: 'static',
	redirects: REDIRECTS,
	build: {
		inlineStylesheets: 'always',
	},
	vite: {
		plugins: [tailwindcss()],
	},
	i18n: {
		locales: ["es", "en"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false
		},
	},
	integrations: [mdx(), sitemap({
		filter: (page) => !DUPLICATES.includes(page) && !Object.keys(REDIRECTS).some((from) => decodeURI(page) === SITE + from + '/'),
		customPages: [`${SITE}/DracApps/`, `${SITE}/exercise-api/`],
		serialize(item) {
			const lastmod = lastmods.get(decodeURI(item.url));
			if (lastmod) item.lastmod = lastmod;
			return item;
		},
	})],
});
