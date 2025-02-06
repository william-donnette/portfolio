import {ChevronRight} from 'lucide-react';
import {FunctionComponent} from 'react';

export interface CarousselChevronRightProps {
	nextSlide: Function;
}

const CarousselChevronRight: FunctionComponent<CarousselChevronRightProps> = ({nextSlide}) => {
	return (
		<button
			role="button"
			aria-label="Caroussel Right"
			onClick={() => nextSlide()}
			className="border-0 cursor-pointer h-8 w-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
		>
			<ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
		</button>
	);
};

export default CarousselChevronRight;
