import Button from './commons/Button';
import Container from './commons/Container';

function AcademicCTA() {
	const timelineData = [
		{
			year: '2024',
			title: "🎓 Master Expert en Informatique et Système d'Information",
			level: 'BAC+5',
			technologies: ['SI', 'Big Data', 'AI', 'Machine Learning', 'Docker', 'DevOps', 'CI/CD'],
			ctaLink: '/academic/master-eisi/projects',
			detailsLink: '/academic/master-eisi',
		},
		{
			year: '2022',
			title: '🎓 Licence Pro. Assistant de Projet Informatique',
			level: 'BAC+3',
			technologies: ['Vue.js', 'Node.js', 'Java', 'PHP', 'SQL'],
			ctaLink: '/academic/licence-apidae/projects',
			detailsLink: '/academic/licence-apidae',
		},
		{
			year: '2021',
			title: '🎓 DUT Informatique',
			level: 'BAC+2',
			technologies: ['Java', 'PHP', 'SQL', 'JavaScript', 'C'],
			ctaLink: '/academic/dut-informatique/projects',
			detailsLink: '/academic/dut-informatique',
		},
	];

	return (
		<Container id="academic" className="text-center dark:bg-transparent">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mon Parcours Académique</h2>
				<p className="mt-4 text-gray-600 dark:text-gray-300">
					Au fur et à mesure du temps, j'ai affiné mon parcours afin de réaliser des formations qui m'attiraient. Elles m'ont apportées à la
					fois les connaissances nécessaires tout en mettant l'accent sur la pratique.
				</p>
			</div>
			<div className="max-w-8xl mx-auto space-y-8">
				{timelineData.map(({year, title, level, technologies, ctaLink, detailsLink}, index) => (
					<div className="relative md:pl-32 py-6 group text-left" key={index}>
						{/* Timeline line */}
						<div className="absolute hidden md:block left-12 h-full w-1 rounded-full bg-blue-100 dark:bg-blue-900" />

						{/* Timeline dot */}
						<span className="absolute hidden md:block left-6 top-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
							{year}
						</span>

						{/* Content */}
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transition-all duration-200 hover:shadow-xl">
							{/* Header */}
							<div className="flex items-center gap-4 mb-4">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
								<div className="ml-auto text-right">
									<span className="inline-flex md:hidden items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
										{year}
									</span>
									<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{level}</p>
								</div>
							</div>

							{/* Technologies */}
							<div className="flex flex-wrap gap-2 mb-6">
								{technologies.map((tech, index) => (
									<span
										key={index}
										className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
									>
										{tech}
									</span>
								))}
							</div>

							{/* Buttons */}
							<div className="flex flex-wrap gap-4">
								<Button variant="primary" href={detailsLink}>
									En savoir +
								</Button>
								<Button variant="secondary" href={ctaLink}>
									Découvrir les projets réalisés
								</Button>
							</div>
						</div>
					</div>
				))}
				<div className="mt-8">
					<Button href="/docs/academic/master-eisi" variant="primary">
						Voir +
					</Button>
				</div>
			</div>
		</Container>
	);
}

export default AcademicCTA;
