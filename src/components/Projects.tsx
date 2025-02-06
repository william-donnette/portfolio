import {ChevronLeft, ChevronRight} from 'lucide-react';
import {useState} from 'react';
import Button from './commons/Button';
import Container from './commons/Container';

interface ProjectData {
	id: string;
	title: string;
	status: 'active' | 'wip' | 'archived';
	type: 'personnel' | 'scolaire' | 'professionnel';
	description: string;
	image: string;
	technologies: string[];
	links: {
		website?: string;
		github?: string;
		doc: string;
	};
}

export default function Projects() {
	const [activeIndex, setActiveIndex] = useState(0);

	const projects: ProjectData[] = [
		{
			id: 'homkizz',
			title: "🏠 Hom'Kizz",
			status: 'wip',
			type: 'personnel',
			description: "Solutions digitales pour le secteur de l'immobilier avec Next.js, React et Machine Learning pour l'estimation immobilière.",
			image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
			technologies: ['Next.js', 'React', 'Docker', 'TailwindCSS', 'Machine Learning', 'PostgreSQL'],
			links: {
				website: 'https://homkizz.com/fr-FR',
				github: 'https://gitlab.com/homkizz-team',
				doc: '/docs/projects/homkizz',
			},
		},
		{
			id: 'etl-sncf',
			title: '🚂 ETL SNCF',
			status: 'active',
			type: 'professionnel',
			description: "Développement d'un ETL pour la transformation des données ferroviaires.",
			image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80',
			technologies: ['Node.js', 'TypeScript', 'PostgreSQL'],
			links: {
				doc: '/docs/experiences/sncf',
			},
		},
		{
			id: 'theses',
			title: '📚 Theses.fr',
			status: 'active',
			type: 'professionnel',
			description: 'Maintenance et évolution de la plateforme nationale de référencement des thèses.',
			image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
			technologies: ['Vue.js', 'Java Spring', 'PostgreSQL'],
			links: {
				website: 'https://theses.fr',
				doc: '/docs/03-experiences/01-abes/index.md',
			},
		},
		{
			id: 'app-mobile-ar',
			title: '📱 Réalité Augmentée',
			status: 'archived',
			type: 'scolaire',
			description: "Développement d'une application mobile avec React Native et APIs en C# intégrant la réalité augmentée.",
			image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			technologies: ['React Native', 'Expo', 'C#', 'Keycloak'],
			links: {
				github: 'https://gitlab.com/william-donnette/mspr1-mobile-app',
				doc: '/docs/academic/master-eisi/projects#-développement-dune-application-mobile',
			},
		},
		{
			id: 'wallet',
			title: '👛 Wallet',
			status: 'wip',
			type: 'personnel',
			description: 'Application mobile de suivi de patrimoine financier développée avec React Native et Expo.',
			image: 'https://images.unsplash.com/photo-1459257831348-f0cdd359235f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			technologies: ['React Native', 'Expo', 'Node.js', 'TypeScript'],
			links: {
				github: 'https://gitlab.com/william-donnette/wallet',
				doc: '/docs/projects/wallet',
			},
		},
		{
			id: 'ia-mspr',
			title: '🤖 IA Élections',
			status: 'archived',
			type: 'scolaire',
			description: 'Développement de modèles de Machine Learning pour la prédiction électorale.',
			image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			technologies: ['Python', 'TensorFlow', 'Pandas', 'Flask'],
			links: {
				github: 'https://gitlab.com/mspr2-big-data/mspr2-api-python',
				doc: '/docs/academic/master-eisi/projects#-développement-de-modèles-dia',
			},
		},
	];

	const nextSlide = () => {
		setActiveIndex((current) => (current + 1) % projects.length);
	};

	const prevSlide = () => {
		setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
	};

	const getStatusBadge = (status: ProjectData['status']) => {
		const badges = {
			active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
			wip: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
			archived: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
		};

		const labels = {
			active: 'Actif',
			wip: 'En développement',
			archived: 'Archivé',
		};

		return (
			<span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${badges[status]}`}>{labels[status]}</span>
		);
	};

	const getTypeTag = (type: ProjectData['type']) => {
		const tags = {
			personnel: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
			scolaire: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
			professionnel: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
		};

		const labels = {
			personnel: 'Personnel',
			scolaire: 'Scolaire',
			professionnel: 'Professionnel',
		};

		return <span className={`px-2 py-1 rounded-full text-xs font-medium ${tags[type]}`}>{labels[type]}</span>;
	};

	const getClassNameByIndexDifference = (index) => {
		if (index === 0) {
			return 'block';
		} else if (index === 1) {
			return 'hidden md:block';
		} else if (index === 2) {
			return 'hidden lg:block';
		} else if (index === 3) {
			return 'hidden xl:block';
		} else {
			return 'hidden';
		}
	};

	return (
		<Container id="projects" className="text-center md:dark:bg-gray-800">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mes Contributions</h2>
				<p className="mt-4 text-gray-600 dark:text-gray-300">
					J'ai toujours aimé relever des défis qu'ils soient professionnels, scolaires ou personnels. Ce qui m'attire le plus en
					informatique, c'est la possibilité de découvrir et de s'adapter à des univers complétement différents.
				</p>
			</div>
			<div className="relative">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{projects
						.slice(activeIndex)
						.concat(projects.slice(0, activeIndex))
						.map((project, index) => (
							<div
								key={project.id}
								className={`transform transition-all duration-300 text-left ${getClassNameByIndexDifference(index)}`}
							>
								<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-[400px]">
									<div className="relative h-40">
										<img src={project.image} alt={project.title} className="w-full h-full object-cover" />
										<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 dark:to-gray-800/20" />
									</div>

									<div className="p-2">
										<div className="flex flex-wrap items-center gap-2 mb-2">
											{getTypeTag(project.type)}
											{getStatusBadge(project.status)}
										</div>

										<h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>

										<p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

										<div className="flex flex-no-wrap gap-1 mb-4">
											{project.technologies.slice(0, 3).map((tech, i) => (
												<span
													key={i}
													className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
												>
													{tech}
												</span>
											))}
											{project.technologies.length > 3 && (
												<span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
													+{project.technologies.length - 3}
												</span>
											)}
										</div>

										<div className="flex gap-2">
											{project.links.doc && (
												<Button href={project.links.doc} variant="primary" proportion="small">
													En savoir +
												</Button>
											)}
											{project.links.website && (
												<Button
													href={project.links.website}
													target="_blank"
													rel="noopener noreferrer"
													variant="secondary"
													proportion="small"
												>
													🔗 Site Web
												</Button>
											)}
										</div>
									</div>
								</div>
							</div>
						))}
				</div>

				{/* Navigation Buttons */}
				<div className=" flex w-full items-center justify-center my-10 gap-10">
					<div
						onClick={prevSlide}
						className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
					>
						<ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
					</div>
					<div className="flex justify-center gap-2">
						{projects.map((_, index) => (
							<div
								key={index}
								onClick={() => setActiveIndex(index)}
								className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-200 ${
									index === activeIndex
										? 'bg-blue-600 w-4'
										: 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
								}`}
							/>
						))}
					</div>
					<div
						onClick={nextSlide}
						className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
					>
						<ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
					</div>
				</div>
			</div>
		</Container>
	);
}
