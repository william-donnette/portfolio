import {FunctionComponent} from 'react';
import {Project} from '../type';
import ProjectCardFooter from './project-card-footer';
import ProjectCardTechnologies from './project-card-technologies';

interface ProjectCardBodyProps {
	project: Project;
}

const ProjectCardBody: FunctionComponent<ProjectCardBodyProps> = ({project}) => {
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

	return (
		<div className="p-2">
			<div className="flex flex-wrap items-center gap-2 mb-2">
				{getTypeTag(project.type)}
				{getStatusBadge(project.status)}
			</div>
			<h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>
			<p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
			<ProjectCardTechnologies technologies={project.technologies} />
			<ProjectCardFooter links={project.links} />
		</div>
	);
};

export default ProjectCardBody;
