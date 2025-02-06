import {FunctionComponent} from 'react';
import Button from '../../common/button2';
import {Project} from '../type';

interface ProjectCardFooterProps {
	links: Project['links'];
}

const ProjectCardFooter: FunctionComponent<ProjectCardFooterProps> = ({links}) => {
	return (
		<div className="flex gap-2">
			{links.doc && (
				<Button href={links.doc} variant="primary" proportion="small">
					En savoir +
				</Button>
			)}
			{links.website && (
				<Button href={links.website} target="_blank" rel="noopener noreferrer" variant="secondary" proportion="small">
					🔗 Site Web
				</Button>
			)}
		</div>
	);
};

export default ProjectCardFooter;
