import {FunctionComponent} from 'react';
import Caroussel from '../common/caroussel';
import Container from '../common/container2';
import ProjectCard from './project-card';
import projects from './projects.mock';

interface ProjectsCTAProps {}

const ProjectsCTA: FunctionComponent<ProjectsCTAProps> = () => {
	return (
		<Container id="projects" className="text-center md:dark:bg-gray-800">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mes Contributions</h2>
				<p className="mt-4 text-gray-600 dark:text-gray-300">
					J'ai toujours aimé relever des défis qu'ils soient professionnels, scolaires ou personnels. Ce qui m'attire le plus en
					informatique, c'est la possibilité de découvrir et de s'adapter à des univers complétement différents.
				</p>
			</div>
			<Caroussel items={projects}>{(project, index) => <ProjectCard project={project} index={index} />}</Caroussel>
		</Container>
	);
};

export default ProjectsCTA;
