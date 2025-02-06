import {FunctionComponent} from 'react';
import {Qualification} from '../type';
import QualificationCardFooter from './qualification-card-footer';
import QualificationCardHeader from './qualification-card-header';
import QualificationCardTechnologies from './qualification-card-technologies';

interface QualificationCardProps {
	qualification: Qualification;
}

const QualificationCard: FunctionComponent<QualificationCardProps> = ({qualification}) => {
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transition-all duration-200 hover:shadow-xl">
			<QualificationCardHeader qualification={qualification} />
			<QualificationCardTechnologies technologies={qualification.technologies} />
			<QualificationCardFooter qualification={qualification} />
		</div>
	);
};

export default QualificationCard;
