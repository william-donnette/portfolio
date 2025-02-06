import {ChevronLeft} from 'lucide-react';
import {FunctionComponent} from 'react';

export interface CarousselChevronLeftProps {
	previousSlide: Function;
}

const CarousselChevronLeft: FunctionComponent<CarousselChevronLeftProps> = ({previousSlide}) => {
	return (
		<button
			onClick={() => previousSlide()}
			className="border-0 cursor-pointer h-8 w-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
		>
			<ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
		</button>
	);
};

export default CarousselChevronLeft;
