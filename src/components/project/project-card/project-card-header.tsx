import {FunctionComponent} from 'react';
import {Project} from '../type';

interface ProjectCardHeaderProps {
	project: Project;
}

const ProjectCardHeader: FunctionComponent<ProjectCardHeaderProps> = ({project}) => {
	return (
		<div className="relative h-40">
			{/* Bolt Optimization: Native lazy loading on below-the-fold project card images reduces initial page load network overhead */}
			<img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover" />
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 dark:to-gray-800/20" />
		</div>
	);
};

export default ProjectCardHeader;
