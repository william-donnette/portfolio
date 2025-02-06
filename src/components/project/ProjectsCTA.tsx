import {ChevronLeft, ChevronRight} from 'lucide-react';
import {FunctionComponent, useState} from 'react';
import Button from '../common/Button';
import Container from '../common/Container';
import projects, {Project} from './projects.mock';

interface ProjectsCTAProps {}

const ProjectsCTA: FunctionComponent<ProjectsCTAProps> = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const nextSlide = () => {
		setActiveIndex((current) => (current + 1) % projects.length);
	};

	const prevSlide = () => {
		setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
	};

	const getStatusBadge = (status: Project['status']) => {
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

	const getTypeTag = (type: Project['type']) => {
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
};

export default ProjectsCTA;
