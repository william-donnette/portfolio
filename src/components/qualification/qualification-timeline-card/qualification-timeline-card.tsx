import {FunctionComponent} from 'react';
import {Qualification} from '../type';
import QualificationTimelineCardBody from './qualification-card';

interface QualificationTimelineCardProps {
	qualification: Qualification;
}

const QualificationTimelineCard: FunctionComponent<QualificationTimelineCardProps> = ({qualification}) => {
	return (
		<div className="relative md:pl-32 py-6 group text-left">
			{/* Timeline line */}
			<div className="absolute hidden md:block left-12 h-full w-1 rounded-full bg-blue-100 dark:bg-blue-900" />

			{/* Timeline dot */}
			<span className="absolute hidden md:block left-6 top-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
				{qualification.year}
			</span>

			<QualificationTimelineCardBody qualification={qualification} />
		</div>
	);
};

export default QualificationTimelineCard;
