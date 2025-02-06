import {FunctionComponent} from 'react';
import Button from '../common/Button';
import Container from '../common/Container';
import qualifications from './qualifications.mock';

interface QualificationsCTAProps {}

const QualificationsCTA: FunctionComponent<QualificationsCTAProps> = () => {
	return (
		<Container id="academic" className="text-center">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mon Parcours Académique</h2>
				<p className="mt-4 text-gray-600 dark:text-gray-300">
					Au fur et à mesure du temps, j'ai affiné mon parcours afin de réaliser des formations qui m'attiraient. Elles m'ont apportées à la
					fois les connaissances nécessaires tout en mettant l'accent sur la pratique.
				</p>
			</div>
			<div className="max-w-8xl mx-auto space-y-8">
				{qualifications.map(({year, title, level, technologies, link}, index) => (
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
								<Button variant="primary" href={link}>
									En savoir +
								</Button>
								<Button variant="secondary" href={link + '/projects'}>
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
};

export default QualificationsCTA;
