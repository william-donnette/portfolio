import {classNames} from '@site/src/utils/class-names';
import {FunctionComponent} from 'react';
import {Project} from '../type';
import ProjectCardBody from './project-card-body';
import ProjectCardHeader from './project-card-header';

interface ProjectCardProps {
	project: Project;
	index: number;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({project, index}) => {
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
		<div key={project.id} className={classNames('transform transition-all duration-300 text-left', getClassNameByIndexDifference(index))}>
			<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-[400px]">
				<ProjectCardHeader project={project} />
				<ProjectCardBody project={project} />
			</div>
		</div>
	);
};

export default ProjectCard;
