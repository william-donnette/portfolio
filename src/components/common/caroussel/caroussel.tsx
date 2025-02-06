import {FunctionComponent, useState} from 'react';
import CarousselChevronLeft from './caroussel-chevron-left';
import CarousselChevronRight from './caroussel-chevron-right';
import CarousselDot from './caroussel-dot';

interface CarousselProps {
	items: Array<any>;
	children: FunctionComponent<any>;
}

const Caroussel: FunctionComponent<CarousselProps> = ({items, children}) => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const nextSlide = () => {
		setActiveSlideIndex((current) => (current + 1) % items.length);
	};

	const previousSlide = () => {
		setActiveSlideIndex((current) => (current - 1 + items.length) % items.length);
	};

	return (
		<div className="relative">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{items
					.slice(activeSlideIndex)
					.concat(items.slice(0, activeSlideIndex))
					.map((item, index) => children(item, index))}
			</div>
			<div className=" flex w-full items-center justify-center my-10 gap-10">
				<CarousselChevronLeft previousSlide={previousSlide} />
				<div className="flex justify-center gap-2">
					{items.map((_, index) => (
						<CarousselDot index={index} isActive={index === activeSlideIndex} setActiveSlide={setActiveSlideIndex} />
					))}
				</div>
				<CarousselChevronRight nextSlide={nextSlide} />
			</div>
		</div>
	);
};

export default Caroussel;
