import type { APIContext } from 'astro';
import { type CollectionEntry, getCollection } from 'astro:content';
import { postToMarkdown } from '../../utils/postMarkdown';

export async function getStaticPaths() {
	const posts = await getCollection('blog');
	return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export function GET({ props }: APIContext<{ post: CollectionEntry<'blog'> }>) {
	return new Response(postToMarkdown(props.post), {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
}
