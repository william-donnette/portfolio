import {FunctionComponent} from 'react';

interface InfiniteHorizontalScrollProps {
	items: Array<any>;
	children: FunctionComponent<any>;
}

const InfiniteHorizontalScroll: FunctionComponent<InfiniteHorizontalScrollProps> = ({items, children}) => {
	return (
		<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
			{[1, 2].map((key) => {
				return (
					<ul
						key={key}
						className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll list-none"
					>
						{items.map((item) => children(item))}
					</ul>
				);
			})}
		</div>
	);
};

export default InfiniteHorizontalScroll;
