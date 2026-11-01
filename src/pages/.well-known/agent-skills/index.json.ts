import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

// El hash se calcula al compilar, sobre los bytes que se publican: si la skill cambia, no se queda viejo.
const SKILLS = [
	{
		name: 'exercise-api',
		description:
			'Look up gym exercises in Spanish or English with the free Exercise API. Use it to find exercises by muscle, muscle group or equipment, or to get instructions, common mistakes, alternatives, illustrations and muscle maps. No API key needed.',
	},
];

export function GET() {
	const skills = SKILLS.map(({ name, description }) => {
		const path = `.well-known/agent-skills/${name}/SKILL.md`;
		const digest = createHash('sha256').update(readFileSync(`public/${path}`)).digest('hex');
		return { name, type: 'skill-md', description, url: `/${path}`, digest: `sha256:${digest}` };
	});
	const body = JSON.stringify({ $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json', skills }, null, 2);
	return new Response(body, { headers: { 'Content-Type': 'application/json' } });
}
