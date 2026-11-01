import type { CollectionEntry } from 'astro:content';
import { SITE_URL } from '../consts';

// Bloques e incisos de código: se copian tal cual, porque un `<img>` o un `import` ahí es contenido.
const CODE = /^[ \t]*(`{3,}|~{3,})[^\n]*\n[\s\S]*?^[ \t]*\1[ \t]*$|`[^`\n]+`/gm;

const attr = (tag: string, name: string) => tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`))?.[1] ?? '';
const absolute = (url: string) => (url.startsWith('/') ? SITE_URL + url : url);

function cleanProse(text: string): string {
	return text
		.replace(/^import\s.+$/gm, '')
		.replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
		.replace(/<FAQ\b[\s\S]*?\/>/g, '')
		.replace(/<YouTube\b[\s\S]*?\/>/g, (tag) => `[YouTube](${attr(tag, 'id')})`)
		.replace(/<img\b[\s\S]*?\/?>/g, (tag) => `![${attr(tag, 'alt')}](${absolute(attr(tag, 'src'))})`)
		.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/g, (tag, label) => `[${label.trim()}](${absolute(attr(tag, 'href'))})`)
		.replace(/<figcaption>([\s\S]*?)<\/figcaption>/g, (_, caption) => `\n\n*${caption.trim()}*`)
		.replace(/<\/?figure>|<br\s*\/?>|<b\s*\/>/g, '')
		.replace(/^[ \t]+(?=!\[|\*)/gm, '')
		.replace(/(\]\()(\/[^)\s]*)/g, (_, open, path) => open + SITE_URL + path);
}

function cleanBody(body: string): string {
	let out = '';
	let last = 0;
	for (const match of body.matchAll(CODE)) {
		out += cleanProse(body.slice(last, match.index)) + match[0];
		last = match.index + match[0].length;
	}
	return (out + cleanProse(body.slice(last))).replace(/\n{3,}/g, '\n\n').trim();
}

export const markdownPath = (htmlPath: string) => htmlPath.replace(/\/$/, '') + '.md';

// Versión Markdown de un artículo: el mismo contenido que su página, sin componentes MDX.
export function postToMarkdown(post: CollectionEntry<'blog'>): string {
	const { title, description, pubDate, updatedDate, heroImage, customURL, faqs } = post.data;
	const lang = post.id.split('/')[0];
	const day = (d: Date) => d.toLocaleDateString('sv-SE');
	const meta = [
		['title', title],
		['description', description],
		['author', 'Marc Mayol'],
		['lang', lang],
		['published', day(pubDate)],
		updatedDate && ['updated', day(updatedDate)],
		['canonical', `${SITE_URL}/blog/${post.id}/`],
		customURL && ['translation', absolute(customURL)],
	].filter(Boolean) as string[][];

	const parts = [
		`---\n${meta.map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n')}\n---`,
		`# ${title}`,
		heroImage && `![${title}](${absolute(heroImage)})`,
		cleanBody(post.body ?? ''),
	];
	if (faqs?.length) {
		parts.push(`## ${lang === 'en' ? 'FAQs' : 'Preguntas frecuentes'}`);
		for (const { pregunta, respuesta } of faqs) parts.push(`### ${pregunta}\n\n${respuesta.trim()}`);
	}
	return parts.filter(Boolean).join('\n\n') + '\n';
}
