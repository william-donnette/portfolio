export type Skill = {
	name: string;
	icon: string;
	link: string;
};

const skills: Array<Skill> = [
	{name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', link: '/docs/skills/hard-skills/js-ts/'},
	{name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', link: '/docs/skills/hard-skills/js-ts/'},
	{name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', link: '/docs/skills/hard-skills/js-ts/'},
	{
		name: 'TypeScript',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
		link: '/docs/skills/hard-skills/js-ts/',
	},
	{name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', link: '/docs/skills/hard-skills/docker/'},
	{
		name: 'PostgreSQL',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
		link: '/docs/skills/hard-skills/sql/',
	},
];

export default skills;
