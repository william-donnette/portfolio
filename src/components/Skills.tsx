import Button from './commons/Button';
import Container from './commons/Container';

const skills = [
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

const SkillsCTA = () => {
	return (
		<Container id="skills" className="text-center md:dark:bg-gray-800">
			<div className="max-w-8xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mes Compétences</h2>
				<p className="mt-4 text-gray-600 dark:text-gray-300">
					Spécialisé en développement web FullStack, mes compétences sont très variées. J'utilise principalement des technologies modernes
					afin d'offrir la meilleure expérience lors de la conception de mes applications.
				</p>
				<div className="mt-6 flex flex-wrap justify-center gap-6">
					{skills.map((skill, index) => (
						<a
							key={index}
							href={skill.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center gap-2 hover:scale-105 hover:no-underline"
						>
							<div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
								<img src={skill.icon} alt={skill.name} className="w-10 h-10" />
							</div>
							<span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
						</a>
					))}
				</div>
				<div className="mt-8">
					<Button href="/docs/skills" variant="primary">
						Voir +
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default SkillsCTA;
