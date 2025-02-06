import {FunctionComponent} from 'react';
import {Qualification} from '../type';

interface QualificationCardHeaderProps {
	qualification: Qualification;
}

const QualificationCardHeader: FunctionComponent<QualificationCardHeaderProps> = ({qualification}) => {
	return (
		<div className="flex items-center gap-4 mb-4">
			<h3 className="text-xl font-bold text-gray-900 dark:text-white">{qualification.title}</h3>
			<div className="ml-auto text-right">
				<span className="inline-flex md:hidden items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
					{qualification.year}
				</span>
				<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{qualification.level}</p>
			</div>
		</div>
	);
};

export default QualificationCardHeader;
