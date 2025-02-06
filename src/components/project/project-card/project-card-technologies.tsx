import {FunctionComponent} from 'react';
import {Project} from '../type';

interface ProjectCardTechnologiesProps {
	technologies: Project['technologies'];
}

const ProjectCardTechnologies: FunctionComponent<ProjectCardTechnologiesProps> = ({technologies}) => {
	return (
		<div className="flex flex-no-wrap gap-1 mb-4">
			{technologies.slice(0, 3).map((tech, i) => (
				<span key={i} className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
					{tech}
				</span>
			))}
			{technologies.length > 3 && (
				<span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
					+{technologies.length - 3}
				</span>
			)}
		</div>
	);
};

export default ProjectCardTechnologies;
