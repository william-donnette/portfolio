import {classNames} from '@site/src/utils/classNames';
import {FunctionComponent} from 'react';

interface CarousselDotProps {
	index: number;
	isActive: boolean;
	setActiveSlide: Function;
}

const CarousselDot: FunctionComponent<CarousselDotProps> = ({index, isActive, setActiveSlide}) => {
	return (
		<div
			onClick={() => setActiveSlide(index)}
			className={classNames(
				'cursor-pointer w-2 h-2 rounded-full transition-all duration-200',
				isActive ? 'bg-blue-600 w-4' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
			)}
		/>
	);
};

export default CarousselDot;
