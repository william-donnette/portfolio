import {FunctionComponent} from 'react';
import {Qualification} from '../type';

interface QualificationCardTechnologiesProps {
	technologies: Qualification['technologies'];
}

const QualificationCardTechnologies: FunctionComponent<QualificationCardTechnologiesProps> = ({technologies}) => {
	return (
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
	);
};

export default QualificationCardTechnologies;
