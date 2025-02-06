export type Qualification = {
	year: number;
	title: string;
	level: 'BAC+5' | 'BAC+3' | 'BAC+2';
	technologies: Array<string>;
	link: string;
};

const qualifications: Array<Qualification> = [
	{
		year: 2024,
		title: "🎓 Master Expert en Informatique et Système d'Information",
		level: 'BAC+5',
		technologies: ['SI', 'Big Data', 'AI', 'Machine Learning', 'Docker', 'DevOps', 'CI/CD'],
		link: '/academic/master-eisi',
	},
	{
		year: 2022,
		title: '🎓 Licence Pro. Assistant de Projet Informatique',
		level: 'BAC+3',
		technologies: ['Vue.js', 'Node.js', 'Java', 'PHP', 'SQL'],
		link: '/academic/licence-apidae',
	},
	{
		year: 2021,
		title: '🎓 DUT Informatique',
		level: 'BAC+2',
		technologies: ['Java', 'PHP', 'SQL', 'JavaScript', 'C'],
		link: '/academic/dut-informatique',
	},
];

export default qualifications;
